# Tailscale Status

This repository contains the [Tailscale status page][status], based on the
[issue-status][is] project.

[status]: https://status.tailscale.com/
[is]: https://github.com/tadhglewis/issue-status

## Usage Instructions

### Updating component status

Find the component that you want to update–all components are labeled with the
`component` label. Remove the previous status label (e.g. `operational`) and
apply the new one (e.g. adding the `partial outage` or `performance issues`
label).

### Creating a new component

Create a new issue, and add the `issue status`, `component`, and `operational`
labels to it. The issue's title will be shown in the list of components at the
top of the status page. The issue's body is not currently displayed.

### Creating a new incident

To create a new incident, create a [new issue][ni] and add the `issue status`
and `incident` labels to the created issue. The issue's title and body will be
shown on the status page; Markdown is supported.

### Closing an issue

Close the associated GitHub Issue in order to change an incident's status on
the status page to closed.

[ni]: https://github.com/tailscale/issue-status/issues/new
