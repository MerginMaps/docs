# Administer
 
Administration guide will help you to configure and maintain your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink />. The main SaaS <DashboardLink desc="Mergin Maps Server"/> is maintained for you by Mergin Maps team. Read more about server platforms in [overview article](../index.md)
 
[[toc]]

## Server environment

See list of all [environment variables](./environment.md) that you can configure can be found

## Opt out of sending statistics
<SinceBadge type="Server" version="2023.2" />
<ServerType type="CE" />
<ServerType type="EE" />

By default, <CommunityPlatformName /> collects anonymous usage information to make the service better. There is a variable named `COLLECT_STATISTICS` that controls if statistics are collected and sent. 

If you do not want to provide these data, you can opt-out any time by setting this variable to *false* 
```
COLLECT_STATISTICS=false
```

::: warning
It is legally required by <EnterprisePlatformName /> servers to send usage information to monitor the usage of the License. 
:::