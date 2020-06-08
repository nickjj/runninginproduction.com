---
layout: "podcast-or-interview"

mp3_bytes: "65037696"
mp3_duration: "1:07:44"

guest: "Sean Parsons"
guest_avatar: "sean-parsons.jpg"
guest_website: "https://confectioneryconnect.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "aws"
  - "cloudfront"
  - "cloudwatch"
  - "docker"
  - "elasticache"
  - "postgres"
  - "rds"
  - "redis"
  - "route53"
  - "s3"
  - "statuscake"
  - "stripe"
  - "supervisor"
  - "ubuntu"

title: "Confectionery Connect Is an E-commerce Video Course Marketplace"
description:
  Sean Parsons goes over building a video course marketplace with Django. It
  has about 100k+ lines of code and is hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an e-commerce video course marketplace to sell Confectionery goods with Django
and Python. It's been running in production since December 2019 and it's hosted
on AWS.

The app has roughly ~100k lines of code and was solo developed part time over
about 3 months before shipping an MVP. 

## Topics Include

- 3:00 -- Modifying an existing e-commerce library called Seleor
- 7:20 -- Figuring out how to pay out instructors fairly based on activity
- 10:04 -- Picking Django, avoiding burnout and splitting the code into ~15 Django apps
- 20:49 -- Celery is being used extensively, along with Celery Beat
- 25:10 -- Stripe as a payment gateway was a natural fit given their subscription model
- 29:44 -- It is a server rendered site with Django templates, except for the video player
- 35:26 -- Turns out using Amazon's video encoding service is expensive, so Sean uses ffmpeg
- 38:48 -- High level overview about the rest of the tech stack
- 42:21 -- Using Fabric to deploy to a single EC2 instance
- 45:00 -- Going over the deploy process from development to production
- 50:08 -- Benefits of switching to a compute optimized C5n.large EC2 instance
- 1:00:46 -- Handling disasters and unexpected events
- 1:04:39 -- Best tips? Pick the tool you're the most productive with and ship something

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Confectionery>
- <https://transferwise.com/us>
- <https://www.youtube.com/watch?v=8hY6DSSVvYw> (Etsy talk on deployment)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/mirumee/saleor>
- <https://github.com/deschler/django-modeltranslation>
- <https://github.com/celery/celery>
- <https://flower.readthedocs.io/en/latest/>
- <https://videojs.com/>
- <https://gunicorn.org/>
- <https://www.fabfile.org/>
- <https://github.com/antonagestam/collectfast>
