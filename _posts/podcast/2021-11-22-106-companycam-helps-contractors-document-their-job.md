---
layout: "podcast-or-interview"

mp3_bytes: "62990976"
mp3_duration: "1:05:36"

guest: "Chad Wilken"
guest_avatar: "chad-wilken"
guest_website: "https://companycam.com"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "react"
  - "react-native"
  - "ansible"
  - "aws"
  - "cloudfront"
  - "datadog"
  - "docker"
  - "elasticache"
  - "elasticsearch"
  - "graphql"
  - "honeybadger"
  - "lambda"
  - "mongodb"
  - "nginx"
  - "postgres"
  - "pusher"
  - "rds"
  - "redis"
  - "route53"
  - "s3"
  - "scout"
  - "ses"
  - "slack"
  - "stripe"
  - "ubuntu"

title: "CompanyCam Helps Contractors Document Their Job"

description:
  Chad Wilken goes over building a service that contractors use to help them
  communicate with their crew and more. It's been up since 2014.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a service to help contractors document their job and communicate with their
crew. It's been up since 2014.

Chad talks about handling ~800k photo uploads per day, building a Rails API
driven app, creating a great mobile experience with React Native, handling
millions of daily Sidekiq (pro) jobs, transitioning to AWS ECS with Fargate,
deploying with Capistrano and so much more.

## Topics Include

- 3:04 -- Motivation for switching from .NET to Rails
- 5:59 -- It's a Rails API with a React front-end, first class mobile support is important
- 9:34 -- What type of screens does this app have?
- 11:58 -- As the CTO, Chad doesn't get a chance to code as much as he used to
- 13:15 -- A few Rails features and gems being used (interactor, wisper and more)
- 16:35 -- Third party sites that they integrate with
- 18:11 -- Contracting companies are a lot more technical than you might think
- 22:39 -- Every photo upload hits the Rails back-end but it's not processed there
- 25:30 -- Millions of jobs are being run through Sidekiq per day and payments
- 28:46 -- Spending time on the company admin back-end vs user features
- 33:20 -- Postgres (RDS), MongoDB, Elasticsearch and Redis are being used
- 36:13 -- The Flipper gem is being used for feature flags
- 37:44 -- Docker is being used in development with a transition to using them in production
- 39:30 -- How things are currently deployed and where they're going with AWS Fargate
- 41:03 -- From Chef to Ansible with Capistrano handling app deployments
- 43:35 -- Ubuntu is their distro of choice
- 44:00 -- Moving over to ECS with Fargate and hiring dedicated ops folks
- 48:28 -- A run down of which AWS resources they're using
- 49:25 -- The deployment process from development to production
- 54:59 -- All developers on the team can use whichever OS they prefer
- 55:37 -- Handling backups of all user data
- 58:22 -- Logging, error monitoring and alerts
- 1:01:40 -- Best tips? Design patterns are important, so is caching and saying no
- 1:03:48 -- Their AWS bill is about $38,000 a month
- 1:05:03 -- Check out <{{ page.guest_website }}>, they're hiring!

## Links

###### 📄 References

- <https://readme.com/>
- <https://buildbot.net/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/collectiveidea/interactor>
- <https://github.com/krisleech/wisper>
- <https://github.com/mperham/sidekiq>
- <https://github.com/rubocop/rubocop>
- <https://github.com/ankane/searchkick>
- <https://github.com/mrkamel/search_flip>
- <https://github.com/jnunemaker/flipper>
- <https://github.com/capistrano/capistrano>
