---
layout: "podcast-or-interview"

mp3_bytes: "59259264"
mp3_duration: "1:01:43"

guest: "Dan Purcell"
guest_avatar: "dan-purcell"
guest_website: "https://paparazziaccessories.com/"
guest_twitter: "VelocityWebwork"

category: "podcast"
tags:
  - "django"
  - "python"
  - "vue"
  - "ansible"
  - "authorize-net"
  - "digitalocean"
  - "gcp"
  - "lets-encrypt"
  - "nagios"
  - "nginx"
  - "postgres"
  - "redis"
  - "sentry"
  - "slack"
  - "supervisor"
  - "ubuntu"

title: "Paparazzi Accessories Is an E-commerce Store That Sells Jewelry"
description:
  Dan Purcell talks about building a high traffic e-commerce store using Django
  and Python. It's hosted on 12+ DigitalOcean web servers.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an e-commerce store with Django that processes up to 3,000 orders per second.
It's running on 12+ web servers on DigitalOcean and the site has been up and
running since 2014.

Dan covers building an API backed app with Vue on the front-end, handling
thousands of concurrent websocket connections, using Authorize.Net for payments
and deploying to a bunch of web servers that are managed by Ansible with
Fabric.

## Topics Include

- 3:49 -- Motivation for using Django and Python
- 8:13 -- It's a monolithic app with about a dozen Django apps using Vue on the front-end
- 11:42 -- Challenges of dealing with thousands of concurrent sales
- 17:01 -- Using Celery, Redis and 4 beefy PostgreSQL servers that are replicated
- 19:50 -- Managing suspicious login attempts and using Slack for important notifications
- 22:02 -- Running 3 nginx servers and using Sentry for exception tracking
- 24:02 -- DigitalOcean is the main hosting provider, some servers have ~40 CPUs
- 27:34 -- They're running Ubuntu 18.04 LTS and the servers are managed by Ansible
- 32:33 -- Using Authorize.Net to handle all payments and why they aren't using Stripe
- 36:35 -- The deploy process using Fabric from development to production
- 38:42 -- Using feature flags with Django Waffle and deploying with a bit of down time
- 43:54 -- Dealing with secrets by having an encrypted git repo
- 46:48 -- Database backups happen through daily dumps and logging / monitoring
- 57:35 -- Best tips? Start small, deploy early / often and automate as much as possible
- 1:01:08 -- You can learn more about Dan on his site at <https://velocitywebworks.com>

## Links

###### 📄 References

- <https://www.starlette.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://github.com/celery/celery>
- <https://github.com/jazzband/django-axes>
- <https://www.fabfile.org/>
- <https://github.com/unbit/uwsgi>
- <https://github.com/django-waffle/django-waffle>
