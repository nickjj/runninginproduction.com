---
layout: "podcast-or-interview"

mp3_bytes: "39399424"
mp3_duration: "41:02"

guest: "Jonathan Adly"
guest_avatar: "jonathan-adly"
guest_website: "https://joyful.gifts"
guest_twitter: "jonathan_adly_"

category: "podcast"
tags:
  - "django"
  - "python"
  - "docker"
  - "heroku"
  - "namecheap"
  - "postgres"
  - "redis"
  - "sentry"
  - "ses"
  - "stripe"
  - "uptime-robot"

title: "Joyful Gifts Is an Automated Gift Giving Service"
description:
  Jonathan Adly talks about building a gift giving service with Django and
  Python. It's hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
gift giving service with Django and Python. It's hosted on Heroku's hobby tier
and has been up and running since November 2020.

Jonathan talks about shipping his first app, using Celery for background jobs,
handling non-standard payment patterns with Stripe, not getting caught up with
what everyone is saying to use for tech choices and trying to develop features
based on using the app as a customer.

## Topics Include

- 3:55 -- With no prior programming experience an MVP was shipped in 6 part time months
- 6:25 -- Motivation for choosing Django and Python
- 9:02 -- Gift selection involves using a 3rd party API to provide this feature
- 10:02 -- A lot of work is done with Celery, such as scheduling future gifts
- 12:09 -- It's mostly using Django templates with sprinkles of vanilla JavaScript
- 13:44 -- Dealing with non-standard payment use cases with Stripe was a challenge
- 17:34 -- It really is vanilla JavaScript with Halfmoon for the CSS
- 18:32 -- A few Python and Django libraries that helped move things along
- 20:28 -- PostgreSQL is the main database and Docker is being used too
- 23:52 -- Switching from SendGrid to AWS' SES for sending emails out
- 25:10 -- Why Heroku was picked to host the application and using it with Docker
- 28:31 -- Using Sentry for error reporting and Uptime Robot for health checks
- 30:57 -- The deployment process from development to production
- 32:18 -- How Stripe is being tested in development and database backups
- 36:14 -- Best tips? Keep things simple and develop your app through your customer's eyes
- 39:37 -- You can find Jonathan [on Twitter](https://twitter.com/{{ page.guest_twitter }}) and check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://openai.com/>
- <https://www.gethalfmoon.com/docs/introduction/>
- [https://diveintodocker.com](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/dj-stripe/dj-stripe>
- <https://github.com/pennersr/django-allauth>
- <https://github.com/python-pillow/Pillow>
- <https://github.com/furious-luke/django-address>
- <https://gunicorn.org/>
