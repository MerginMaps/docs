# Administer
 
Administration guide will help you to configure and maintain your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink />. The main Cloud <DashboardLink desc="Mergin Maps Server"/> is maintained for you by <MainPlatformName /> team. Read more about server platforms in the [overview article](../index.md).
 
[[toc]]

## Server environment

See the list of all [environment variables](./environment.md) that you can configure.

## Telemetry Service

<MainPlatformName /> telemetry service helps us gather some information about the usage of the platform, namely on-premise deployment. This information is very valuable to us to help us improve <MainPlatformName />.
Please consider enabling this functionality, even if you are using <CommunityPlatformName /> edition. For <EnterprisePlatformName /> deployments, as you'll check down below, this is <b>mandatory</b>.

The <MainPlatformName /> telemetry service (`call-home`) requires https access to `https://api.merginmaps.com/monitoring` on `TCP` port `443`.

<ServerType type="EE" />
::: warning
It is legally required by <EnterprisePlatformName /> servers to send usage information to monitor the usage of the License.

Double check your deployment. Make sure if `COLLECT_STATISTICS` environment variable is present, <b>it is set to `True`</b>.

:::

```
COLLECT_STATISTICS=true # Or you can ommit, default is True
```

<ServerType type="CE" />
<SinceBadge type="Server" version="2023.2" />


By default, <CommunityPlatformName /> collects anonymous usage information to make the service better. There is a variable named `COLLECT_STATISTICS` that controls if statistics are collected and sent. 

If you do not want to provide these data, you can opt-out any time by setting this variable to *false*:
```
COLLECT_STATISTICS=false
```

