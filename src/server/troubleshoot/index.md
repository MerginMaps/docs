# Troubleshoot Custom Servers

This article will help you debug and resolve issues in your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> deployment. If you use the main Cloud <DashboardLink desc="Mergin Maps Server"/>, it is always up-to-date and managed by <MainPlatformName /> team, so report your problems to us as [described here](../../misc/troubleshoot/index.md). Read more about server platforms in [overview article](../index.md). 

To install your own server, follow our [installation guide](../install/index.md). Documentation of environment variables and other configuration options can be found in [Configure environment](../administer/environment.md).

[[toc]]

:::tip
Haven't found a solution to your issue? Look at your other [troubleshooting options](../../misc/troubleshoot/index.md).
:::

## Server is not properly configured
Did you get an error that the server is not properly configured?
![Mergin Maps CE server not configured error](./ce-server-not-configured.jpg "Mergin Maps CE server not configured error")

1. Check if `MERGIN_BASE_URL` docker environment variable is assigned correctly.
   `MERGIN_BASE_URL` should contain the URL of your <CommunityPlatformName /> server.
   
2. Restart the container with the `MERGIN_BASE_URL` variable

## Emails are not sent

If you are not receiving emails, check that the following [environment variables](../administer/environment/) are set correctly:

* `MAIL_DEFAULT_SENDER` needs to be a valid email address
* `MAIL_SERVER` should be a valid URL to SMTP server
* `MAIL_PORT` SMTP mail server port is set to `587` by default. Change it to the correct value, if you use a different port.
* `MAIL_SUPPRESS_SEND` should be set to `false`

In some deployments, there may be SMTP servers that do not support authentication and TLS. In that case, you can disable authentication by not defining variables `MAIL_USERNAME` and `MAIL_PASSWORD` (which are set to `None` by default). 

If your SMTP server does not support TLS or SSL, you can disable encryption by setting `MAIL_USE_TLS` and `MAIL_USE_SSL` to `false`. However, it is recommended to use authentication and TLS encryption.

Server is sending emails with a celery worker. If you are not receiving emails, check if celery worker is running. Check logs for sending emails in the `celery-worker` container:
```shell
$ docker logs celery-worker
```

Logs should contain information about sending emails with task `mergin.celery.send_email_async` with success status:

```shell
[2024-12-09 10:37:16,265: INFO/ForkPoolWorker-2] Task mergin.celery.send_email_async[3e50df69-90c1-49be-b31c-78f1fb417500] succeeded in 0.11469305199989321s: None
```

## Permissions

You can check for `PermissionError` related errors using a built-in command line provided by <MainPlatformName />.
Just log to the main `server` container and run the following:

```shell
   docker exec merginmaps-server flask server permissions
```

The command line also accepts a specific path provided by the user (defaults to `/data`):

```shell
   docker exec merginmaps-server flask server permissions --path /my/path
```

If you have `PermissionError` related errors, please redo the following steps on your <MainPlatformName /> installation:

<MigrationType type="CE" />
```shell
  export MERGIN_DIR=/path/to/your/projects
  sudo mkdir -p $MERGIN_DIR
  sudo find $MERGIN_DIR -type f -exec sudo chmod 640 {} \;
  sudo find $MERGIN_DIR -type d -exec sudo chmod 750 {} \;
  sudo find $MERGIN_DIR -type d -exec sudo chmod g+s {} \;
  sudo chown -R 901:999 $MERGIN_DIR
```

For <EnterprisePlatformNameLink /> a complementary step needs to be made for the `overviews` mounted folder that enables [Webmaps](https://merginmaps.com/docs/manage/dashboard-maps/) on the platform.
<MigrationType type="EE" />
```shell
  export MERGIN_DIR=/path/to/your/overviews
  sudo mkdir -p $MERGIN_DIR
  sudo find $MERGIN_DIR -type f -exec sudo chmod 640 {} \;
  sudo find $MERGIN_DIR -type d -exec sudo chmod 750 {} \;
  sudo find $MERGIN_DIR -type d -exec sudo chmod g+s {} \;
  sudo chown -R 901:999 $MERGIN_DIR
```