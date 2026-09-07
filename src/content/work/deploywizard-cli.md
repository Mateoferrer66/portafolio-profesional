---
title: DeployWizard CLI
publishDate: 2024-05-05 00:00:00
img: https://images.unsplash.com/photo-1629654297299-c8506221ca97?w=800&h=600&fit=crop&q=80
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


