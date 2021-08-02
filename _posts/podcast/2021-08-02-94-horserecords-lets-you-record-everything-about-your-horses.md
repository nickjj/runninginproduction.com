---
layout: "podcast-or-interview"

mp3_bytes: "72046464"
mp3_duration: "1:15:02"

guest: "Andy Ide"
guest_avatar: "andy-ide"
guest_website: "https://horserecords.info/"
guest_twitter: "andyide40"

category: "podcast"
tags:
  - "django"
  - "python"
  - "cloudflare"
  - "jquery"
  - "linode"
  - "nginx"
  - "postgres"
  - "retool"
  - "sentry"
  - "stripe"
  - "systemd"
  - "ubuntu"
  - "uptime-robot"

title: "HorseRecords Lets You Record Everything about Your Horses"
description:
  Andy Ide goes over building a horse SAAS app with Django and Python. It's
  hosted on a single Linode server.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
SAAS app for horses with Django and Python. It's hosted on a single Linode
server and has been running in production since May 2021.

Andy talks about learning Django while building his app, using Django Unicorn,
creating a Django monolith that's broken up with Django apps, outsourcing
setting up a server, the importance of having a good testing team and more.

*Andy was kind enough to give listeners of this podcast 20% off for life if you
use promo code `RUNNING20` when [signing up](https://horserecords.info/), that
includes signing up for free since it carries over to a paid plan.*

## Topics Include

- 6:11 -- About 60ish users signed up about a month after launching
- 8:34 -- The process of learning Django while building this app
- 11:29 -- Using the Django admin and a bunch of other useful packages
- 14:34 -- Django Unicorn is being used for interactive bits w/o having to write a lot of JS
- 18:34 -- It's a Django monolithic with a bunch of Django apps
- 22:27 -- How Django Rest Framework is being used for the reporting part of the app
- 28:46 -- The app is mostly Django rendered templates with sprinkles of JS and Unicorn
- 34:00 -- Stripe is handling payments, their API and docs are great
- 41:02 -- (1) $10 / month Linode server hosts everything with 1 CPU core and 2GB of memory
- 45:25 -- Picking the most recent version of Ubuntu and keeping deploys simple
- 52:05 -- Using Cloudflare for DNS and using their paid plan
- 56:54 -- Running tests locally before deploying it
- 59:12 -- Handling backups with Django DB Backup and Linode's backup service
- 1:02:12 -- Using Sentry for exception reporting, viewing logs and Uptime Robot
- 1:08:50 -- Best tips? Install Sentry and have a good testing team
- 1:13:37 -- Check out HorseRecords on [Facebook](https://www.facebook.com/horserecords/) and [Andy's Django Blog](https://djangoandy.com/)

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Stud_farm>
- <https://djangochat.com/>
- <https://djangoandy.com/2021/05/14/integrating-django-rest-framework-and-retool/>
- <https://djangoandy.com/2021/05/02/what-i-learned-in-the-first-2-days-of-launching-my-saas-startup/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/pennersr/django-allauth>
- <https://github.com/select2/select2>
- <https://www.django-rest-framework.org/>
- <https://github.com/matthewwithanm/django-imagekit>
- <https://github.com/dmpayton/django-admin-honeypot>
- <https://github.com/django-hijack/django-hijack>
- <https://www.django-unicorn.com/>
- <https://github.com/yourlabs/django-autocomplete-light>
- <https://github.com/benoitc/gunicorn>
- <https://github.com/pypa/pipenv>
- <https://github.com/django-dbbackup/django-dbbackup>
