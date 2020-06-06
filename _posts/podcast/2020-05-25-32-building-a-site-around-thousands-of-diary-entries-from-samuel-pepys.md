---
layout: "podcast-or-interview"

mp3_bytes: "48471936"
mp3_duration: "50:29"

guest: "Phil Gyford"
guest_avatar: "phil-gyford.jpg"
guest_website: "https://www.pepysdiary.com/"
guest_twitter: "philgyford"

category: "podcast"
tags:
  - "django"
  - "python"
  - "aws"
  - "bootstrap"
  - "heroku"
  - "open-source"
  - "postgres"
  - "redis"
  - "s3"
  - "sentry"

title: "Building a Site Around Thousands of Diary Entries from Samuel Pepys"
description:
  Phil Gyford goes over building a site around Samuel Pepys with Django. It
  gets around 150k+ monthly page views and is hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
community around 9+ years of diary entries from Samuel Pepys. The site was
built with Django. It gets about 150k+ page views a month and has been up and
running since 2002. It's currently hosted on Heroku.

Phil talks about being in the sweet spot in terms of engagement while not being
under high load, rewriting the platform with Django as a monolith, how Heroku
helps him get it all up and running without needing to bother with servers and
much more. The site is [open source](https://github.com/philgyford/pepysdiary).

## Topics Include

- 1:21 -- Who is Samuel Pepys and why a weblog is a natural fit for this site
- 2:26 -- John Carmack had daily write ups in the mid-1990s
- 3:35 -- It gets about 150,000+ page views a month with 30,000+ users
- 4:39 -- The site is more than just weblog entries, there's 88k+ user comments
- 6:34 -- It's the sweet spot of engagement between popular but not crazy popular
- 7:05 -- Motivation for using Django and Python after using Movable Type for 9 years
- 9:03 -- Deadlines are a great way to ensure you abort the idea of perfect and release it
- 9:26 -- Django was enjoyable to use, and Phil thought about using Rails and PHP too
- 11:17 -- We live in a really nice time where we have so many good choices for web frameworks
- 12:23 -- It's a monolithic app with about 12,000 lines of Python across 200 files
- 12:53 -- It's split into a bunch of Django apps, here's a few
- 13:45 -- The idea of using apps to organize your code is a great idea
- 14:43 -- This whole site is [open source on GitHub](https://github.com/philgyford/pepysdiary), you can use it as a learning resource
- 16:08 -- How new entries make their way onto the site (spoiler alert: it was laborious)
- 19:21 -- The site uses server rendered Django templates with sprinkles of JavaScript
- 19:43 -- Tiny bit of JS for things like maps (Leaflet) and charts (D3.js)
- 20:19 -- Server rendered templates are simple and fast, it's a great combo
- 21:21 -- It runs on Heroku with PostgreSQL and a bit of caching with Redis
- 21:43 -- The site runs on (1) $7 / month "Hobby" Dyno and it's more than enough
- 23:43 -- There's full text search using Django's built in PostgreSQL search features
- 26:12 -- Django 3.0 powers the site as of today and Phil likes to keep it up to date
- 27:54 -- If you postpone updating your dependencies for too long it can get painful
- 28:48 -- What are you caching? Everything! At least for anonymous users
- 31:26 -- The PostgreSQL database runs off the $9 / month Heroku add-on
- 32:54 -- Have you ever thought about spinning up your own server?
- 35:17 -- If you don't like the idea of managing your own servers, Heroku can be decent
- 37:27 -- Heroku handles issuing SSL certificates for you for free
- 38:13 -- Sentry is used for error handling through the Heroku add-on
- 39:14 -- Errors coming in are pretty rare
- 40:04 -- Phil's site holds its own in terms of SEO, even against Wikipedia
- 42:51 -- Heroku handles backing up the database once a day, and Phil backs it up to S3 too
- 43:49 -- He also uses S3 to store some of the static files, such as uploaded blog post images
- 45:15 -- Django storage is used to handle uploading to S3
- 46:52 -- Best tips? Start simple and grow it from there, writing any code is important
- 48:22 -- Maybe using an app generator isn't worth it, unless you make a lot of new apps
- 49:45 -- You can find Phil [on Twitter](https://twitter.com/{{ page.guest_twitter }}), he also has his own site at <https://www.gyford.com/>

## Links

###### 📄 References

- <https://www.gutenberg.org/>
- <https://github.com/ESWAT/john-carmack-plan-archive/tree/master/by_day>
- <https://en.wikipedia.org/wiki/Movable_Type>
- <https://docs.djangoproject.com/en/3.0/ref/contrib/postgres/search/>
- <https://devcenter.heroku.com/articles/django-assets>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/django/django-contrib-comments>
- <https://d3js.org/>
- <https://leafletjs.com/>
- <https://django-storages.readthedocs.io/en/latest/>
