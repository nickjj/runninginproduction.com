---
layout: "podcast-or-interview"

mp3_bytes: "44721024"
mp3_duration: "46:35"

guest: "Jesse Hunt"
guest_avatar: "jesse-hunt"
guest_website: "https://twinner.com/en/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "docker"
  - "heroku"
  - "papertrail"
  - "postgres"
  - "redis"
  - "s3"

title: "A Site to View 3D Scans of Cars with Twinner"
description:
  Jesse Hunt talks about building a site to view 3D scans of cars with Django.
  It's hosted on 2 Heroku hobby Dynos.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a site with Django that lets you view 3D scans of cars with Twinner. It's
hosted on 2 Heroku hobby Dynos and has been up and running in production since
January 2020.

Jesse talks about building a few MVPs for his client, getting everything
together in ~1k lines of Python code and using Heroku to avoid having to do a
bunch of sysadmin work.

## Topics Include

- 3:34 -- Building 3 different MVPs in 6 months to satisfy his client's needs
- 6:33 -- Motivation for using Django, how the 3D model viewer works and GDPR compliance
- 12:52 -- It's a monolithic app that runs on 2 Heroku Dynos and it uses Celery
- 16:42 -- The app it about ~1k lines of Python code and uses Material Design Lite
- 21:24 -- Docker is being used in development and production and Jesse likes it
- 24:47 -- Both Heroku Dynos are the hobby (paid) tier with the free tiers of Postgres and Redis
- 33:13 -- Database backups are run through Celery's periodic tasks with django-dbbackup
- 34:54 -- The deploy process from dev to prod when using Heroku
- 40:06 -- Best tips? Try to learn best practices when you can from podcasts, books, courses, etc.
- 45:45 -- Check out Jesse's consultancy's site at <https://www.creon-it.de/>

## Links

###### 📄 References

- <https://docs.djangoproject.com/en/3.0/topics/class-based-views/>
- <https://getmdl.io/>
- <https://djangochat.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/pennersr/django-allauth>
- <https://github.com/evansd/whitenoise>
- <https://github.com/celery/celery>
- <https://gunicorn.org/>
- <https://github.com/django-dbbackup/django-dbbackup>
- <https://github.com/pytest-dev/pytest>
