---
layout: "podcast-or-interview"

mp3_bytes: "84561024"
mp3_duration: "1:28:05"

guest: "Anand Kulkarni"
guest_avatar: "anand-kulkarni"
guest_website: "https://crowdbotics.com"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "vue"
  - "circle-ci"
  - "cloudflare"
  - "docker"
  - "heroku"
  - "papertrail"
  - "postgres"
  - "redis"
  - "s3"
  - "sendgrid"
  - "sentry"
  - "slack"
  - "stripe"
  - "terraform"
  - "webpack"

title: "Crowdbotics Is a React Native + Django App Builder / Deployer"
description:
  Anand Kulkarni covers his app builder and deployer platform that's written
  in Django. It's hosted across 1,000+ Heroku Dynos.
---

In this episode of Running in Production, {{ page.guest }} goes over his app
builder and deployer platform using Django. Over 15,000 customers have built
and deployed their apps through it. It's running on 1,000+ Heroku Dynos and has
been up and running since early 2017.

Anand covers having a mono repo for the 100k+ lines of back-end code,
switching to an API driven back-end, using Terraform, making use of Heroku's
eco-system and much more.

## Topics Include

- 6:59 -- Motivation for using Django and Python
- 10:36 -- Using the Django admin, apps and having a mono repo on the back-end
- 16:36 -- There's over 110,000 lines of back-end code and a bit of linting
- 24:38 -- Using DJ Stripe for Stripe integration
- 28:27 -- Switching over to React + Vue after having server rendered Django templates
- 34:20 -- It's hosted on Heroku and uses Redis, Celery, PostgreSQL, Docker and Terraform
- 38:32 -- Taking advantage of using full text search within PostgreSQL
- 42:03 -- Doing a fair bit of code changes (git commits) within Celery workers
- 50:10 -- Picking Heroku, running 1,000+ Dynos and having a low 5 figures monthly bill
- 54:43 -- Making sure customer apps stay up even during traffic spikes
- 56:28 -- A list of Heroku add-ons that are being used and Cloudflare for a few things too
- 1:03:30 -- Using Terraform to provision Heroku resources
- 1:05:59 -- Step by step on how new code gets from development to production
- 1:12:42 -- Dealing with customer secrets securely
- 1:15:57 -- Automated backups for the database and user uploaded files
- 1:19:34 -- Sentry handles exception tracking and notifying developers of errors
- 1:22:29 -- Best tips? For the important parts of your app, use technologies you know
- 1:27:04 -- Check out the [Crowdbotics blog](https://blog.crowdbotics.com/)

## Links

###### 📄 References

- <https://yeoman.io/>
- <https://12factor.net/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://www.pylint.org/>
- <https://eslint.org/>
- <https://github.com/jazzband/django-oauth-toolkit>
- <https://github.com/pennersr/django-allauth>
- <https://github.com/dj-stripe/dj-stripe>
- <https://github.com/celery/celery>
