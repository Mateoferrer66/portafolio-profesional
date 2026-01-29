---
title: Microservices API Gateway
publishDate: 2024-01-15 00:00:00
img: /assets/project-api.png
img_alt: Abstract visualization of network traffic and server architecture.
description: |
  Designed and implemented a scalable API Gateway handling 10k+ requests per second, improving system reliability and developer velocity.
tags:
  - Go
  - Docker
  - AWS
  - Microservices
  - DevOps
category: personal
featured: true
---

## The Challenge

As our microservices architecture grew, we faced issues with service discovery, centralized authentication, and rate limiting. Developers were re-implementing auth logic in every service, leading to security inconsistencies and code bloat.

## The Solution: A Centralized Gateway

I designed a custom API Gateway to act as the single entry point for all external traffic.

### Core Architecture
- **Language**: Built with **Go (Golang)** for its high concurrency performance and low memory footprint.
- **Reverse Proxy**: Implemented a custom reverse proxy that handles request routing, load balancing, and SSL termination.

### Key Features Implemented

1.  **Centralized Authentication (JWT)**
    *   The gateway leverages a separate Auth Service to validate JWTs.
    *   It injects user context headers into downstream requests, simplifying backend services.

2.  **Rate Limiting & Throttling**
    *   Implemented the **Token Bucket algorithm** using **Redis** to prevent abuse and ensure fair usage across API consumers.
    *   Configurable limits per user role or API key.

3.  **Circuit Breaking**
    *   Integrated a circuit breaker pattern to detect failing downstream services.
    *   Prevents cascading failures by failing fast and allowing the system to recover gracefully.

## Results

- **Performance**: Capable of handling **10,000+ RPS** with less than 20ms added latency.
- **Reliability**: System uptime improved from 99.5% to **99.99%** due to better failure isolation.
- **Developer Experience**: Removed 90% of boilerplate code from individual microservices, allowing teams to focus on business logic.

This project demonstrates my strong grasp of backend engineering principles, distributed systems, and infrastructure-as-code.


