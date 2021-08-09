---
layout: "podcast-or-interview"

mp3_bytes: "73243776"
mp3_duration: "1:16:17"

guest: "Kristian Dupont"
guest_avatar: "kristian-dupont"
guest_website: "https://submotion.io"
guest_twitter: "kristiandupont"

category: "podcast"
tags:
  - "koa"
  - "node"
  - "react"
  - "cloudflare"
  - "datadog"
  - "docker"
  - "elephantsql"
  - "freshping"
  - "gitlab-ci"
  - "heroku"
  - "mailchimp"
  - "parcel"
  - "postgres"
  - "sendgrid"
  - "sentry"
  - "slack"
  - "tailwindcss"
  - "xeno"

title: "Submotion Helps You Manage Access Control for Your SAAS Subscriptions"
description:
  Kristian Dupont talks about building a SAAS app access control service with
  Koa and Node. It's mostly hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
SAAS app to manage access control to your existing SAAS subscriptions. It's
built with Koa, Node and React and is hosted on Heroku. It's been running in
production since 2018.

Kristian talks about validating his idea before coding it, really leveraging
code linting tools, the challenges of adding a bunch of different SAAS app
integrations, using ElephantSQL to host his PostgreSQL database and more.

## Topics Include

- 3:20 -- Starting with an empty folder as a sole developer looking to ship an MVP
- 4:29 -- Motivation for using Node
- 9:19 -- Reasons for choosing Koa and Knex with a [custom library](https://github.com/kristiandupont/schemalint) Kristian wrote
- 14:57 -- Using eslint and the overall power of going all-in with linting
- 17:50 -- The back-end is a RESTful API with React on the front-end
- 21:43 -- Using interesting PostgreSQL features such as triggers
- 23:30 -- Managing the front-end assets with Parcel and using TailwindCSS
- 30:27 -- Fighting for your abstractions and creating React components
- 32:29 -- Adding a bunch of SAAS app integrations was challenging at times
- 37:57 -- Using Jest to run tests but not super happy about it
- 42:34 -- 10k+ lines of code on the front-end and back-end
- 46:43 -- Taxes in the US are fun (not)
- 49:00 -- Mailchimp, Freshping, Datadog and Sentry are being used for various things
- 52:05 -- Redis isn't being used but the database is quite optimized
- 55:08 -- The web app servers are hosted on Heroku and PostgreSQL is on ElephantSQL
- 58:45 -- Running a Linux VM inside of an M1 Mac for local development
- 1:02:45 -- The deployment process from development to production
- 1:07:49 -- The DB is backed up every hour
- 1:09:43 -- Freshping, Datadog and Slack provide good monitoring and alerting
- 1:12:09 -- Best tips? Using Markdown to store test fixtures
- 1:15:24 -- You can find Kristian on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and his [personal site](https://kristiandupont.com/) lists all of his socials

## Links

###### 📄 References

- <https://nodejs.org/en/about/releases/>
- <https://www.milesconsultinggroup.com/blog/2021/06/01/what-to-know-about-the-taxability-of-saas-in-18-key-states/>
- <https://blog.serverfault.com/post/stack-exchanges-architecture-in-bullet-points/>
- <https://kristiandupont.medium.com/and-naming-things-tailwind-css-typescript-and-mammals-9eab459633d2>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/venables/koa-helmet>
- <https://github.com/knex/knex>
- <https://github.com/kristiandupont/kanel>
- <https://github.com/eslint/eslint>
- <https://github.com/facebook/jest>
- <https://github.com/kristiandupont/mdconf-loader>
