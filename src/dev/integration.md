# Integrate Mergin 

Mergin is an open platform that aims to be developer friendly, and it has been designed to allow easy integration with other software.

## Python client

### Installation 

The easiest way to use Mergin programmatically is to use the Python client module. It is available in the PyPI repository and so it can be installed with `pip`:

```
pip3 install mergin-client
```

### Python module 

A quick code example to download a project:

```python
from mergin import MerginClient

mc = MerginClient(login='john', password='pass')
mc.download_project('john/project1', '/home/john/mergin/project1')
```

You can of course also get project status, push/pull changes, create/delete projects and more.

The source code of the Python client is available on GitHub in <GitHubRepo id="lutraconsulting/mergin-py-client" /> repository.

### Command line interface

For those who prefer using terminal, there is `mergin` command line tool shipped with the Python client. With several built-in commands, it is possible to download Mergin projects, push/pull changes, create or delete projects and more.

For example, to download a Mergin project to a local directory:
```
mergin download john/project1 ~/mergin/project1
```

Please see <GitHubRepo id="lutraconsulting/mergin-py-client" /> repository for more information on the usage.

## C++ standalone client

C++ Client has advantage over Python that is is completely without any dependencies. 

### Installation 

Just  <GitHubRepo id="lutraconsulting/mergin-cpp-client/releases" desc="download"/> binary for your platform and use it from command line.

### Usage 
```bash 
$ mergin --help
Usage: mergin [OPTIONS] COMMAND [ARGS]...

Options:  
  --help      Show this message and exit.
  --version   Show the version information.
  --username  Mergin username (or MERGIN_USERNAME env. variable)
  --password  Mergin password (or MERGIN_PASSWORD env. variable)
  --url       Mergin url      (defaults to public.cloudmergin.com)

Commands:
  create         Create a new project on Mergin server
  download       Download last version of mergin project
  sync           Pull&Push the changes
  remove         Remove project from server.
```

Please see <GitHubRepo id="lutraconsulting/mergin-cpp-client" /> repository for more information on the usage.

### C++ Mergin API core library 

Client is based on the Qt-based <GitHubRepo id="lutraconsulting/input/tree/master/core" desc="mergin api core library" /> used by the [Input App](https://inputapp.io) to sync the projects in the mobile application.