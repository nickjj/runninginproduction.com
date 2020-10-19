---
layout: "podcast-or-interview"

mp3_bytes: "33576960"
mp3_duration: "34:58"

guest: "Galen Rice"
guest_avatar: "galen-rice"
guest_twitter: "JustTurrble"

category: "podcast"
tags:
  - "django"
  - "python"
  - "centos"
  - "nginx"
  - "postgres"
  - "s3"
  - "systemd"

title: "An Inventory Management System for an E-commerce Platform"
description:
  Galen Rice walks us through building an inventory management system with
  Django and Python. It's hosted on a bare metal server.
---

In this episode of Running in Production, {{ page.guest }} walks us through
building an internal inventory management system with Django and Python. It's
running on a single bare metal server and has been up and running since 2013.

Galen talks about replacing an Excel sheet with a custom app, using 20 Django
apps, taking advantage of the Django admin and deploying everything onto a
custom server.

## Topics Include

- 5:02 -- Motivation for using Django and Python
- 6:49 -- Despite being ~6 years old it uses Python 3.x but it also uses Django 1.8
- 10:23 -- It's 1 monolithic app split into about 20 Django apps across ~15k lines of code
- 14:39 -- Staff workers are using the Django admin and there's full text search with PostgreSQL
- 17:44 -- It runs nginx on a bare metal server, also bulk CSV imports are done via cron jobs
- 22:52 -- Walking us through the deploy process from development to production
- 27:11 -- Traffic is served internally over HTTP and nginx serves static files
- 27:49 -- Database backups were saved onto S3 and a backup hasn't had to be used yet
- 30:37 -- Taking the application down means 50 people stand around doing nothing
- 31:37 -- Best tips? Make the smallest possible changes at a time and plan for having a team
- 34:15 -- Galen is [on GitHub](https://github.com/GriceTurrble) if you want to see what he's up to

## Links

###### 📄 References

- <https://www.manning.com/books/the-mikado-method>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.reportlab.com/opensource/>
- <https://github.com/python-amazon-mws/python-amazon-mws>
- <https://gunicorn.org/>
