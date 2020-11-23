---
layout: "podcast-or-interview"

mp3_bytes: "63303936"
mp3_duration: "1:05:56"

guest: "Kye Russell"
guest_avatar: "kye-russell"
guest_website: "https://www.brightpath.com.au/"
guest_twitter: "kyerussell"

category: "podcast"
tags:
  - "django"
  - "python"
  - "aws"
  - "backbone"
  - "cloudformation"
  - "cloudfront"
  - "cloudwatch"
  - "docker"
  - "nginx"
  - "postgres"
  - "rds"
  - "redis"
  - "route53"
  - "s3"
  - "sentry"
  - "ses"
  - "sns"
  - "sqs"
  - "ubuntu"
  - "webpack"

title: "Brightpath Is a Formative School Assessment Tool"
description:
  Kye Russell talks us through a school assessment tool built with Django and
  Python. It's running on AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over running a
formative school assessment tool for 800+ schools in Australia. It's built with
Django and it's been running in production since 2017 on AWS.

Kye is the solo developer on the project. It's a monolith split across 10+
Django apps. They've gone all-in with a bunch of AWS services and Kye sticks to
a number of best practices such as having tests, linting and using services to
help keep things running smoothly.

## Topics Include

- 7:04 -- Motivation to rewrite the app in Django and Python
- 9:24 -- The Django admin and having a monolith split into 10-15 Django apps
- 14:59 -- About 50k lines of Python code, 10k of Django templates and 10k of JS
- 20:38 -- Interesting Python / Django libraries used in the project
- 28:35 -- Postgres as a main SQL DB and Redis for caching + SQS &amp; Celery for bg jobs
- 32:24 -- Docker is being used in development, nginx + uwsgi is being used too
- 35:24 -- Going all-in with AWS for hosting and ISO 27001 compliance
- 45:35 -- Dealing with a massive amount of user uploads, virus scanning, etc.
- 48:58 -- Linting the code base with Black
- 50:28 -- Deploying code with Fabric, the Python AWS SDK and baking AMIs
- 55:36 -- Database backups, S3 is super reliable and CloudWatch alarms
- 59:40 -- Using Sentry for error reporting and APM solutions
- 1:03:06 -- Best tips? Use boring technology whenever you possibly can
- 1:05:15 -- Kye has a site with [1 blog post](https://www.kye.id.au/) and he's also [on Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://aws.amazon.com/compliance/iso-27001-faqs/>
- <https://en.wikipedia.org/wiki/Application_performance_management>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/pandas-dev/pandas>
- <https://github.com/numpy/numpy>
- <https://github.com/BetterWorks/django-impersonate>
- <https://github.com/encode/django-rest-framework>
- <https://bridgekeeper.leigh.party/>
- <https://github.com/celery/celery>
- <https://github.com/unbit/uwsgi>
- <https://github.com/psf/black/>
- <https://www.fabfile.org/>
