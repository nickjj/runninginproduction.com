---
layout: "podcast-or-interview"

mp3_bytes: "52797312"
mp3_duration: "54:59"

guest: "Dan Kolbman"
guest_avatar: "dan-kolbman"

category: "podcast"
tags:
  - "django"
  - "python"
  - "apollo"
  - "aws"
  - "circle-ci"
  - "cloudfront"
  - "docker"
  - "ecs"
  - "elasticache"
  - "fargate"
  - "graphql"
  - "jenkins"
  - "netlify"
  - "open-source"
  - "postgres"
  - "rds"
  - "redis"
  - "s3"
  - "ses"
  - "slack"
  - "terraform"

title: "Collecting and Processing Genomic Data to Help Cure Rare Diseases"
description:
  Dan Kolbman goes over building an internal tool to process Genomic data
  using Django and Python. It's all hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over using
Django to build an internal tool that helps make sense of ~5 Petabytes of
Genomic data that is then made available to clinicians. It's running across
many different AWS resources using ECS Fargate.

Dan walks us through what their app does, dealing with loads of data, using
GraphQL, getting away from using Serverless and going mostly all-in with AWS.
Their apps are open source too. The ones we'll be talking about are on GitHub
[here](https://github.com/kids-first/kf-api-study-creator) and
[here](https://github.com/kids-first/kf-api-release-coordinator).

## Topics Include

- 3:55 -- Motivation for using Django and Python
- 6:11 -- Using GraphQL and having a few separate apps (micro-service'ish)
- 11:16 -- Querying ~5 Petabytes of Genomic data stored on S3
- 17:21 -- Using both Graphene (GraphQL) and Django REST Framework
- 22:44 -- Docker is being used in dev (Docker Compose) and in production (ECS Fargate)
- 25:20 -- PostgreSQL and Redis are being used too with lots of background tasks
- 27:29 -- Breaking down which AWS resources they use, along with using Terraform
- 37:02 -- Netlify is being used for deploy previews and CloudFront for production
- 39:34 -- Breaking down the work flow for deploying something from dev to prod
- 46:55 -- Planning for disasters and handling backing up data
- 51:02 -- Automated metrics around CPU and memory, along with alerting
- 52:29 -- Best tips? Use tools that a lot of people have thought long and hard about
- 54:21 -- You can find Dan on [GitHub](https://github.com/dankolbman) and [his personal website](https://kolbman.com/)

## Links

###### 📄 References

- <https://www.nih.gov/>
- <https://aws.amazon.com/athena/>
- <https://www.nomadproject.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://github.com/graphql-python/graphene>
- <https://github.com/rq/django-rq>
