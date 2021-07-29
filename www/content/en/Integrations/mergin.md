---
category: 'Integrations'
title: Mergin Integration
---

Mergin is an open platform that aims to be developer friendly, and it has been designed to allow easy integration with other software.

### Python Client

The easiest way to use Mergin programmatically is to use the Python client module. It is available in the PyPI repository and so it can be installed with `pip`:

```
pip3 install mergin-client
```

A quick code example to download a project:

```python
from mergin import MerginClient

mc = MerginClient(login='john', password='topsecret')
mc.download_project('john/project1', '/home/john/mergin/project1')
```

You can of course also get project status, push/pull changes, create/delete projects and more.

The source code of the Python client is available on GitHub in [lutraconsulting/mergin-py-client](https://github.com/lutraconsulting/mergin-py-client) repository.

### Command Line Interface

For those who prefer using terminal, there is `mergin` command line tool shipped with the Python client.
With several built-in commands, it is possible to download Mergin projects, push/pull changes, create or delete projects and more.

For example, to download a Mergin project to a local directory:
```
mergin download john/project1 ~/mergin/project1
```

Please see [lutraconsulting/mergin-py-client](https://github.com/lutraconsulting/mergin-py-client) repository for more information on the usage.


### Database Sync

Integrating with other databases is an important feature provided by the DB sync tool, hosted in [lutraconsulting/mergin-db-sync](https://github.com/lutraconsulting/mergin-db-sync)
repository. It takes care of synchronization of changes between a Mergin project and a PostgreSQL database. The synchronization works both ways:
it pushes changes from PostgreSQL to Mergin and it also pulls changes from Mergin to PostgreSQL. Please see the project page for more details.


### Webhooks (coming soon)

We will be soon adding support for webhooks to allow integration with other platforms. It will be possible to listen to notifications sent over HTTPS protocol whenever your project gets an update. Contact us if you would like to get early access to this feature.


### Mobile Apps

The [Input app](https://inputapp.io/) is a great companion to Mergin as it provides seamless synchronization of data between your phone/tablet and Mergin service. We know that sometimes people want a mobile app optimized for a specific use case rather than just using a general purpose app like Input.

The good news is that Input is licensed as open source software and therefore it is possible to build custom apps off it. Maybe you just want to change the branding or disable some funcationality - or maybe you want a bigger overhaul of the user interface - anything is possible with a bit of development.

If you are interested in building a custom app, you can start by going to [Input repository](https://github.com/lutraconsulting/input) on GitHub and building it for your platform. The [Input SDK repository](https://github.com/lutraconsulting/input-sdk) provides all the dependencies for various platforms (Android, iOS, macOS, Windows).
