---
layout: "podcast-or-interview"

mp3_bytes: "42293376"
mp3_duration: "44:03"

guest: "Colin McFaul"
guest_avatar: "colin-mcfaul"
guest_website: "https://www.ndustrylink.com"

category: "podcast"
tags:
  - "django"
  - "python"
  - "docker"
  - "elasticsearch"
  - "heroku"
  - "papertrail"
  - "postgres"
  - "redis"
  - "s3"
  - "sendgrid"
  - "sentry"
  - "stripe"

title: "Social Hiring Platform for the Food and Beverage Industry"
description:
  Colin McFaul talks about building a hiring platform with Django and Python.
  It's hosted on Heroku with 2 Dynos.
---

In this episode of Running in Production, {{ page.guest }} goes over using
Django to build a social hiring platform for the food and beverage industry.
It's hosted on Heroku and took about 9 months of full time development to
build as a solo developer.

Colin talks about building 2 separate apps and keeping the web app as a
monolithic app with ~42k LOC, but it's broken up with Django apps.
Elasticsearch is used to power an auto-complete search feature. Billing isn't
implemented yet but it's currently in development with Stripe.

## Topics Include

- 3:37 -- Motivation for using Django and Python
- 5:46 -- Breaking down what the 2 apps do (sales tool and the main site)
- 10:34 -- The web app is a monolithic app but it's broken up by Django apps
- 13:24 -- There's ~42k lines of code, and it's mainly using server rendered templates
- 17:43 -- Elasticsearch is being used for full text search and PostgreSQL for the rest
- 20:38 -- Redis and Celery are being used for background and periodic tasks
- 24:27 -- Billing is half way implemented with Stripe
- 27:32 -- Thought process around using Heroku (2x $25 / mo Dynos) to host the site
- 31:39 -- Logging (Papertrail), metrics and error reporting (Sentry)
- 33:52 -- The deploy process from development to production (it includes Docker)
- 36:32 -- Doing a PG dump to backup the DB and user uploaded content is saved on S3
- 38:37 -- Best tips? Put in the research before implementing something
- 43:23 -- Check out <{{ page.guest_website }}>

## Links

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/pennersr/django-allauth>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/yourlabs/django-autocomplete-light>
- <https://github.com/celery/celery>
- <https://github.com/joke2k/django-environ>
