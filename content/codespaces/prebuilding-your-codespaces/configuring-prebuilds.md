---
title: Configuring prebuilds
render_with_liquid: false
---

# Configuring prebuilds

You can configure prebuilds for your repository to speed up codespace creation.

## About prebuilds

A prebuild is a pre-configured codespace template that is ready to use. When you create a codespace from a repository with prebuilds configured, GitHub uses a prebuild to significantly reduce the time it takes to set up your environment.

## Prerequisites

To configure prebuilds, you must be a repository administrator or have access to the repository settings.

## Creating a prebuild configuration

1. On GitHub, navigate to the main page of the repository.
2. Under your repository name, click Settings.
3. In the left sidebar, click Codespaces.
4. In the Prebuild configuration section, click Set up prebuild.
5. Select the branch you want to configure prebuilds for.
6. Configure the regions and trigger settings, then click Create.

## Troubleshooting

If you experience issues, check the prebuild history in your repository settings to see the logs for the prebuild workflow runs.
