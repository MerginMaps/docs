---
description: List of events that are tracked in Mergin Maps audit logs.
---

# Audit Log Events

[[toc]]

Here is a complete list of events tracked in [Audit logs](../dashboard/#audit-logs).

## User audit events
- `user.login.succeeded` - Successful login
- `user.login.failed` - Failed login attempt
- `user.password.changed` - User changes their password
- `user.password.reset_requested` - User requests password reset
- `user.password.reset_completed` - User finalised password reset
- `user.password.reset_failed` - Password reset failed due to invalid reset or other means
- `user.created` - User account created
- `user.updated` - User profile updated
- `user.marked_for_deletion` - User account scheduled for deletion
- `user.deactivated` - User account set inactive
- `user.restored` - User account restored by admin (reactivated account or cancelled scheduled deletion)
- `user.deleted` - User account permanently deleted
- `user.locked` - User account locked after too many failed logins
- `user.unlocked` - User account unlocked
- `user.admin_panel_access.changed` - Admin user account changed (user became server admin or lost access to the admin panel)

## Project audit events
- `project.created` - Project created
- `project.updated` - Project settings changed
- `project.transfer_request.initiated` - Project transfer request sent
- `project.transfer_request.received` - Project transfer request received
- `project.transfer_request.completed` - Project transfer completed
- `project.transfer_request.accepted` - Project transfer accepted
- `project.transfer_request.canceled` - Project transfer cancelled (by the original workspace)
- `project.transfer_request.rejected` - Project transfer rejected (by the new workspace)
- `project.marked_for_deletion` - Project scheduled for deletion
- `project.restored` - Project scheduled for deletion restored
- `project.deleted` - Project permanently deleted
- `project.member.added` - User added to a project
- `project.member.updated` - Project member role changed
- `project.member.deleted` - User removed from a project
- `project.access_request.initiated` - User sent a request to access a project
- `project.access_request.accepted` - Project access request accepted
- `project.access_request.canceled` - Project access request cancelled
- `project.version.created` - New project version created
- `project.map_sharing.updated` - Webmap link enabled or disabled
- `project.map_sharing.link_rotated` - Webmap link regenerated
- `project.ogc_api.access_updated` - OGC API link updated (created, regenerated, removed)
- `project.ogc_api.link_rotated` - OGC API link regenerated

## Workspace audit events
- `workspace.created` - Workspace created
- `workspace.updated` - Workspace settings changed
- `workspace.marked_for_deletion` - Workspace scheduled for deletion
- `workspace.deactivated` - Workspace deactivated
- `workspace.restored` - Workspace reactivated
- `workspace.deleted` - Workspace permanently deleted
- `workspace.member.added` - User added to workspace
- `workspace.member.updated` - Workspace member role changed
- `workspace.member.deleted` - User removed from workspace
- `workspace.invitation.created` - Workspace invitation sent
- `workspace.invitation.updated` - Workspace invitation resent
- `workspace.invitation.accepted` - Workspace invitation accepted
- `workspace.invitation.canceled` - Workspace invitation cancelled or rejected
