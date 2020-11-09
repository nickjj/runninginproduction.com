---
layout: "podcast-or-interview"

mp3_bytes: "71945088"
mp3_duration: "1:14:56"

guest: "Daniele Procida"
guest_avatar: "daniele-procida"
guest_website: "https://www.divio.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "ansible"
  - "aws"
  - "azure"
  - "cloudflare"
  - "docker"
  - "docker"
  - "gcp"
  - "gitlab-ci"
  - "kubernetes"
  - "lets-encrypt"
  - "nginx"
  - "pagerduty"
  - "postgres"
  - "redis"
  - "stripe"
  - "terraform"

title: "Divio Is a Cloud Platform for Managing Web Applications"
description:
  Daniele Procida goes over building a platform that helps teams deploy web
  apps using Django. It's hosted on multiple cloud providers.
---

In this episode of Running in Production, {{ page.guest }} walks us through
their cloud platform to manage web apps using Django. 10s of millions of web
requests flow through their client's applications. It's running on multiple
cloud providers and has been up and running since 2015.

Daniele covers the importance of a stable platform when you're dealing with
customers who have their own customers, writing upwards of a million lines of
Python across their services, being vendor neutral with hosting infrastructure
and more.

## Topics Include

- 3:08 -- Publicly available since 2015 but it was in development for years beforehand
- 8:43 -- Motivation for using Django and Python
- 11:08 -- The control panel is mainly a Django app with a React front-end
- 13:54 -- Nearly everything is written in Python and Django (over 500k lines of code)
- 19:25 -- Using Django Rest Framework and a few other Python libraries
- 24:24 -- Using Docker, Celery and PostgreSQL
- 30:04 -- Uncovering a bit more on how Divio works and what it supplies developers
- 33:39 -- Web servers, custom load balancers and SSL certificates with Let's Encrypt
- 37:13 -- Being vendor neutral when it comes to their hosting infrastructure
- 40:16 -- How their server infrastructure is set up
- 46:10 -- Using various automation tools such as Ansible, Helm and Terraform
- 50:58 -- Deploying to a large amount of servers with a rolling restart strategy
- 53:18 -- The deploy process when they roll out new features to their platform
- 1:02:09 -- Database / user media backups along with alerting and monitoring
- 1:06:59 -- Using Stripe for processing payments
- 1:10:23 -- Best tips? Reduce miscommunication and try to use your own services if you can
- 1:13:44 -- Check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://documentation.divio.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://hypothesis.readthedocs.io/en/latest/>
- <https://github.com/boto/boto>
- <https://github.com/celery/celery>
