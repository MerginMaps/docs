__author__ = 'Pete'

import os
import sys
import re
from urllib.parse import urlparse

this_dir = os.path.dirname(os.path.realpath(__file__))
root_dir = os.path.join(this_dir, os.pardir, os.pardir)
input_file = os.path.join(root_dir, 'git-output.txt')  # Generate with git diff --name-status 2022.1.1 > git-output.txt
redirect_file = os.path.join(root_dir, 'REDIRECTS')

"""
Assumptions
- Pages always have .md extension
"""

def full_url_from_file(file):
    if file.endswith('index.md'):
        file = re.sub('index.md$', '', file)
    elif file.endswith('.md'):
        file = re.sub('.md$', '/', file)
    file = re.sub('^src/', '', file)
    return 'https://merginmaps.com/docs/' + file

def slashify(url):
    # If this line looks like it was for a page, ensure it will be matched regardless of whether it is accessed
    # with a trailing slash
    # First work out if it was for a page or a file of some kind
    is_file = False
    url_parts = urlparse(url)
    assert urlparse(url).query == ''
    if len(url_parts.path) > 0 and '.' in url_parts.path.split('/')[-1]:
        is_file = True
    if is_file:
        return url
    # So it's a page
    if url_parts.path.endswith('/'):
        path = url_parts.path + '?'  # The ? is a regex ?, not a query ?
    else:
        path = url_parts.path + '/?'
    if url_parts.scheme != '':
        path = url_parts.scheme + '://' + url_parts.netloc + path
    return path

page_extension = '.md'
iamge_extensions = ['.jpg', '.png', '.gif', '.xcf']
data_extensions = ['.json', '.zip']

deleted_pages = []
renamed_pages_or_data_files = []

page_and_image_exts = [page_extension].extend(iamge_extensions)
captured_exts = []

with open(input_file, 'r') as inp:
    for line in inp:
        line_parts = line.split('\t')
        status = line_parts[0]
        if status[0] == 'D':
            filename, file_extension = os.path.splitext(line_parts[1])
            if file_extension.strip() == page_extension:
                deleted_pages.append(line_parts[1].strip())
        elif status[0] == 'R':
            old_filename, file_extension = os.path.splitext(line_parts[1])
            if file_extension.strip() not in iamge_extensions:
                renamed_pages_or_data_files.append( (line_parts[1].strip(),line_parts[2].strip()) )
                if file_extension not in captured_exts:
                    captured_exts.append(file_extension)

url_redirection_config = []

with open(redirect_file, 'r') as red:
    line_no = 0
    for line in red:
        line_no += 1
        if len(line.strip()) == 0 or line.strip().startswith('#'):
            continue
        src, dst = line.split('\t')
        dst = dst.strip()
        if dst.startswith('N/A'):
            continue
        url_redirection_config.append( (line_no,src,dst) )

# Now do the checks

# Destinations which are pages should have a trailing slash
redirects_missing_trailing_slash = []
for l, s, d in url_redirection_config:
    filename, file_extension = os.path.splitext(d)
    if not d.endswith('/') and not file_extension in data_extensions:
        redirects_missing_trailing_slash.append(l)

# All destinations should start with https://merginmaps.com/docs/
execpected_proto_or_hosts = []
for l, s, d in url_redirection_config:
    if not d.startswith('https://merginmaps.com/docs/'):
        execpected_proto_or_hosts.append(l)

# There should be no duplicate sources
all_sources_no_trailing_slash = []
duplicate_sources = []
for l, s, d in url_redirection_config:
    if s.endswith('/'):
        s = s[:-1]
    if s not in all_sources_no_trailing_slash:
        all_sources_no_trailing_slash.append(s)
    elif s not in duplicate_sources:
        duplicate_sources.append(s)

# Deleted pages

# Check that all deleted pages have a redirect set up for them
deleted_pages_without_redirect = []
for delpage in deleted_pages:
    expected_source = full_url_from_file(delpage)
    if not expected_source in (item[1] for item in url_redirection_config):
        deleted_pages_without_redirect.append(delpage)

