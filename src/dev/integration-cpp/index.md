# C++ Standalone Client Integration
[[toc]]

Do you want to integrate <MainPlatformNameLink />? <MainPlatformName /> is an open platform that aims to be developer friendly and it has been designed to allow easy integration with other software.

## C++ client installation
C++ client is completely without any dependencies. To install the C++ client, just download the binary for your platform from <GitHubRepo id="MerginMaps/cpp-api-client/releases"/> and use it from the command line.

Go to <GitHubRepo id="MerginMaps/cpp-api-client" /> repository for more information on how to use it.

## Command line tool
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

## Mergin Maps API core library 

C++ Client is based on the Qt-based <GitHubRepo id="MerginMaps/mobile/tree/master/core" desc="Mergin Maps API core library" /> used by the <MainDomainNameLink desc="Mergin Maps mobile app" /> to sync the projects in the mobile application.
