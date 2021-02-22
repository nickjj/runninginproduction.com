---
layout: "podcast-or-interview"

mp3_bytes: "103620864"
mp3_duration: "1:47:56"

guest: "Justin Duke"
guest_avatar: "justin-duke"
guest_website: "https://buttondown.email/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "vue"
  - "datadog"
  - "fathom"
  - "github-actions"
  - "heroku"
  - "mailgun"
  - "notion"
  - "postgres"
  - "postmark"
  - "rds"
  - "redis"
  - "s3"
  - "sentry"
  - "ses"
  - "slack"
  - "statuspage"
  - "stripe"
  - "webpack"

title: "Buttondown Lets You Build, Grow and Launch Your Email Newsletter"
description:
  Justin Duke goes over building an email newsletter sending service with
  Django and Python. It's hosted on Heroku and AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an email newsletter service. It's mostly hosted on Heroku and has has been up
and running since late 2016.

Justin talks about how he handles sending out 100k+ emails, having a mix of
Django templates and DRF + Vue, using rq to schedule emails, scaling with
Heroku, balancing out what events to keep track of, how to figure out which
features to develop and so much more.

## Topics Include

- 3:50 -- It's a weeknights / weekend project and dealing with 100k+ email spikes
- 11:42 -- Motivation for using Django, choosing "boring tech" and email validation
- 20:08 -- It's a monolithic app in a mono repo but broken up into ~8 Django apps
- 27:48 -- It used to be mostly a DRF API back-end with Vue on the front-end
- 30:04 -- Storybook is a tool for developing UI components
- 32:06 -- Useful Python / Django libraries that were helpful for this project
- 35:39 -- Spending an innovation token on using websockets for link checking
- 41:10 -- rq is a powerhouse for scheduling and sending emails in the background
- 47:35 -- Dealing with issues and errors when sending emails out at scale
- 50:43 -- Sentry and Datadog make for a great duo of services
- 54:19 -- Using Stripe and avoiding dark patterns around subscription pausing
- 59:35 -- A few strategies to prevent bad actors from sending email spam
- 1:03:09 -- Reasons for going with Heroku to host most things (roughly 12 dynos)
- 1:12:13 -- A few Heroku add-ons and plugins that are being used
- 1:16:37 -- The deployment process from development to production
- 1:21:26 -- Dealing with database and front-end changes with zero down time deploys
- 1:28:10 -- Performing database backups and backing up other user uploads
- 1:34:45 -- Getting notified of errors if something goes wrong
- 1:37:53 -- Best tips? Framing out when and where to record things (ie. events, etc.)
- 1:43:19 -- Using Notion to track bugs, roadmaps and collect user feature requests
- 1:47:23 -- Justin has a [personal site](https://jmduke.com/) and check out [Buttondown]({{ page.guest_website }})

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Click-through_rate> (CTR)
- <https://mcfunley.com/choose-boring-technology>
- <https://storybook.js.org/>
- <https://tailwindcss.com/>
- <https://github.com/heroku/heroku-pg-extras>
- <https://github.com/nickjj/flask-pg-extras>
- <https://12factor.net/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://gunicorn.org/>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/evansd/whitenoise>
- <https://github.com/rq/rq>
- <https://github.com/prettier/prettier>
- <https://github.com/eslint/eslint>
- <https://github.com/psf/black>
