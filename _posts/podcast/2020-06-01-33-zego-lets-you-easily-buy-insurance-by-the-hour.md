---
layout: "podcast-or-interview"

mp3_bytes: "70572288"
mp3_duration: "1:13:30"

guest: "Stuart Kelly"
guest_avatar: "stuart-kelly.jpg"
guest_website: "https://www.zego.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "aws"
  - "cloudflare"
  - "codedeploy"
  - "datadog"
  - "graphql"
  - "mailgun"
  - "postgres"
  - "rds"
  - "redis"
  - "sentry"
  - "sns"
  - "sqs"
  - "stripe"
  - "terraform"
  - "twilio"

title: "Zego Lets You Easily Buy Insurance by the Hour"
description:
  Stuart Kelly goes over creating an insurance company with Django. They've
  issued over 290 million hours of insurance so far. It's all hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} lets us know what it's
like to build an insurance company from scratch with Django and Python. It's
been running in production since early 2017 and they've issued out 290+ million
hours of insurance so far. It's hosted on AWS.

Stuart covers building an MVP in 8 weeks, using Stripe with SCA, creating 25+
Django apps over time, working with a GraphQL API back-end, querying 45+
million DB rows quickly, making app deploys a pleasant experience for his team,
achieving 99.99% uptime and so much more.

## Topics Include

- 2:02 -- Shipping an MVP insurance company in 8 weeks with little insurance knowledge
- 3:53 -- React Native was used to build mobile apps after a demand for it was seen
- 4:46 -- Motivation for using Django and Python to build this site
- 6:15 -- The Django admin is used for simple config changes and CRUD operations
- 6:59 -- Examples of when they needed to roll their own admin UI due to added complexity
- 8:41 -- Stripe is being used to handle the payments with SCA support
- 11:41 -- How do you even start an insurance company?
- 13:32 -- It's a monolithic app broken up by Django apps which is a nice way to break things up
- 15:15 -- Django apps are a nice stepping stone to maybe microservices due to easy refactors
- 16:18 -- What type of Django apps do you have to power your site? There's 25+ of them
- 17:36 -- Not every Django app would end up being its own service in the future
- 18:10 -- The MVP didn't start off with this many apps, it grew organically over time
- 18:46 -- Which microservices would you tease out later if it came down to it?
- 20:28 -- The split up services would end up having their own dedicated databases too
- 22:42 -- The back-end is powered by a GraphQL API
- 23:37 -- Using an API back-end came from realizing they are building a platform not an app
- 24:39 -- Hole in one insurance isn't offered, but they did offer rocket launcher insurance
- 25:46 -- Graphene is used on the Python side of things and it works nicely with Django models
- 26:04 -- On the front-end Relay is being used, but in hindsight maybe Apollo would be better
- 27:40 -- The front-end is about 500,000 lines of code (not including node_modules)
- 27:53 -- The back-end is about 300,000 to 350,000 lines of code
- 28:44 -- There's about 40-50 top level dependencies in the requirements.txt file
- 29:54 -- PostgreSQL is used through RDS on AWS, along with a RedShift cluster
- 30:34 -- What is RedShift and how does it help make certain queries much faster?
- 32:43 -- They don't connect to RedShift through Django's ORM but you do write SQL
- 33:34 -- Their financial reconciliation engine has 40-50 million rows and queries are fast
- 34:12 -- Celery, Redis, Kubernetes, AWS Lambda, oh my!
- 34:52 -- There's 3-5 web app servers but up to 24 background workers
- 36:08 -- Payment handling doesn't need to happen live as a driver is working
- 37:41 -- A majority of things are running on t3 EC2 instances
- 38:24 -- Steps taken to safely go from 1 background worker to running many of them
- 40:50 -- One mistake they made early on was not having idempotent worker tasks
- 41:52 -- Having zero down time deploys with AWS CodeDeploy, but migrations are tricky
- 44:41 -- The infrastructure is managed with Terraform, Stuart knows enough to be dangerous
- 47:12 -- Trusting your developers to do reviews is important, along with having tests
- 48:41 -- There's a few different environments, such as QA which is after a dev pushes code
- 49:31 -- Moving from a git flow model to doing PRs that get merged to a deployed master
- 50:55 -- Every pull request that comes in gets a sub-domain that can be directly accessed
- 51:33 -- Feature flags are sometimes used, but not with a dedicated library or framework
- 52:55 -- Secrets are managed using AWS' Parameter Store
- 53:45 -- The EC2 instances are spun up using pre-baked AMIs, except for the code itself
- 55:11 -- They pay somewhere between $10,000 and $50,000 a month on hosting
- 55:46 -- How they went from $3,000 to $3 a month from making a database backup change
- 57:21 -- Cloudflare is used as their CDN, DNS host, anti-DDoS and SSL certificate service
- 58:06 -- The imgix service is used to do on the fly image resizing and optimizations
- 58:31 -- Cloudflare is a solid service and competitively priced
- 58:54 -- The JavaScript payload for the front-end is about 1MB after being gzipped
- 1:00:29 -- The Next.js library is used to do server side rendering initially
- 1:00:56 -- Mailgun is used for sending emails and Twilio is used for sending text messages
- 1:01:40 -- Sentry.io (hosted version) captures all of their errors with loads of integrations
- 1:02:11 -- DataDog is used for alerting, APM metrics and logging
- 1:03:54 -- It's valuable to have your metrics and logging on 1 service
- 1:04-22 -- Various alarms and alerts get sent through DataDog
- 1:04:42 -- Health checks are done with Django Health Check, and they query the DB in it
- 1:06:02 -- So far in 2020 they're operating at 99.99% uptime which is quite the feat
- 1:06:46 -- Checking your database in your health check is totally worth it
- 1:07:44 -- There's not many live tests that happen in production due to the nature of the app
- 1:08:53 -- Best tips? Release as often as you can and invest in your release process
- 1:10:03 -- That's also been the biggest pain point as they scaled up to a larger dev team
- 1:11:19 -- Database migrations are run on every deploy
- 1:12:33 -- Check out <https://zego.com>, their [open source work](https://github.com/Zegocover) or [email Stuart](mailto:stuart@zego.com) for questions

## Links

###### 📄 References

- <https://reactnative.dev/>
- <https://en.wikipedia.org/wiki/Underwriting>
- <https://relay.dev/>
- <https://www.apollographql.com/>
- <https://en.wikipedia.org/wiki/Column-oriented_DBMS>
- <https://www.stitchdata.com/>
- <https://fivetran.com/>
- <https://blog.getdbt.com/what--exactly--is-dbt-/>
- <https://docs.aws.amazon.com/systems-manager/latest/userguide/systems-manager-parameter-store.html>
- <https://www.imgix.com/solutions/resizing-and-cropping>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://docs.graphene-python.org/projects/django/en/latest/>
- <https://github.com/celery/celery>
- <https://github.com/joealcorn/laboratory>
- <https://github.com/KristianOellegaard/django-health-check>
