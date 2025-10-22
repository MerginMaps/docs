---
outline: deep
description: With the Python client module for Mergin Maps, you can use Python API or a command-line tool to easily work with your Mergin Maps projects and manage users.
---

# Python API Client
[[toc]]

Do you want to integrate <MainPlatformNameLink />? <MainPlatformName /> is an open platform that aims to be developer friendly and it has been designed to allow easy integration with other software.

::: tip <NoSpellcheck id="Jupyter" /> Notebooks examples gallery available
<GitHubRepo id="MerginMaps/python-api-client/tree/master/examples" desc="Mergin Maps Python Client" /> repository offers short code examples on how to use the python client module for basic scenarios, such as users management, synchronisation or projects management.
:::

## Installation
The Python client module is the easiest way to programmatically use <MainPlatformNameLink />. You can use Python API or a command-line tool to easily work with your projects, such as to get project status, push and pull changes. You can also create user accounts and manage their roles.

Python client is available in the PyPI repository and can be installed with `pip`:

```
pip3 install mergin-client
```

## Command line interface
For those who prefer using terminal, there is `mergin` command line tool shipped with the Python client. With several built-in commands, it is possible to download <MainPlatformName /> projects, push/pull changes, create or delete projects and more.

For example, to download a <MainPlatformName /> project to a local folder:
```
mergin download john/project1 ~/mergin/project1
```
For more details, visit <GitHubRepo id="MerginMaps/python-api-client" />.

## Python module 
To use <MainPlatformNameLink /> from Python, just create `MerginClient` object and then use it. Here, for instance, to download a project:

```python
import mergin

client = mergin.MerginClient(login='john', password='T0p_secret')
client.download_project('lutraconsulting/Basic survey', '/tmp/basic-survey')
```
If you have <QGISPluginName /> installed and you want to use it from the QGIS' Python console

```python
import Mergin.mergin as mergin
client = mergin.MerginClient(login='john', password='T0p_secret')
```

## API reference - users

You can create new users and manage their roles using the following methods.

::: warning API availability
The following methods are available for Python API Client versions `0.10.0` or higher, using server versions `2025.2.0` or higher.
:::

Some of the following methods require a `workspace_role` argument. This must be provided as a member of the `WorkspaceRole` enum.
To use the enum, import it from the `common.py` module:

```python
from mergin.common import WorkspaceRole
```

### Create a user

```python
client.create_user(<email>, <password>, <workspace_id>, <workspace_role>, [username], [notify_user])
```

The caller must be a workspace admin, owner or server administrator.

Arguments:

`email` (string): Must be a unique email.

`password` (string): Must meet security requirements.

`workspace_id` (int) <span title="Ignored on Community edition servers">:information_source:</span> : The workspace ID where the user will be added.

