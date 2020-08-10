---
layout: "podcast-or-interview"

mp3_bytes: "57003264"
mp3_duration: "59:22"

guest: "Dave Merwin"
guest_avatar: "dave-merwin"
guest_website: "https://datawellness.com"
guest_twitter: "davemerwin"

category: "podcast"
tags:
  - "django"
  - "python"
  - "vue"
  - "cloudflare"
  - "digitalocean"
  - "lets-encrypt"
  - "nginx"
  - "nuxt"
  - "postgres"
  - "systemd"
  - "ubuntu"
  - "uptime-robot"

title: "DataWellness Helps Organizations Stay Safe and Compliant"
description:
  Dave Merwin goes over building a service to help protect folks using Django.
  Everything is hosted on a single DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a service that helps protect those that protect us. It's a service written
in Django and it's hosted on a single DigitalOcean server. It's been up and
running since 2016.

Dave covers using Django apps, the benefits of keeping everything hosted on 1
server and getting your app up and in front of customers as soon as possible.

## Topics Include

- 3:01 -- Initially building an app for 1 B2B client and designing features based on that 
- 5:58 -- Motivation for using Django and Python for this project
- 9:26 -- Building a monolith with 14 Django apps but moving towards microservices
- 14:47 -- Mostly server rendered Django templates but there are pieces done with Vue
- 20:50 -- PostgreSQL is being used as a DB and a side topic about how nice TailwindCSS is
- 25:08 -- Not using Docker and learning from the Django community when getting stuck
- 28:50 -- Everything runs on a single DigitalOcean server using Ubuntu 18.04 LTS
- 32:30 -- Using Gunicorn, nginx, Let's Encrypt and Cloudflare
- 39:38 -- Not waiting out for the best tools and being able to evolve your tech stack
- 41:58 -- Deployment process from start to finish
- 46:14 -- DigitalOcean's alerting tools are enabled along with Uptime Robot
- 51:23 -- Using DigitalOcean's server snapshots for complete backups
- 56:05 -- Best tips? Try to get your app in front of your customers as soon as possible
- 58:40 -- Dave is on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and check out their site <https://purebluedesign.com/>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Health_Insurance_Portability_and_Accountability_Act>
- <https://tailwindcss.com/>
- <https://gist.github.com/davemerwin/75420b25ae8a975ec6916d5141eb39d4> (server set up)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://gunicorn.org/>
