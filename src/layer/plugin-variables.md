# Extra QGIS Variables

The plugin adds several variables that can be used in QGIS expressions:

| Variable name               | Sample value                     | Scope   | Description |
|-----------------------------|----------------------------------|---------|-------------|
| `@mergin_username`          | `martin`                         | global  | Name of the user currently logged in to Mergin |
| `@mergin_url`               | `https://public.cloudmergin.com` | global  | URL of the Mergin service |
| `@mergin_project_name`      | `Tree survey`                    | project | Name of the active Mergin project  |
| `@mergin_project_owner`     | `martin`                         | project | Name of the owner of the active Mergin project |
| `@mergin_project_full_name` | `martin/Tree survey`             | project | Owner and project name joined with a forward slash |
| `@mergin_project_version`   | `42`                             | project | Current version of the active Mergin project |

A common use case is to use `@mergin_username` as the default value for one of the fields in a survey layer to automatically track who has added (and/or modified) a particular record.