`workspace_role` (`WorkspaceRole` enum) <span title="Ignored on Community edition servers">:information_source:</span> : The user’s role in the workspace. [See the roles options](../../manage/permissions/index.md#workspace-member-roles-overview).

`username` (string, optional): If not provided, it will be automatically generated from the email address.

`notify_user` (Boolean, optional): If true, confirmation email and other email communication will be sent to the email address (invitations, access requests etc.). Default is `False`.

Example:
```python
from mergin.common import WorkspaceRole

client.create_user("jill@example.com", "T0p_secret", 1, WorkspaceRole.EDITOR, notify_user=True)
```

> :information_source: `workspace_id` and `workspace_role` arguments are ignored on Community edition servers.

---

### Workspace members methods

These methods are available for <ServerCloudNameLink /> and <EnterprisePlatformNameLink />.

::: warning API availability
The following methods are available for Python API Client versions `0.10.0` or higher, using server versions `2025.2.0` or higher.
:::

The caller of the following methods must be a workspace admin, owner or server administrator.

#### List members

```python
client.list_workspace_members(<workspace_id>)
```
Arguments:

`workspace_id` (int): ID of the workspace.

#### Get member detail

```python
client.get_workspace_member(<workspace_id>, <user_id>)
```
Arguments:

`workspace_id` (int): ID of the workspace.

`user_id` (int): ID of the user.

#### Update member role

```python
client.update_workspace_member(<workspace_id>, <user_id>, <workspace_role>, [reset_projects_roles])
```
Arguments:

`workspace_id` (int): ID of the workspace.

`user_id` (int): ID of the user.

`workspace_role` (`WorkspaceRole` enum): New role. [See the roles options](../../manage/permissions/index.md#workspace-member-roles-overview).

`reset_projects_roles` (Boolean, optional): If true, overridden project roles (explicitly shared projects access) will be reset. Default is `False`.

#### Remove member

```python
client.remove_workspace_member(<workspace_id>, <user_id>)
```
Arguments:

`workspace_id` (int): ID of the workspace.

`user_id` (int): ID of the user.

> The user account is not removed. This method only removes their access to the workspace.

#### Invite user to workspace

::: warning API availability
The following method is available for Python API Client versions `0.10.3` or higher, using server versions `2025.6.1` or higher.
:::

```python
client.create_invitation(<workspace_id>, <email>, <workspace_role>)
```

Arguments:

`workspace_id` (int): The workspace ID where the user will be invited.

`email` (string): The email of an existing user.

`workspace_role` (`WorkspaceRole` enum): The user’s role in the workspace. [See the roles options](../../manage/permissions/index.md#workspace-member-roles-overview).

---

### Project collaborators methods

These methods are available for all server types.

::: warning API availability
The following methods are available for Python API Client versions `0.10.0` or higher, using server versions `2025.2.0` or higher.
:::

The caller of the following methods must be a workspace admin, owner, project owner or server administrator.

The following methods accept project ids (of type `uuid`). You can find project id via <GitHubRepo id="MerginMaps/python-api-client/blob/634237890afd9f28f03953e5a01376b56f5abf5c/mergin/client.py#L572" desc="projects_list" /> and <GitHubRepo id="MerginMaps/python-api-client/blob/634237890afd9f28f03953e5a01376b56f5abf5c/mergin/client.py#L641" desc="project_info" /> methods.

Some of the following methods require a `project_role` argument. This must be provided as a member of the `ProjectRole` enum.
To use the enum, import it from the `common.py` module:

```python
from mergin.common import ProjectRole
```

#### List project collaborators

```python
client.list_project_collaborators(<project_id>)
```
Arguments:

`project_id` (string): ID of the project.

#### Add project collaborator

Adds a user as project collaborator. This method is good for sharing projects with guests or upgrading roles of members for specific projects.
On Cloud, the user must be a in the workspace where the project belongs.

```python
client.add_project_collaborator(<project_id>, <user>, <project_role>)
```
Arguments:

`project_id` (string): ID of the project.

`user` (string): Email or username of the user to be added to the project. 

`project_role`: (`ProjectRole` enum): Role of the user in the project. [See the roles options](../../manage/permissions/index.md#project-permissions-overview)

#### Update project collaborator role

```python
client.update_project_collaborator(<project_id>, <user_id>, <project_role>)
```
Arguments:

`project_id` (string): ID of the project.

`user_id` (int): ID of the user.

`project_role`: (`ProjectRole` enum): New role. [See the roles options](../../manage/permissions/index.md#project-permissions-overview)

> The user must be first added to the project (via [Add project collaborator](./index.md#add-project-collaborator)) before calling this method, even if he/she is already a workspace member or guest.

#### Remove project collaborator

```python
client.remove_project_collaborator(<project_id>, <user_id>)
```
Arguments:

`project_id` (string): ID of the project.

`user_id` (int): ID of the user.

> The user account is not removed, only the project access.

## Further details

The <GitHubRepo id="MerginMaps/python-api-client" /> repository contains the source code and more information on how to use it.

The repository also includes a <NoSpellcheck id="Jupyter" /> Notebooks examples gallery with short code examples on how to use the python client module for common use cases, such as users management, synchronisation or projects management.

