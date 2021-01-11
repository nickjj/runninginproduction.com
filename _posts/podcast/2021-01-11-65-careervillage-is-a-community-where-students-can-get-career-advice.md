---
layout: "podcast-or-interview"

mp3_bytes: "59254272"
mp3_duration: "1:01:43"

guest: "Jared Chung"
guest_avatar: "jared-chung.jpg"
guest_website: "https://www.careervillage.org/"
guest_twitter: "jaredchung"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "aws"
  - "caddy"
  - "cloudfront"
  - "docker"
  - "elasticache"
  - "env-key"
  - "jenkins"
  - "lambda"
  - "metabase"
  - "new-relic"
  - "pagerduty"
  - "postgres"
  - "rds"
  - "redis"
  - "route53"
  - "s3"
  - "sentry"
  - "slack"
  - "ubuntu"
  - "webpack"

title: "CareerVillage Is a Community Where Students Can Get Career Advice" 
description:
  Jared Chung talks about building a community platform with Django and Python.
  It's hosted on a number of AWS resources.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a community platform with Django and Python. It's hosted on AWS and has been
up and running in production since 2011. The beta version was intially built
during a 4 day hackaton.

Jared talks about taking advantage of Django's batteries included, heavily
using Celery / Redis and hosting the main web app on a single EC2 instance.
Their AWS bill is roughly $2,500 a month.

## Topics Include

- 3:59 -- Building a beta version of the site during a 4 day hackathon
- 5:38 -- Motivation for picking Django and Python
- 10:11 -- Leaning heavily on the built in Django admin and other libraries
- 12:24 -- Mostly server rendered Django templates with a touch of React
- 16:03 -- It's mostly a monolithic app but it has a few services pulled out
- 20:54 -- PostgreSQL is the main database and Celery / Redis is heavily used
- 24:58 -- gunicorn + Caddy, Route53 for DNS and a load balancer, Docker end to end
- 27:45 -- Tens of thousands of lines of code, ~3,500 files and good test coverage
- 31:11 -- Webpack is being used to handle the front-end assets (SASS and ES6 JS)
- 34:36 -- Static files are cached on CloudFront and in general development is pretty hard
- 39:07 -- RDS is being used and the production web app has 4 vCPUs &amp; 16GB of RAM on EC2
- 42:46 -- New Relic, PagerDuty and Sentry are being used for monitoring and alerts
- 46:11 -- There's no configuration management tools being used to set up the EC2 server
- 48:13 -- Going from developing a feature to deploying it into production
- 53:56 -- RDS is configured for backups and there's a lot of backing up in general
- 55:39 -- Storing ~200k questions each having 10-20 DB rows + 120k registered users
- 56:32 -- Their AWS bill fluctuates between $2,000 and $3,000 USD per month
- 58:29 -- Best tips? There's a lot to learn out there but focus on keeping your users happy
- 1:00:28 -- Want to volunteer? Contact them at [hello@careervillage.org](mailto:hello@careervillage.org)
- 1:01:04 -- [CareerVillage.org](https://www.careervillage.org/) is on [Twitter](https://twitter.com/careervillage), [facebook](https://www.facebook.com/CareerVillage/) and [Instagram](https://www.instagram.com/careervillage) - so is [Jared](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow>
- <https://en.wikipedia.org/wiki/Chaos_engineering#Chaos_Monkey>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/celery/celery>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/Suor/django-cacheops>
- <https://github.com/benoitc/gunicorn>
- <https://github.com/PyCQA/flake8>
- <https://github.com/jazzband/django-debug-toolbar>
