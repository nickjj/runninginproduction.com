---
layout: "podcast-or-interview"

mp3_bytes: "60683520"
mp3_duration: "1:03:12"

guest: "Dalton Polhill"
guest_avatar: "dalton-polhill"
guest_website: "https://courses.nickmccullum.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "apache"
  - "aws"
  - "lets-encrypt"
  - "route53"
  - "ses"
  - "sqlite"
  - "stripe"
  - "ubuntu"

title: "An E-commerce Site That Lets Folks Buy Online Courses"
description:
  Dalton Polhill goes over building a text based course platform with Django
  and Python. It's hosted on AWS with a single EC2 instance.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a text based course platform with Django and Python. It's running on a single
EC2 instance and was up and running after 2.5 months of development time.

Dalton talks about doing contract work for a client, how the Django admin was
a big help, happily using SQLite, the value in using web frameworks and more.

## Topics Include

- 2:46 -- Motivation for using Django and Python
- 5:01 -- The Django admin helped a lot for building this app
- 7:47 -- Fleshing out what this application does (features, models, etc.)
- 13:18 -- Going from internal testing to live testing for payments is stressful
- 18:15 -- Mostly Django templates with sprinkles of JavaScript
- 20:41 -- Building the core of the app first while learning how it all fits together
- 23:21 -- SQLite is being used as the primary database
- 29:40 -- Not using Docker caused a few hiccups along the way
- 35:32 -- Identifying AWS services by name is hard, and the site is hosted on EC2
- 41:49 -- The EC2 instance is running Ubuntu 18.04 LTS and was set up manually
- 44:28 -- DNS can be confusing at times
- 46:25 -- An old school way of deploying code from development to production
- 51:46 -- Database backups aren't automated yet
- 56:08 -- Emails are sent out using SES and being aware of delivery limits
- 59:27 -- Best tips? Learn one or more web frameworks
- 1:02:41 -- You can find Dalton [on GitHub](https://github.com/stormbandit)

## Links

###### 📄 References

- <https://channels.readthedocs.io/en/latest/asgi.html>

###### ⚙️ Tech Stack

{% include services-used.html %}
