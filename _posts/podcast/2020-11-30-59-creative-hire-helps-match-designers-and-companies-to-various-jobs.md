---
layout: "podcast-or-interview"

mp3_bytes: "56964096"
mp3_duration: "59:20"

guest: "Kshitij Sinha"
guest_avatar: "kshitij-sinha"
guest_website: "https://creativehire.co/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "aws"
  - "circle-ci"
  - "firebase"
  - "lets-encrypt"
  - "mailgun"
  - "netlify"
  - "nginx"
  - "postgres"
  - "redis"
  - "s3"
  - "sentry"
  - "ubuntu"
  - "webpack"

title: "Creative Hire Helps Match Designers and Companies to Various Jobs"
description:
  Kshitij Sinha goes over building his job finding platform with Django.
  It's hosted on a single t2 micro AWS instance using the free tier.
---

In this episode of Running in Production, {{ page.guest }} walks us through his
job finding platform called Creative Hire. It was written in Python and Django
and is hosted on AWS' free tier. It's been up and running since early 2020
after the MVP was built in about 6 weeks.

Kshitij is the solo developer on the project. It's a monolith split across a
few Django apps with 2 git repos (one for the back-end and one for the
front-end). It does a quite a bit of NLP to help categorize submissions and
more. 

## Topics Include

- 3:58 -- Motivation to rewrite the app in Django and Python
- 6:29 -- It's 1 monolithic Django app that's split up with Django apps
- 11:12 -- Django REST Framework is used as an API back-end with React on the front-end
- 15:48 -- It's about 200k lines of Python and 78k lines of JS split across 2 git repos
- 18:13 -- Picking the right NLP Python library (he went with spaCy in the end)
- 23:44 -- Redis is the back-end for Celery and it's used for caching too
- 27:41 -- Using Ant Design Pro to help manage front-end assets (which uses Webpack)
- 30:36 -- Docker is being used for everything except nginx runs directly on the host
- 33:47 -- It's hosted on a single EC2 instance (free tier) on AWS running Ubuntu 18.04 LTS
- 41:34 -- The server was set up manually by mostly following tutorials
- 42:40 -- Using Mailgun and Sentry, also right now Creative Hire is free during early access
- 45:58 -- The process to develop and deploy code to production
- 53:13 -- Database backups happen about once a week and how alerts happen
- 56:12 -- Best tips? Have a test environment and make small changes when pushing new code
- 58:28 -- Besides [their site]({{ page.guest_website }}), Creative Hire also has a [Facebook page](https://www.facebook.com/crreativehire)

## Links

###### 📄 References

- <https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/burstable-credits-baseline-concepts.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used
- <https://github.com/boto/boto3>
- <https://github.com/celery/celery>
- <https://github.com/encode/django-rest-framework>
- <https://spacy.io/>
- <https://github.com/alexfernandez/loadtest>
- <https://pro.ant.design/>
- <https://gunicorn.org/>
- <https://github.com/KristianOellegaard/django-health-check>
