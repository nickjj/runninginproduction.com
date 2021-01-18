---
layout: "podcast-or-interview"

mp3_bytes: "52513536"
mp3_duration: "54:42"

guest: "Nidal Alhariri"
guest_avatar: "nidal-alhariri.jpg"
guest_website: "https://mixedcrm.com"
guest_twitter: "level09"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "vue"
  - "ansible"
  - "aws"
  - "cloudflare"
  - "lets-encrypt"
  - "linode"
  - "mongodb"
  - "nginx"
  - "parcel"
  - "redis"
  - "systemd"
  - "ubuntu"
  - "uptime-robot"
  - "websockets"

title: "MixedCRM Is a Sales and CRM Tool for Real Estate Property Developers" 
description:
  Nidal Alhariri goes over building a CRM tool with Flask and Python. It's
  hosted on a few cloud providers such as AWS and Linode.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
sales and CRM tool with Flask and Python. It's hosted on a few cloud providers
such as AWS and Linode. It was created in mid-2019.

Nidal talks about using MongoDB, splitting tenants out with their own
individual servers, mixing in Vue where needed, using Ansible and he also drops
great advice around moving forward and shipping code without chasing perfection.

## Topics Include

- 3:35 -- Motivation for using Flask and Python
- 5:38 -- Vue, MongoDB, Celery and other libraries / tools being used
- 8:28 -- Dealing with a schemaless database
- 10:04 -- It's a monolithic app that uses Flask blueprints and dealing with permissions
- 14:58 -- Each tenant / customer of the app gets their own virtual private server
- 17:24 -- Vue is mixed in where needed, the app is not a dedicated API only back-end
- 22:29 -- Parcel is being used to bundle assets and SASS is being used too
- 24:26 -- Docker isn't used yet but nginx + Let's Encrypt and Ansible is being used
- 27:23 -- Multiple hosting providers are used (AWS, Linode) with varied server specs
- 30:03 -- uwsgi is being used mainly due to certain app features using websockets
- 32:39 -- Ubuntu LTS is happily being used along with configuring the servers with Ansible
- 36:05 -- The deploy process from development to production
- 41:16 -- Environment variables for secrets and rate limiting with nginx
- 45:18 -- Handling database backups for MongoDB
- 47:28 -- Getting notified of system health issues with alarms and alerts
- 51:00 -- Best tips? Keep moving forward because failure is always better than regret
- 53:50 -- Nidal is on [Twitter](https://twitter.com/{{ page.guest_twitter }}), [GitHub](https://github.com/level09) and also has an agency at <https://www.level09.com/>

## Links

###### 📄 References

- <https://mitogen.networkgenomics.com/ansible_detailed.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/beautify-web/js-beautify>
- <https://github.com/xhtml2pdf/xhtml2pdf>
- <https://github.com/MongoEngine/mongoengine>
- <https://github.com/celery/celery>
- <https://github.com/sh4nks/flask-caching>
- <https://github.com/unbit/uwsgi>
- <https://github.com/zeekay/flask-uwsgi-websocket>
