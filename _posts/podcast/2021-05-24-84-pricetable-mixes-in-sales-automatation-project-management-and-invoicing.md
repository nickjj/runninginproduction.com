---
layout: "podcast-or-interview"

mp3_bytes: "57794560"
mp3_duration: "1:00:12"

guest: "Ege Ersoz"
guest_avatar: "ege-ersoz"
guest_website: "https://pricetable.io/"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "vue"
  - "gigalixir"
  - "gitlab-ci"
  - "heroku"
  - "logflare"
  - "postgres"
  - "s3"
  - "sendgrid"
  - "stripe"
  - "uptime-robot"

title: "PriceTable Mixes in Sales Automation, Project Management and Invoicing"
description:
  Ege Ersoz goes over building a project management service with Phoenix and
  Elixir. It's hosted on Gigalixir.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
project management service using Phoenix and Elixir. It runs on Gigalixir along
with Heroku and has been up and running since early 2018.

Ege talks about using Elixir for the last few years, upgrading to use Phoenix
contexts, building a monolithic app with an API back-end / VueJS front-end,
building his own Stripe billing module, what it's been like using Gigalixir and
more.

## Topics Include

- 1:24 -- What it was like using Elixir back in early 2018
- 4:55 -- Motivation for using Phoenix and Elixir
- 6:37 -- Phoenix Channels and Elixir GenServers are being used a bit
- 10:14 -- It's a monolithic app with mostly an API back-end using VueJS on the front-end
- 13:34 -- Going through the process of upgrading to use Phoenix contexts
- 18:19 -- Interesting packages in Ege's mix file that helped him build his app
- 23:00 -- The front-end assets are managed with Webpack, Vuetify is being used too
- 26:47 -- Separation of concerns was the main reason for making an API back-end
- 29:43 -- Stripe is being used to accept payments with no 3rd party Stripe library
- 32:27 -- PostgreSQL is the primary database and it's all hosted on Gigalixir
- 36:38 -- The Gigalixir bill is about $200 a month including a staging environment
- 39:49 -- The deployment process from development to production
- 42:07 -- Offloading PDF generation to a micro-service
- 43:38 -- Gigalixir is handling automated database backups
- 45:44 -- UptimeRobot monitors the app and reports back if it's down
- 47:05 -- Getting rid of subdomains for each user account / tenant and multi-tenancy
- 51:34 -- Moving from Timber to Logflare for application logs
- 54:26 -- Transactional emails are sent using SendGrid
- 55:57 -- Best tips? Having a trustworthy co-founder has been incredibly important
- 59:12 -- Check out <{{ page.guest_website }}> and you can [email Ege directly](mailto:ege@pricetable.io) too

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/bitwalker/timex>
- <https://github.com/elixirmoney/money>
- <https://github.com/ex-aws/ex_aws>
- <https://github.com/thoughtbot/bamboo>
- <https://github.com/sorentwo/oban>
- <https://vuetifyjs.com/en/>
- <https://github.com/alvarcarto/url-to-pdf-api>
