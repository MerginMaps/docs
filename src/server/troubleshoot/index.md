# Troubleshoot

This article will help you to debug and resolve issues in your <CommunityPlatformNameLink /> or <EnterprisePlatformNameLink /> deployement. If you use the main SaaS <DashboardLink desc="Mergin Maps Server"/>, this is always up-to-date and managed by Mergin Maps team, so report your problems to the team as [described here](../../misc/trobuleshoot.md). Read more about server platforms in [overview article](../index.md)

[[toc]]

## Server is not properly configured
Did you get an error that the server is not properly configured?
![Mergin Maps CE server not configured error](./ce-server-not-configured.jpg "Mergin Maps CE server not configured error")

1. Check if `MERGIN_BASE_URL` docker environment variable is assigned correctly.
   `MERGIN_BASE_URL` should contain the URL of your <CommunityPlatformName /> server.
   
2. Restart the container with the `MERGIN_BASE_URL` variable
