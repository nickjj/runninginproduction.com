---
layout: "podcast-or-interview"

mp3_bytes: "48569856"
mp3_duration: "50:35"

guest: "Cory Zue"
guest_avatar: "cory-zue"
guest_website: "https://www.placecard.me/"
guest_twitter: "czue"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "ansible"
  - "lets-encrypt"
  - "linode"
  - "mailchimp"
  - "mailgun"
  - "nginx"
  - "postgres"
  - "redis"
  - "sentry"
  - "statuscake"
  - "stripe"
  - "supervisor"
  - "ubuntu"

title: "Place Card Me Lets You Create Printable Place Cards Online"
description:
  Cory Zue goes over building a service to create and design place cards for
  events using Django. It's hosted on a single Linode server.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a service to create and design place cards for weddings, parties and any other
events using Django. It's hosted on a single Linode server and has been up
and running since May 2017.

Cory talks about trying to avoid over engineering things and this episode
speaks truth to that. His service generates over $2,000 / month and had an MVP
working in ~2 weeks as a solo developer.

## Topics Include

- 3:03 -- The MVP took about a week or 2 to make thanks to Django
- 6:24 -- Prior to Covid-19, Cory was making about $2,000 / month selling $8 templates
- 9:40 -- Processing the guest list that users upload and a few useful libraries
- 13:45 -- It's a monolithic application with a React front-end split for UI heavy pages
- 19:10 -- The tech stack includes PostgreSQL, gunicorn, nginx, Redis and Let's Encrypt
- 23:33 -- This app and others are hosted on Linode with 2 CPU cores and 4 GB of memory
- 25:30 -- Using Ubuntu on the server and moving towards using Ansible to configure it
- 29:30 -- Using Linode and StatusCake for alerts on system health and monitoring
- 32:57 -- Stripe is used to handle payments but have customers ever asked for PayPal support?
- 35:03 -- Walking through the deployment process from development to production
- 42:27 -- Disaster recovery is handled by automated backups through Linode
- 44:37 -- Best tips? Avoid over engineering things and don't chase perfection
- 47:14 -- You can find Cory on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and his site is at <https://www.coryzue.com/>
- 47:52 -- Check out Cory's SAAS building tool for Django at <https://www.saaspegasus.com/>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Place_card>
- <https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it> (YAGNI)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/pyexcel/pyexcel>
- <https://github.com/pygments/pygments>
- <https://github.com/jazzband/pip-tools>
- <https://gunicorn.org/>
- <https://github.com/anymail/django-anymail>
