---
layout: "podcast-or-interview"

mp3_bytes: "67532544"
mp3_duration: "1:10:20"

guest: "Jake Lazaroff"
guest_avatar: "jake-lazaroff"
guest_website: "https://songrender.com"
guest_twitter: "songrender"

category: "podcast"
tags:
  - "express"
  - "node"
  - "react"
  - "hugo"
  - "cloudflare"
  - "digitalocean"
  - "digitalocean-spaces"
  - "netlify"
  - "nginx"
  - "packer"
  - "papertrail"
  - "paypal"
  - "postgres"
  - "postmark"
  - "redis"
  - "sentry"
  - "statuscake"
  - "stripe"
  - "systemd"
  - "terraform"
  - "ubuntu"
  - "webpack"

title: "SongRender Lets You Create Audio Visualizer Videos from Audio Clips"
description:
  Jake Lazaroff talks about building a video rendering service with Express
  and Node. It's hosted on a few DigitalOcean servers.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a video rendering service with Express and Node. It runs on a few DigitalOcean
servers and has been up and running in production since February 2019.

Jake goes over rendering ~30k+ videos over 2+ years, executing background tasks,
sharing lots of code between the back-end and front-end, using both Stripe and
PayPal, not using an ORM with PostgreSQL, setting up Blue / Green deploys with
Terraform, Packer and nginx, plus tons more.

## Topics Include

- 4:07 -- Shipping an MVP in a bit under 6 months working on it nights and weekends
- 6:54 -- About 125 videos are rendered per day (~30k since the 2+ years it's been up)
- 9:09 -- Motivation for using Express and Node and a few libs he's using server side
- 12:02 -- The app is mostly monolithic and Bull handles processing background tasks
- 13:10 -- A background task spawns DigitalOcean servers for video rendering
- 16:14 -- Both the Node back-end and JS front-end are in the same repo and share code
- 17:49 -- The shared code lets you get real-time video previews straight in the browser
- 20:06 -- Create React App was used as a base to build the front-end
- 22:16 -- Hugo powers the marketing site and is hosted on Netlify
- 24:00 -- There's no custom theme, it's all hand crafted CSS using SASS
- 25:30 -- Both Stripe and PayPal are used to handle 1 time and subscription payments
- 31:03 -- The admin back-end is a bunch of API endpoints protected by an admin user flag
- 32:33 -- PostgreSQL is the primary database and no ORM is being used
- 34:56 -- TypeScript is used through out the code base / nginx + Cloudflare is being used
- 36:31 -- Docker isn't being used in development / Postmark is used for sending emails out
- 38:43 -- Blue / Green deploys with Terraform, Packer and nginx on DigitalOcean
- 41:56 -- Ubuntu LTS is running on all of the servers
- 42:41 -- 1 CPU / 1 GB for the API server & load balancer, 1 CPU / 3 GB for the renderers
- 43:04 -- Paid videos get a CPU optimized render server with 4 CPUs / 8 GB of memory
- 44:41 -- Videos use up a lot of storage and they're stored on DigitalOcean Spaces
- 47:35 -- Ansible was used in the past but now everything is baked into the Packer image
- 48:53 -- The deploy process from development to production
- 54:31 -- Database migrations are run out of band with a tool called Dbmate
- 55:28 -- Backups are handled with DigitalOcean's automated backups
- 58:16 -- Alarms, alerts, monitoring and error reporting
- 1:01:57 -- The paid plan has unlimited video uploads and overall hosting is ~$125 / month
- 1:07:05 -- Best tips? You can't go too wrong with choosing boring technology
- 1:09:27 -- Check out [SongRender]({{ page.guest_website }}) ([IG](https://www.instagram.com/songrender) / [Twitter](https://twitter.com/{{ page.guest_twitter }})), Jake has a [personal blog](https://jake.nyc/) and is on [Twitter](https://twitter.com/jlazaroff) too

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Non-linear_editing>
- <https://paw.cloud/>
- <https://jake.nyc/words/bluegreen-deploys-and-immutable-infrastructure-with-terraform/>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>
- <http://boringtechnology.club/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/bithavoc/express-winston>
- <https://github.com/OptimalBits/bull>
- <https://github.com/facebook/create-react-app>
- <https://github.com/sass/sass>
- <https://github.com/mjmlio/mjml>
- <https://github.com/amacneil/dbmate>
