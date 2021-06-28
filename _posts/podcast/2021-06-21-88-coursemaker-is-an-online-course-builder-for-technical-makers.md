---
layout: "podcast-or-interview"

mp3_bytes: "87457920"
mp3_duration: "1:31:06"

guest: "Chris Samiullah"
guest_avatar: "chris-samiullah"
guest_website: "https://coursemaker.org/"
guest_twitter: "ChrisSamiullah"

category: "podcast"
tags:
  - "fastapi"
  - "python"
  - "node"
  - "react"
  - "acm"
  - "aws"
  - "cloudflare"
  - "cloudfront"
  - "codedeploy"
  - "docker"
  - "ecs"
  - "fargate"
  - "github-actions"
  - "lambda"
  - "lets-encrypt"
  - "paddle"
  - "postgres"
  - "route53"
  - "s3"
  - "sentry"
  - "serverless"
  - "ses"
  - "slack"
  - "static-site"
  - "stripe"
  - "terraform"
  - "uptime-robot"

title: "CourseMaker Is an Online Course Builder for Technical Makers"
description:
  Chris Samiullah goes over building a video course platform with FastAPI,
  Strapi and Gatsby. It's hosted on ECS and various AWS resources.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
video course hosting platform with FastAPI, Strapi and Gatsby. It's hosted on
ECS along with a bunch of AWS resources. It's been running in production since
early 2021.

Chris talks about combining a Gatsby static site with FastAPI, using AWS
Fargate, streaming videos with Cloudflare, supporting both Stripe and Paddle,
using a bit of Serverless Lambdas and tons more.

## Topics Include

- 3:19 -- Hiring outside contractors to tackle setting up the infrastructure
- 5:05 -- Motivation for choosing Strapi, FastAPI, React, Gatsby and more
- 9:37 -- Strapi is being used as a headless CMS for the student watching front-end
- 10:33 -- Going over how the student watching experience is set up
- 14:20 -- Creating a course preview with Fargate using sub-domains and DNS entries
- 16:35 -- A couple Gatsby plugins that helped build the site
- 18:57 -- A couple of Python libraries to help build out the FastAPI back-end
- 20:54 -- Using Cloudflare for streaming the videos and Shaka as the video player
- 26:39 -- Stripe and Paddle are being used to handle payments (including VAT)
- 37:35 -- About 20k lines of Python and 10k lines of front-end / React code
- 39:53 -- Everything is Dockerized, there's PostgreSQL and an ALB too
- 43:30 -- Using Let's Encrypt and letting course owners hook up custom domain names
- 45:05 -- Reasons for choosing AWS and ECS (hosting is about $100 to $150 a month)
- 51:45 -- Having a dev (staging) server and production in different regions
- 53:27 -- What it's like coding things up in development and pushing them to production
- 58:42 -- The dev experience for using AWS Lambdas and creating internal tooling
- 1:05:59 -- On-boarding new authors (doing something that doesn't scale but it works now)
- 1:10:33 -- A public service announcement about database migrations
- 1:13:13 -- FastAPI has been working very nicely
- 1:16:41 -- Backing up the database and user generated files
- 1:19:56 -- Using Sentry for tracking errors and getting notified over Slack
- 1:25:35 -- Best tips? Pick a hosting infrastructure that fits your project
- 1:27:44 -- Picking between ECS and EKS was left to the contractor
- 1:30:03 --  Check out <{{ page.guest_website }}>, Chris is on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and [LinkedIn](https://uk.linkedin.com/in/chris-samiullah-b1133240) too

## Links

###### 📄 References

- <https://www.gatsbyjs.com/docs/conceptual/how-shadowing-works/>
- <https://github.com/encode/starlette>
- <http://paulgraham.com/ds.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/strapi/strapi>
- <https://github.com/sqlalchemy/sqlalchemy>
- <https://github.com/Delgan/loguru>
- <https://github.com/docopt/docopt>
- <https://github.com/google/shaka-player>
- <https://github.com/iconfinder/pyvat>
