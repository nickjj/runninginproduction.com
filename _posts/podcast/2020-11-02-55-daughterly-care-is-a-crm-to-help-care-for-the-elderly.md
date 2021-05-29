---
layout: "podcast-or-interview"

mp3_bytes: "79600512"
mp3_duration: "1:22:55"

guest: "Barton Ip"
guest_avatar: "barton-ip"
guest_website: "https://daughterlycare.com.au"

category: "podcast"
tags:
  - "django"
  - "python"
  - "vue"
  - "acm"
  - "cloudflare"
  - "cloudwatch"
  - "codedeploy"
  - "docker"
  - "ecs"
  - "mandrill"
  - "nginx"
  - "postgres"
  - "rds"
  - "s3"
  - "sentry"
  - "slack"
  - "travis-ci"
  - "webpack"

title: "Daughterly Care Is a CRM to Help Care for the Elderly"
description:
  Barton Ip goes over building a custom CRM using Django and Python. They've
  gone with AWS / ECS but are mostly cloud flexible.
---

In this episode of Running in Production, {{ page.guest }} talks us through
building a custom CRM to help care for the elderly using Django. They are running
on AWS with ECS and the site has been up and running since early 2019.

Barton talks about hiring contractors when needed, splitting logic across 40+
Django apps, heavily using Celery, incrementally improving their infrastructure
over time and more.

## Topics Include

- 3:51 -- Motivation for using Django and Python
- 8:05 -- It's broken up into 40-60 different Django apps
- 12:57 -- Using Pandas and NumPy to help pair up patients and care givers
- 17:00 -- All of the data points are saved into PostgreSQL and Celery is heavily used too
- 26:38 -- It started with Django templates but now it's using DRF for the API + Vue
- 32:49 -- They are using Docker and overall their stack is very AWS centric 
- 34:06 -- Each developer has their own EC2 instance as a dev environment
- 40:13 -- nginx sits in front of uwsgi and Cloudflare is hosting their DNS records
- 43:27 -- AWS Athena has been wonderful for getting at and querying audit / API logs
- 46:33 -- Scaling from 1 ECS instance (4 CPUs / 16 GB RAM) to however many they need
- 50:52 -- The process to deploy code from development to production
- 58:22 -- Delete prevention, backing up data and testing the restore process
- 1:05:26 -- Migrating to Terraform and Ansible to help configure their infrastructure
- 1:07:40 -- Alarms and sending alerts over Slack and to Sentry
- 1:09:50 -- All of this infrastructure wasn't planned initially, it grew organically over time
- 1:15:33 -- Best tips? Avoid the sunk cost fallacy (don't let prior time spent dictate what you do)
- 1:22:06 -- You can find Barton's software development company at <https://initialise.io/>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/JSON_Web_Token>
- <https://aws.amazon.com/athena/>
- <https://en.wikipedia.org/wiki/Sunk_cost>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://pandas.pydata.org/>
- <https://numpy.org/>
- <https://github.com/celery/celery>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/unbit/uwsgi>
- <https://github.com/psf/black>
