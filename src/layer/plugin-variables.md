# Extra QGIS Variables

The <QGISPluginName /> adds several variables that can be used in QGIS expressions:

| Variable name               | Sample value                  | Scope   | Description |
|-----------------------------|-------------------------------|---------|-------------|
| `@mergin_username`          | `martin`                      | global  | Name of the user currently logged in to <MainPlatformNameLink /> |
| `@mergin_user_email`        | `martin@example.com` | global  | Email of the user currently logged in to <MainPlatformName />|
| `@mergin_url`               | `https://app.merginmaps.com`  | global  | URL of the <MainPlatformName /> service |
| `@mergin_project_name`      | `Tree survey`                 | project | Name of the active <MainPlatformName /> project  |
| `@mergin_project_owner`     | `martin`                      | project | Name of the owner of the active project |
| `@mergin_project_full_name` | `martin/Tree survey`          | project | Owner and project name joined with a forward slash |
| `@mergin_project_version`   | `42`                          | project | Current version of the active project |

A common use case is to use `@mergin_username` as the [default value](./settingup_forms_settings/#default-values) for one of the fields in a survey layer to automatically track who has added (and/or modified) a particular record.
