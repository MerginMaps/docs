# Checking translated subpages for migration banner is visible
# Before run, install playwright python package for e2e testing and html page parsing:
# https://playwright.dev/python/docs/intro

import os
import sys
from playwright.sync_api import sync_playwright

CURRENT_PATH = os.path.abspath(__file__)
DIR = os.path.join(os.path.dirname(os.path.dirname(CURRENT_PATH)), 'src')
subpages = []

def test_translation_banner():
  for root, subfolders, files in os.walk(DIR):
    if os.path.isdir(os.path.join(DIR, root)) and '.vuepress' not in os.path.normpath(os.path.join(DIR, root)):
      subpages.append(os.path.relpath(root, DIR).replace('.', ''))

  languages = ['de', 'es', 'fr', 'it', 'pt']
  base_urls = ["https://{}.merginmaps.com/docs".format(lang) for lang in languages]
  
  problem_pages = []
  with sync_playwright() as p:
    browser = p.chromium.launch()
    for base_url in base_urls:
      for subpage in subpages:
        url = base_url + '/' + subpage
        page = browser.new_page()
        page.goto(url)
        h1_element = page.locator('h1')
        h1_text = h1_element.inner_text()
        print('Testing {}'.format(url))
        if h1_text!='404' and page.locator('.page-header').is_hidden():
          problem_pages.append(url)

  if (len(problem_pages) > 0):
     print('Problem pages:')
     print(problem_pages)
     sys.exit(1)

def main():
  test_translation_banner()

main()