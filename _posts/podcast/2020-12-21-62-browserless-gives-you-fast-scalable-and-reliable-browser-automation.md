---
layout: "podcast-or-interview"

mp3_bytes: "87116160"
mp3_duration: "1:30:44"

guest: "Joel Griffith"
guest_avatar: "joel-griffith"
guest_website: "https://www.browserless.io/"
guest_twitter: "browserless"

category: "podcast"
tags:
  - "express"
  - "node"
  - "preact"
  - "digitalocean"
  - "docker"
  - "graphql"
  - "lets-encrypt"
  - "namecheap"
  - "netlify"
  - "nginx"
  - "redis"
  - "sendgrid"
  - "stripe"
  - "ubuntu"
  - "websockets"

title: "Browserless Gives You Fast, Scalable and Reliable Browser Automation"
description:
  Joel Griffith goes over building Browserless with Express, Node and Docker.
  It's hosted on about 1,000+ DigitalOcean servers.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
service to run headless browsers using Express, Node and Docker. It's been up
and running since late 2017 and runs on just under 1,000 DigitalOcean servers.

Joel talks about handling millions of browser sessions, breaking the app up
into a few pieces, using Redis as a primary database, using Stripe, creating a
custom Node CLI for helping automate deployment tasks and so much more.

## Topics Include

- 3:28 -- Being profitable early on and spinning up a VPS for each dedicated account
- 6:22 -- 4-5 million browser sessions per day, with peaks up to 30+ million
- 8:03 -- Motivation for choosing Express and Node
- 14:31 -- The vm2 library helps a ton to eliminate things like remote code execution
- 19:39 -- There's 4 main parts to the app (containers, load balancer, API server and Redis)
- 25:12 -- For the pay as you go accounts, you top your account off with credits
- 27:12 -- Redis is their primary database
- 31:29 -- Using official SDKs are nice, especially if they are written in TypeScript
- 32:43 -- Preact is being used on the front-end as an alternative to React
- 37:22 -- Docker is being used in development and production
- 42:01 -- Testing Stripe locally in development along with nginx (it's not Dockerized)
- 52:36 -- Using DigitalOcean to host everything (droplets, cloud firewall and floating IPs)
- 57:40 -- Files like PDFs are dynamically served, they are not static files
- 59:34 -- All of the servers run Ubuntu 20.04 LTS
- 1:01:41 -- There's close to 1,000 servers running at any given time
- 1:05:37 -- The deployment process from development to production (includes Dokku)
- 1:11:51 -- A custom Node CLI helps automate quite a bit of deployment tasks
- 1:14:00 -- The core tool is [open source on GitHub](https://github.com/browserless/chrome)
- 1:18:38 -- Email notifications get sent out if any of the servers get overloaded
- 1:23:01 -- An endless sea of text messages from 500s while on vacation in Bora Bora
- 1:25:44 -- Best tips? Know when to pivot and try to talk with folks who cancel your service
- 1:29:58 -- Joel is on [GitHub](https://github.com/joelgriffith), checkout <{{ page.guest_website }}> along with [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://developers.google.com/web/tools/puppeteer>
- <https://github.com/tj?tab=repositories>
- <https://openresty.org/en/>
- <https://www.nginx.com/products/nginx-amplify/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used
- <https://github.com/http-party/node-http-proxy>
- <https://github.com/patriksimek/vm2>
- <https://github.com/dokku/dokku>
