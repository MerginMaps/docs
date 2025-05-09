# Extra QGIS Variables

The <QGISPluginName /> adds several variables that can be used in QGIS expressions:

| Variable name               | Sample value                  | Scope   | Description |
|-----------------------------|-------------------------------|---------|-------------
| `@mm_full_name`          | `martin second name`                      | global  | Full name of the currently logged in user, blank if the full name is not set |
| `@mm_username`          | `martin`                      | global  | Username of the user currently logged in to <MainPlatformNameLink /> |
| `@mm_user_email`        | `martin@example.com` | global  | Email of the user currently logged in to <MainPlatformName />|
| `@mm_url`               | `https://app.merginmaps.com`  | global  | URL of the <MainPlatformName /> service |
| `@mm_project_name`      | `Tree survey`                 | project | Name of the active <MainPlatformName /> project  |
| `@mm_project_full_name` | `martin/Tree survey`          | project | Workspace and project name joined with a forward slash |
| `@mm_project_version`   | `42`                          | project | Current version of the active project |

A common use case is to use `@mm_username` or `@mm_user_email` as the [default value](../form-configuration/#default-values) for one of the fields in a survey layer to automatically track who has added (and/or modified) a particular record.

::: tip `mergin_` variable names still work!
QGIS variables listed here previously used the prefix `mergin_`. Now we use the prefix `mm_` standing for <MainPlatformName />.

Both naming options are functional and will continue to work in the future: `@mergin_user_email` and `@mm_user_email` provide the same value when used in QGIS expressions.
:::
