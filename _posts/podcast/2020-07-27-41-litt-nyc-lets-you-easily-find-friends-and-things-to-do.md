---
layout: "podcast-or-interview"

mp3_bytes: "72735744"
mp3_duration: "1:15:45"

guest: "Harry Moreno"
guest_avatar: "harry-moreno"
guest_website: "https://litt.nyc/"
guest_twitter: "morenoh149"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "bootstrap"
  - "heroku"
  - "papertrail"
  - "postgres"
  - "pusher"
  - "s3"
  - "sendgrid"

title: "Litt NYC Lets You Easily Find Friends and Things to Do"
description:
  Harry Moreno goes over building a platform that lets you find things to do
  in NYC. The back-end is in Django and it's hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a platform with Django that lets you connect with people and find things to do
in NYC. It's hosted on Heroku and has been up and running in production since
August 2019.

Harry covers building an API with Django, using React Native for a mobile app,
the struggles of learning Kubernetes and how it's a good idea to validate your
idea before trying to code it.

## Topics Include

- 3:25 -- Measuring key business metrics with OKR and KPI analysis
- 6:25 -- Motivation for choosing Django as the back-end for the native mobile app
- 13:29 -- From trying to learn GitOps and Kubernetes to using Heroku in the end
- 17:53 -- Using Django templates, Django REST Framework and Websockets
- 28:29 -- They are using PostgreSQL and Heroku's APS for background jobs for now
- 33:00 -- Using (1) Heroku hobby Dyno and aiming for a 90+ Lighthouse score
- 38:57 -- Using the first paid plan of Heroku's PostgreSQL and a few Heroku add-ons
- 49:23 -- Interesting Python / Django packages used to help build this service
- 55:23 -- The process of getting a feature developed locally and pushing it to production
- 1:04:13 -- Uploading user files to S3 and working on an automated test suite
- 1:11:42 -- Best tips? Try to validate your idea before coding it to completion
- 1:14:55 -- Check out <{{ page.guest_website }}>, they are on [Instagram](https://instagram.com/littlive) / [Twitter](https://twitter.com/{{ page.guest_twitter }}) too

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/OKR>
- <https://en.wikipedia.org/wiki/Performance_indicator>
- <https://stackoverflow.com/q/61552070>
- <https://developers.google.com/web/tools/lighthouse>
- <https://12factor.net/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://pypi.org/project/django-geo/>
- <https://github.com/evansd/whitenoise>
- <https://github.com/psf/black>
- <https://github.com/boto/boto3>
