---
title: DeployWizard CLI
publishDate: 2024-05-05 00:00:00
img: /assets/shop-tech-maintenance.png
img_alt: Terminal screen showing code
description: |
  An open-source command-line interface tool designed to simplify and standardize deployment workflows for microservices.
tags:
  - DevOps
  - Open Source
  - Go
  - CLI
category: personal
---

## Overview

DeployWizard abstracts away the complexity of Kubernetes manifests and CI/CD pipelines, allowing developers to deploy with a single command.

## Key Features

- **Interactive Config**: Guided setup for new services.
- **Plugin System**: Extensible architecture for different cloud providers.
- **Secrets Management**: Securely injects environment variables.
- **Rollback Safety**: Automatic verification of health checks before traffic switch.

## Technologies Used

- **Language**: Go (Golang)
- **Libraries**: Cobra, Viper
- **Integration**: Kubernetes API, AWS SDK
