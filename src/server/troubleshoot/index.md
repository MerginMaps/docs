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

Celery plays an important role on <MainPlatformName /> hence the need to quickly diagnose its functionality.

* Make sure `BROKER_URL` is correct!
* Make sure `celery-beat` and `celery-worker` containers are up and running

If you perform a `docker compose  logs -tf celery-worker` you should see on logs output a line like this:

```shell
  celery-worker  | 2025-03-04T10:40:16.718182375Z [2025-03-04 10:40:16,718: INFO/MainProcess] Connected to redis://merginmaps-redis:6379/0
```

This means `celery-worker` is up and communicating with `redis`

* Make sure `redis` is up and receiving `celery-worker` tasks

If you perform a `docker compose exec redis redis-cli monitor` you should see the output information regarding `tasks` and `heartbeat` of the `celery-worker`node.

```shell
  1741085464.139904 [0 172.18.0.8:38054] "BRPOP" "celery" "celery\x06\x163" "celery\x06\x166" "celery\x06\x169" "1"
  1741085464.578928 [0 172.18.0.8:38124] "PUBLISH" "/0.celeryev/worker.heartbeat" "{\"body\": \"eyJob3N0bmFtZSI6ICJjZWxlcnlAMmE2NTRiMzNiMzBjIiwgInV0Y29mZnNldCI6IDAsICJwaWQiOiA3LCAiY2xvY2siOiA2NDYsICJmcmVxIjogMi4wLCAiYWN0aXZlIjogMCwgInByb2Nlc3NlZCI6IDAsICJsb2FkYXZnIjogWzAuNzYsIDAuNzEsIDAuNzddLCAic3dfaWRlbnQiOiAicHktY2VsZXJ5IiwgInN3X3ZlciI6ICI1LjQuMCIsICJzd19zeXMiOiAiTGludXgiLCAidGltZXN0YW1wIjogMTc0MTA4NTQ2NC41NzgxMTUyLCAidHlwZSI6ICJ3b3JrZXItaGVhcnRiZWF0In0=\", \"content-encoding\": \"utf-8\", \"content-type\": \"application/json\", \"headers\": {\"hostname\": \"celery@2a654b33b30c\"}, \"properties\": {\"delivery_mode\": 1, \"delivery_info\": {\"exchange\": \"celeryev\", \"routing_key\": \"worker.heartbeat\"}, \"priority\": 0, \"body_encoding\": \"base64\", \"delivery_tag\": \"78d09f4f-5d84-498b-8b91-8823106df572\"}}"
  1741085465.148149 [0 172.18.0.8:38054] "BRPOP" "celery" "celery\x06\x163" "celery\x06\x166" "celery\x06\x169" "1"
  1741085466.158419 [0 172.18.0.8:38054] "BRPOP" "celery" "celery\x06\x163" "celery\x06\x166" "celery\x06\x169" "1"
```
