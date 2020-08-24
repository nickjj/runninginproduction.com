---
layout: "podcast-or-interview"

mp3_bytes: "68004096"
mp3_duration: "1:10:50"

guest: "John Debs"
guest_avatar: "john-debs"
guest_website: "https://goskillwell.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "ansible"
  - "digitalocean"
  - "jquery"
  - "lets-encrypt"
  - "mailchimp"
  - "mailgun"
  - "nginx"
  - "postgres"
  - "redis"
  - "s3"
  - "sentry"
  - "stripe"
  - "ubuntu"
  - "webpack"

title: "Skillwell Is a Video Platform That Helps You Unlock Physical Skills"
description:
  John Debs goes over building a video platform with Django to help get you
  stronger and more flexible. It's hosted on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a video platform with Django that helps you get stronger and be more flexible.
It's hosted on a single $5 / month DigitalOcean server and has been up and
running since fall 2019.

John really drives home the value in shipping something simple on the first pass
and iterating on it if there ends up being demand for it.

## Topics Include

- 2:36 -- It started part time but now it's full time
- 4:28 -- Motivation for using Python and Django mainly came down to confidence
- 8:05 -- It's pretty close to a monolith with a few Django apps 
- 11:42 -- Reasons for using a custom video player (looping, mirroring, etc.)
- 14:18 -- Videos are uploaded directly to S3 with pre-signed URLs and no transcoding (yet)
- 19:51 -- Using the Django RQ library for doing asynchronous work
- 21:36 -- Having fun using React to write the custom video player
- 26:35 -- Creating a first pass chat feature so students can ask questions
- 28:41 -- Using Vagrant in development, with Ansible on a single $5 / mo DigitalOcean server
- 37:27 -- For a web server they're using gunicorn, nginx and Let's Encrypt for SSL
- 41:27 -- Using Stripe to handle payments has been a nice dev experience so far
- 49:16 -- Using Mailgun for transactional emails and Mailchimp for email campaigns
- 53:59 -- Mixing in jQuery as needed has been a pleasure to use, along with Webpack
- 55:54 -- The deployment process from development to production
- 1:03:40 -- S3 is trusted for video backups and database backups are done on every deploy
- 1:07:35 -- Best tips? Keep learning but pick things you're familiar with
- 1:10:02 -- Check out their platform at <{{ page.guest_website }}> and they are on [Instagram](https://www.instagram.com/goskillwell) too

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Acroyoga>
- [https://sendy.co](https://sendy.co/?ref=6L8Qf)
- <https://www.cypress.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/boto/boto3>
- <https://github.com/rq/django-rq>
- <https://gunicorn.org/>
- <https://github.com/dj-stripe/dj-stripe>
- <https://www.fabfile.org/>
