---
layout: "podcast-or-interview"

mp3_bytes: "53313408"
mp3_duration: "55:32"

guest: "Jack Slingerland"
guest_avatar: "jack-slingerland.jpg"
guest_website: "https://kernl.us/"
guest_twitter: "jackslingerland"

category: "podcast"
tags:
  - "express"
  - "node"
  - "angularjs"
  - "bitbucket-pipelines"
  - "datadog"
  - "digitalocean"
  - "mongodb"
  - "pingdom"
  - "postgres"
  - "redis"
  - "s3"
  - "sendgrid"
  - "sentry"
  - "stripe"
  - "ubuntu"
  - "websockets"

title: "Kernl.us Helps WordPress Plugin and Theme Developers Manage Updates"
description:
  Jack Slingerland talks us through building and deploying a platform with
  Express that currently handles 2.5 million requests a day.
---

In this episode of Running in Production, {{ page.guest }} goes over building
[his platform]({{ page.guest_website }}) with Express / Node. It handles 2.5+
million requests a day and hosting costs about $65 / month on DigitalOcean for
2 web servers and a few other things. It's been up and running since early
2015.

Jack wrote 100,000+ lines of code on his own in his spare time. We talked about
buildings monoliths, switching from Apache to nginx during a 10 hour car ride,
keeping your deployments as simple as possible (even with zero down time) and a
whole lot more.

## Show Notes

- 1:22 -- From 2,000 requests a day to 2.5 million requests a day in a few years
- 2:01 -- WordPress is still really popular
- 2:39 -- Motivation for using Express and Node
- 5:30 -- TJ Holowaychuk created Express and he was a JavaScript legend
- 6:06 -- Express is still actively developed by the community
- 6:26 -- The back-end is using ES6 JavaScript
- 7:46 -- There's 100,000+ lines of code and Jack wrote it all
- 8:05 -- What does Kernl allow WordPress developers to do?
- 10:27 -- The 100k lines of code includes and back-end and front-end
- 12:08 -- The code is split up across a few git repos
- 12:42 -- Breaking a few things out into services came naturally, it wasn't forced
- 14:09 -- A new WordPress site health monitor service will be coming out soon
- 15:50 -- Part of the reason for choosing Angular with an API back-end was to learn new things
- 16:29 -- MongoDB, PostgreSQL, Redis and Node
- 17:13 -- Some of the Node services are using TypeScript
- 17:37 -- Is it worth it to refactor the other services to use TypeScript? Probably not
- 18:38 -- This whole app is a long running side project that's worked on after hours
- 19:25 -- Trello plays a huge role in helping Jack organize what to do
- 20:21 -- Jack's super power is being able to context switch really quickly
- 21:48 -- DigitalOcean is being used to host the site and Stripe handles payments
- 22:17 -- Pusher is used to update a counter on the home page with websockets
- 23:12 -- SendGrid is used to send out emails
- 23:42 -- Stripe isn't configured for SCA, he's still on an API version from 2016 (but it works)
- 24:58 -- What does log management look like with 75 million requests a month?
- 26:20 -- DigitalOcean's managed load balancer replaces what nginx used to do
- 27:20 -- Docker isn't being used in development or production
- 28:21 -- Jack's been running his own Linux servers since 2002
- 29:06 -- Ubuntu 18.04 (LTS) is being used on all of Kernl's servers
- 29:37 -- What will upgrading to Ubuntu 20.04 (LTS) look like for you?
- 30:26 -- (2) $5 / month DigitalOcean servers power the entire web application
- 31:41 -- Node serves static files directly, but there's very few requests for static assets
- 33:16 -- 1 static asset is served from S3 because it needs to handle massive traffic spikes
- 33:57 -- What about DigitalOcean Spaces? It's just not stable enough (and I agree)
- 36:22 -- How code gets from Jack's dev box into production
- 37:32 -- Deployments are done on multiple servers at once in parallel with no down time
- 38:04 -- How zero down time deploys are handled without a complicated set up
- 39:35 -- His main competitor had hours of down time so that had to be avoided
- 40:20 -- Secrets get transferred straight from dev to the server over SSH / SCP
- 41:13 -- Have you thought on what would need to change if 2 devs worked on the project?
- 42:15 -- The song and dance of making "Fix CI" commits until it's actually fixed
- 42:29 -- All customer data is backed up daily and things can be recreated quickly
- 43:26 -- Configuration management takes time to learn which is why it's done by hand
- 45:00 -- Pingdom will send out alerts if the site goes down, it gets checked every minute
- 45:31 -- Switching from Apache to nginx in the middle of a 10 hour car ride with his wife
- 47:39 -- Experiencing problems like that really helps you learn what not to do
- 48:29 -- DigitalOcean alerts are also set up for additional system resource alerts
- 49:05 -- Block Storage is also being used (it's an extra drive you can connect to a server)
- 50:24 -- Best tips? If you're not comfortable with a technology, don't self host it
- 51:44 -- Jack pays $65-100 a month for DigitalOcean hosting which includes everything
- 53:37 -- Biggest mistake? Probably using MongoDB because his schema is very relational
- 54:52 -- Check out [Kernl]({{ page.guest_website }}) and you can also find Jack on Twitter [@{{ page.guest_twitter}}](https://twitter.com/{{ page.guest_twitter}})

## Links

###### 📄 References

- <https://wordpress.com/>
- <http://boringtechnology.club/>
- <https://twitter.com/tjholowaychuk>
- <http://es6-features.org/>
- <https://trello.com/en-US>
- <https://pm2.keymetrics.io/>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.npmjs.com/package/pg>
