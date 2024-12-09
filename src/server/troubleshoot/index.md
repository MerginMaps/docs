# Troubleshoot Custom Servers

This article will help you debug and resolve issues in your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> deployment. If you use the main SaaS <DashboardLink desc="Mergin Maps Server"/>, it is always up-to-date and managed by <MainPlatformName /> team, so report your problems to us as [described here](../../misc/troubleshoot/index.md). Read more about server platforms in [overview article](../index.md). Follow [installation guide](../install/index.md) to install your own server. Documentation to environment variables and other configuration options can be found in [configure](../administer/environment.md) section.

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

* `MAIL_DEFAULT_SENDER` is mandatory and should be a valid email address
* `MAIL_SERVER` should be a valid url to SMTP server
* `MAIL_PORT` if you have different port than 587, configure it with this variable
* `MAIL_SUPPRESS_SEND` check if you set it to `False`

In some deployments are SMTP servers that are not supporting authentication and TLS. In this case, you can disable authentication by not defining variable `MAIL_USERNAME` and `MAIL_PASSWORD` (which are by default `None`). If your SMTP server does not support TLS or SSL you can disable encryption by setting `MAIL_USE_TLS` and `MAIL_USE_SSL` to `false`. It's recommended to use authentication and TLS encryption.

Server is sending emails with celery worker. If you are not receiving emails, check if celery worker is running. You can check logs for sending emails in `celery-worker` container:
```shell
$ docker logs celery-worker
```