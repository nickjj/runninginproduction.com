---
layout: "podcast-or-interview"

mp3_bytes: "44222208"
mp3_duration: "46:03"

guest: "Austin Lewis"

category: "podcast"
tags:
  - "django"
  - "python"
  - "aws"
  - "bootstrap"
  - "docker"
  - "jquery"
  - "lets-encrypt"
  - "mailgun"
  - "postgres"
  - "rds"
  - "route53"
  - "s3"
  - "sentry"
  - "traefik"
  - "ubuntu"

title: "A Real Estate Order and Appraisal System for a Small Business"
description:
  Austin Lewis goes over replacing an Excel sheet with a custom app written in
  Django. It's hosted on the AWS free tier.
---

In this episode of Running in Production, {{ page.guest }} goes over replacing
an Excel sheet with a custom / internal Django app to manage his real estate
business.  It's been up and running on the AWS free tier since April 2020.

It has processed over 300 orders in the few months it's been up and Austin is
sole developer of this project. It is one of the first apps he's deployed.

## Topics Include

- 6:40 -- Motivation for using Django and Python and taking advantage of Django's admin
- 9:22 -- Breaking down how the app is structured as a monolith and a few helpful libraries
- 15:28 -- Having the foresight to upload files to S3 while having only 1 production EC2 server
- 17:24 -- Sticking with Django templates and sprinkles of JavaScript to avoid Yak Shaving
- 20:06 -- Using Docker / Docker Compose with PostgreSQL and Traefik
- 25:26 -- Recap of AWS services (free tier) and setting up the EC2 servers
- 27:07 -- It's very helpful to deploy your app early and to also use Docker
- 30:25 -- Covering the deploy process, the value in testing and secret management
- 36:01 -- Using Mailgun for sending email and Sentry for error reporting
- 41:36 -- Planning for disaster by letting RDS handle backups
- 43:05 -- Best tips? Keep learning and just get something up and running
- 45:10 -- You can find Austin on [GitHub](https://github.com/avlewis) or [contact him by email](mailto:austinvlewis@gmail.com)

## Links

###### 📄 References

- <https://en.wiktionary.org/wiki/yak_shaving>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/shivanshs9/pdfgen-python>
- <https://github.com/jschneier/django-storages>
- <https://gunicorn.org/>
- <https://github.com/pytest-dev/pytest>
