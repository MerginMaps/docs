# Integrate Mergin Maps
[[toc]]

<MainPlatformNameLink /> is an open platform that aims to be developer friendly and it has been designed to allow easy integration with other software.

## Python client module
The Python client module is the easiest way to programmatically use <MainPlatformNameLink />. You can use Python API or a command-line tool to easily work with <MainPlatformName /> projects, such as to get project status, push and pull changes, or to download, create and delete projects.

The <GitHubRepo id="MerginMaps/mergin-py-client" /> repository contains the source code of the Python client module and more information on how to use it.

Python client is available in the PyPI repository and can be installed with `pip`:

```
pip3 install mergin-client
```

### Python module 
To use <MainPlatformNameLink /> from Python, just create `MerginClient` object and then use it. Here, for instance, to download a project:

```python
import mergin

client = mergin.MerginClient(login='john', password='topsecret')
client.download_project('lutraconsulting/Basic survey', '/tmp/basic-survey')
```
If you have <QGISPluginName /> installed and you want to use it from the QGIS' Python console

```python
import Mergin.mergin as mergin
client = mergin.MerginClient(login='john', password='topsecret')
```

### Python command line interface
For those who prefer using terminal, there is `mergin` command line tool shipped with the Python client. With several built-in commands, it is possible to download <MainPlatformName /> projects, push/pull changes, create or delete projects and more.

For example, to download a <MainPlatformName /> project to a local folder:
```
mergin download john/project1 ~/mergin/project1
```
For more details, visit <GitHubRepo id="MerginMaps/mergin-py-client" />.

## C++ standalone client
C++ Client has advantage over Python that it is completely without any dependencies. 

To install the C++ client, just download the binary for your platform from <GitHubRepo id="MerginMaps/mergin-cpp-client/releases"/> and use it from the command line.

Go to <GitHubRepo id="MerginMaps/mergin-cpp-client" /> repository for more information on how to use it.

### C++ Command line tool
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

### C++ Mergin Maps API core library 

Client is based on the Qt-based <GitHubRepo id="MerginMaps/input/tree/master/core" desc="mergin maps api core library" /> used by the <MainDomainNameLink desc="Mergin Maps Input" /> to sync the projects in the mobile application.
