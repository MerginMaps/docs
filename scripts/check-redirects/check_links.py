__author__ = 'Pete'

import requests

print('Paste a list of links to check')
while True:
    i = input('>')
    if len(i) == 0:
        break
    r = requests.get(i)
    sc = r.status_code
    if sc != 200:
        print('%d: %s' % (sc, i))
