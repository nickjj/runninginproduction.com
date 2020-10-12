---
layout: "podcast-or-interview"

mp3_bytes: "74218368"
mp3_duration: "1:17:18"

guest: "Umar Hansa"
guest_avatar: "umar-hansa.jpg"
guest_website: "https://moderndevtools.com/"
guest_twitter: "umaar"

category: "podcast"
tags:
  - "express"
  - "node"
  - "cloudflare"
  - "digitalocean"
  - "gulp"
  - "nginx"
  - "postmark"
  - "server-pilot"
  - "sqlite"
  - "ubuntu"
  - "updownio"
  - "vimeo"

title: "A Video Course Platform Built for a Course Called Modern DevTools"
description:
  Umar Hansa goes over building his video course platform with Express. It's
  hosted on a single $10 / month DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a video course platform with Express and Node. It's hosted on a single $10 /
month DigitalOcean server. It took about 3 months of part time development and
has been up and running since late 2017.

Umar talks about keeping it simple, building a server rendered monolith, using
SQLite and not being afraid to build something from scratch. He covered a lot
of ground in this episode.

## Topics Include

- 4:03 -- Motivation for using Node and Express
- 8:21 -- A break down of what features the platform currently has
- 10:26 -- Currency exchange rates, PayPal and Stripe integration options
- 17:46 -- It's a monolithic app with 4,000 lines of code that evolved slowly over time 
- 21:53 -- It's using server rendered templates with progressive JS enhancements
- 29:29 -- TypeScript is being used here and there and Gulp is building assets
- 32:49 -- How asset cache busting works with Gulp and the template language
- 34:43 -- SQLite is being used with the Knex library as a query builder
- 38:50 -- A background worker isn't being used but adding one is a work in progress
- 43:18 -- Sending emails out with Postmark and dealing with 3rd party APIs being down
- 46:53 -- It's hosted on a single $10 / month DigitalOcean server running Ubuntu 18.04 LTS
- 52:13 -- Managing the Node process using PM2 in production with minimal down time
- 58:37 -- Setting the server up by hand by following tutorials and then using ServerPilot
- 1:04:34 -- Using GitHub Actions in the future and secret management
- 1:09:03 -- Depending on DigitalOcean's automated backups and handling logs
- 1:14:37 -- Best tips? Don't be afraid to build something from scratch
- 1:16:03 -- You can find Umar on Twitter at [@{{ page.guest_twitter}}](https://twitter.com/{{ page.guest_twitter }}) and he goes by the same name on multiple sites, also check out his new course at <https://learnbrowsertesting.com>

## Links

###### 📄 References

- <https://github.com/nickjj/flask-static-digest>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.npmjs.com/package/open-exchange-rates>
- <https://github.com/totaljs/node-paypal-express-checkout>
- <https://github.com/ericf/express-handlebars>
- <https://github.com/mozilla/nunjucks>
- <https://github.com/knex/knex>
- <https://github.com/Unitech/pm2>
- <https://github.com/motdotla/dotenv>
