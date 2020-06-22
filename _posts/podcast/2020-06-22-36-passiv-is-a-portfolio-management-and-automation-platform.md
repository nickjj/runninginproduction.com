---
layout: "podcast-or-interview"

mp3_bytes: "81010944"
mp3_duration: "1:24:23"

guest: "Brendan Wood"
guest_avatar: "brendan-wood.jpg"
guest_website: "https://getpassiv.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "ansible"
  - "digitalocean"
  - "lets-encrypt"
  - "nginx"
  - "postgres"
  - "redis"
  - "stripe"
  - "supervisor"
  - "ubuntu"
  - "webpack"

title: "Passiv Is a Portfolio Management and Automation Platform"
description:
  Brendon Wood talks about building a portfolio management platform with
  Django. It has 3k+ active users and is hosted on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a portfolio management platform with Django and Python. It's been running in
production since mid 2017 and is hosted on DigitalOcean.

There's about 3,000+ active users and overall they are responsible for
managing hundreds of millions of dollars of funds for their users.

## Topics Include

- 3:13 -- It started as a 50 line Python script that replaced an Excel sheet
- 10:49 -- Motivation for using Django, Python, NumPy and creating a monolithic app
- 15:38 -- Eventually decommissioning a legacy version of the back-end over time
- 19:00 -- There's about 33,000+ lines of back-end code, including tests
- 22:24 -- There's a clean split between the back-end API and the TypeScript React front-end 
- 30:52 -- The entire front-end is [open source on GitHub](https://github.com/passiv/passiv-web)
- 32:13 -- It's hosted on DigitalOcean w/ Ubuntu 18.04, PostgreSQL, Redis, Celery and nginx
- 39:08 -- There's ~5 seconds of down time per deploy which is done outside of trading hours
- 46:00 -- Everything runs on a single server + a managed PostgreSQL DB (with replicas)
- 48:20 -- Ansible is being used to configure the server
- 55:22 -- Getting code from dev to production in a few minutes with git and a deploy script
- 1:01:07 -- Brendan's philosophy on starting a business is to do things when you need to do it
- 1:02:58 -- Logging, email alerts and using Stripe to handle payments
- 1:08:35 -- Handling disasters and other unexpected events with backups and alerts
- 1:16:19 -- Best tips? Use the tools that you know unless you have a compelling reason not to
- 1:19-27 -- Setting up a customer support system only after they had a need for it
- 1:21:39 -- Check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Exchange-traded_fund>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://numpy.org/>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/celery/celery>
- <https://gunicorn.org/>
- <https://github.com/kakulukia/django-secrets>
- <https://github.com/dj-stripe/dj-stripe>
