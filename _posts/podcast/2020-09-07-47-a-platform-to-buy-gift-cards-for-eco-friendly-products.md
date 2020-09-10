---
layout: "podcast-or-interview"

mp3_bytes: "59361024"
mp3_duration: "1:01:50"

guest: "Antonin Grêlé"
guest_avatar: "antonin-grele"
guest_website: "https://www.ethikdo.co"
guest_twitter: "AntoninGrele"

category: "podcast"
tags:
  - "django"
  - "python"
  - "airtable"
  - "bootstrap"
  - "cloudflare"
  - "discord"
  - "mailchimp"
  - "mailjet"
  - "python-anywhere"
  - "sqlite"
  - "stripe"
  - "uptime-robot"
  - "vue"
  - "zapier"

title: "A Platform to Buy Gift Cards for Eco-Friendly Products"
description:
  Antonin Grêlé goes over using Django to build a gift card service focused on
  eco-friendly products. It's hosted on PythonAnywhere.
---

In this episode of Running in Production, {{ page.guest }} talks about using
Django to build a gift card purchasing site for eco-friendly products. It's
hosted on PythonAnywhere and has been up and running since fall 2019.

Antonin developed it himself in a few months and covers tying together services
using Zapier, what it's like to manage gift card logic, the value in getting
something up quickly and more.

## Topics Include

- 2:10 -- Launching an MVP after a few months of dev time as a solo developer
- 5:10 -- Motivation for using Django and Python
- 7:39 -- Batteries (mostly) included, using the Django Admin and Django REST Framework
- 10:51 -- Using Stripe to build a single checkout page to buy gift cards
- 15:57 -- It's a monolithic app but it uses services like Airtable and Zapier
- 23:58 -- Managing gift card funds and logic is the core of the business
- 30:34 -- Tech stack includes SQLite and using PythonAnywhere for a host
- 39:50 -- Cloudflare is mainly used for serving static files
- 42:59 -- The process from development to production and secret management
- 49:10 -- Performing hourly DB backups and using UptimeRobot for downtime notifications
- 54:19 -- The new SCA compliant Stripe APIs are being used
- 58:33 -- Best tips? Get your product out ASAP and be mindful of what happens if you leave
- 1:01:05 -- Check out <{{ page.guest_website }}> and [Antonin is also on Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://github.com/anymail/django-anymail>
- <https://github.com/zostera/django-bootstrap4>
- <https://github.com/django-ckeditor/django-ckeditor>
- <https://github.com/python-pillow/Pillow>
- <https://github.com/peterbe/premailer>
