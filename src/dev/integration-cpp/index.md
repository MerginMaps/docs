---
description: To use C++ API client for Mergin Maps, simply download the binary for your platform and run it from the command line. No additional dependencies required.
---

# C++ API Client
[[toc]]

Do you want to integrate <MainPlatformNameLink />? <MainPlatformName /> is an open platform that aims to be developer friendly and it has been designed to allow easy integration with other software.

## Installation
C++ API client is completely without any dependencies. To install the client, just download the binary for your platform from <GitHubRepo id="MerginMaps/cpp-api-client/releases"/> and use it from the command line.

The client uses Qt-based <GitHubRepo id="MerginMaps/mobile/tree/master/core" desc="Mergin Maps API core library" /> used by the <MainDomainNameLink desc="mobile app" /> to sync the projects in the mobile application. Go to <GitHubRepo id="MerginMaps/cpp-api-client" /> repository for more information on how to use it. 

## Command line interface
When the client is installed, it comes with `mergin` command line tool.

```bash 
$ mergin --help
Usage: mergin [OPTIONS] COMMAND [ARGS]...

Options:  
  --help      Show this message and exit.
  --version   Show the version information.
  --username  Mergin username (or MERGIN_USERNAME env. variable)
  --password  Mergin password (or MERGIN_PASSWORD env. variable)
  --url       Mergin url      (defaults to app.merginmaps.com)

Commands:
  create         Create a new project on Mergin server
  download       Download last version of mergin project
  sync           Pull&Push the changes
  remove         Remove project from server.
```
