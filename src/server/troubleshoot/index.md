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

## Celery settings

The following section provides some background to Celery setting via available environment variables. All these variables start with `CELERY_`

* `CELERY_RESULT_BACKEND` - Where Celery sends the tasks results (to Redis backend by default on Mergin Maps)
* `CELERY_ACKS_LATE` - If `True`, means tasks will be transmitted as execute, AFTER they are finished, not 'right before'. Default: `False`
* `CELERYD_CONCURRENCY` - Number of child processes. As rule of thumb do not use all available CPUs. If not set, defaults to all available CPUs, which may lead to system instability if many users trigger Celery tasks in parallel.
* `CELERYD_PREFETCH_MULTIPLIER` - The number of messages to prefetch at a time multiplied by the number of concurrent processes. Default is `4`. If you want to disable this feature set it to `1`.