# Renamed pages
unhandled_renames = []
for old, new in renamed_pages_or_data_files:
    old_full = full_url_from_file(old)
    new_full = full_url_from_file(new)
    if old_full == new_full:
        # This occurs when we move from
        # foo/bar.md to foo/bar/index.md or vice-versa
        continue
    redirect_found = False
    for l, s, d in url_redirection_config:
        if s == old_full and d == new_full:
            redirect_found = True
            break
    if not redirect_found:
        unhandled_renames.append((old, new))

# Ensure a page that was deleted, or renamed, is not the target of any redirect
redirections_to_recently_renamed_or_deleted_content = []
all_missing_content = deleted_pages
for item in renamed_pages_or_data_files:
    if full_url_from_file(item[0]) == full_url_from_file(item[1]):
        # Ignore the case where we are going from foo/bar.md to foo/bar/index.md or vice-versa
        continue
    all_missing_content.append(item[0])
for missing_content in all_missing_content:
    missing_content = full_url_from_file(missing_content)
    for l, s, d in url_redirection_config:
        if d == missing_content:
            redirections_to_recently_renamed_or_deleted_content.append(l)


# Report findings

errors_found = False

if len(redirects_missing_trailing_slash) > 0:
    redirects_missing_trailing_slash.sort()
    sys.stderr.write('Missing trailing slashes on the following lines of REDIRECT file: %s\n' %
                     redirects_missing_trailing_slash)
    errors_found = True

if len(execpected_proto_or_hosts) > 0:
    execpected_proto_or_hosts.sort()
    sys.stderr.write('Host or protocol of following lines of REDIRECT file looked odd: %s\n' %
                     execpected_proto_or_hosts)
    errors_found = True

if len(execpected_proto_or_hosts) > 0:
    execpected_proto_or_hosts.sort()
    sys.stderr.write('Host or protocol of following lines of REDIRECT file looked odd: %s\n' %
                     execpected_proto_or_hosts)
    errors_found = True

if len(duplicate_sources) > 0:
    duplicate_sources.sort()
    sys.stderr.write('The following duplicate sources were found:\n')
    for ds in duplicate_sources:
        sys.stderr.write('\t%s\n' % ds)
    errors_found = True

if len(deleted_pages_without_redirect) > 0:
    deleted_pages_without_redirect.sort()
    sys.stderr.write('Deleted pages which do not appear to have a redirect set up:: %s\n' %
                     deleted_pages_without_redirect)
    errors_found = True

if len(unhandled_renames) > 0:
    unhandled_renames.sort()
    sys.stderr.write('Renamed content that wasn\'t handled properly:\n')
    for s_and_d in unhandled_renames:
        sys.stderr.write('\t%s -> %s\n' % s_and_d)
    errors_found = True

if len(redirections_to_recently_renamed_or_deleted_content) > 0:
    redirections_to_recently_renamed_or_deleted_content.sort()
    sys.stderr.write('Destinations of following lines of REDIRECT file have been deleted or renamed: %s\n' %
                     redirections_to_recently_renamed_or_deleted_content)
    errors_found = True

# Generate some configuration snippets that can be pasted into an nginx config

nginx_redirect_configs = {}
for l, s, d in url_redirection_config:
    src_comps = urlparse(s)
    if not src_comps.hostname in nginx_redirect_configs.keys():
        nginx_redirect_configs[src_comps.hostname] = {}
    dst_comps = urlparse(d)
    assert src_comps.path not in nginx_redirect_configs[src_comps.hostname].keys()
    nginx_redirect_configs[src_comps.hostname][src_comps.path] = dst_comps.path

redirect_test_file = open('redirect_test.txt', 'w')
for server in nginx_redirect_configs.keys():
    srcs = list(nginx_redirect_configs[server].keys())
    srcs.sort()  # to make things easily comparible
    dev_file = open('dev-%s-snippet.txt' % server, 'w')
    prod_file = open('prod-%s-snippet.txt' % server, 'w')
    for src in srcs:
        dst = nginx_redirect_configs[server][src]
        dev_file.write( '        rewrite ^%s$ https://dev.merginmaps.com%s permanent;\n' % (slashify(src),dst))
        prod_file.write('        rewrite ^%s$ https://merginmaps.com%s permanent;\n' % (slashify(src),dst))
        redirect_test_file.write('https://%s%s\n' % (server,src))

if errors_found:
    sys.exit(1)
sys.exit(0)