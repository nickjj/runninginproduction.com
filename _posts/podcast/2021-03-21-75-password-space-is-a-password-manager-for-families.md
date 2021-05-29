---
layout: "podcast-or-interview"

mp3_bytes: "42054912"
mp3_duration: "43:48"

guest: "Nick Hnatiw"
guest_avatar: "nick-hnatiw"
guest_website: "http://passwordspace.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "digitalocean"
  - "heroku"
  - "postgres"
  - "sendgrid"
  - "ubuntu"
  - "webpack"

title: "Password Space Is a Password Manager for Families"
description:
  Nick Hnatiw talks about building a password manager with Django and Python.
  It's hosted on Heroku and DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
password manager with Django and Python. It's hosted on Heroku and
DigitalOcean.

Nick talks about using Django Rest Framework because there's a web app along
with native mobile apps, the value in charging for a product to avoid having
your data sold, using HashiCorp Vault to manage user's private keys and more.

## Topics Include

- 5:05 -- Motivation for using Django and Python
- 7:15 -- The Django admin isn't perfect but it helps save a lot of time
- 9:16 -- Using Django Guardian and Django Rest Framework
- 11:05 -- It's a monolithic API back-end with 1 extra small service to handle private keys
- 13:12 -- The back-end is about 1,000 or 2,000 lines of code
- 14:03 -- It'll be a small amount per month to use and all of your data will be private
- 16:42 -- Using React on the front-end and why the back-end is an API
- 18:26 -- The back-end will likely be open source in the future
- 20:35 -- Developing the API back-end alongside the React + mobile app front-ends
- 22:04 -- The site is hosted on Heroku's free tier (including PostgreSQL too)
- 26:43 -- The process to develop a feature and then have it be live on the site
- 29:55 -- The database and encrypted keys are being backed up
- 30:45 -- The Vault service is running on a $5 / month DigitalOcean server
- 34:01 -- The server is running Ubuntu and we share a fun trip down memory lane with Gentoo
- 37:04 -- Best tips? Discovering Vault and being able to use it to secure user data
- 42:54 -- Check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Don%27t_repeat_yourself>
- <https://www.vaultproject.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://gunicorn.org/>
