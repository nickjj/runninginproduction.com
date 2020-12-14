---
layout: "podcast-or-interview"

mp3_bytes: "1:01:26"
mp3_duration: "58985856"

guest: "Parker Selbert"
guest_avatar: "parker-selbert"
guest_website: "https://getoban.pro/"
guest_twitter: "sorentwo"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "docker"
  - "github-actions"
  - "heroku"
  - "honeybadger"
  - "postgres"
  - "sendgrid"
  - "stripe"
  - "tailwindcss"

title: "Monitor Oban Jobs in Real Time with Oban Web Pro"
description:
  Parker Selbert talks about how he handles the licensing site for his Oban 
  project using Phoenix and Elixir. It's hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} talks about building
the licensing site for his Oban project using Phoenix and Elixir. It's been up
and running since March 2019 on Heroku.

Parker talks about using Live View for the demo page, how access control is
handled with Hex's private packages, a bunch of libraries he uses, hand rolling
his Stripe implementation, building a custom admin with custom analytics and
more.

## Topics Include

- 4:48 -- Motivation for using Phoenix and Elixir to build the licensing server
- 7:36 -- Processing millions of background jobs a day with PostgreSQL as a queue back-end
- 11:55 -- Live View powers the demo page and using prefixed jobs to keep things separate
- 16:43 -- It's almost always worth using a dedicated background tool even in Elixir
- 18:14 -- Keeping Live View and Phoenix updated to their latest stable versions
- 22:26 -- How licensing for the pro version works at the Hex package level
- 27:03 -- Docker is being used in production but not development
- 31:38 -- Challenges of getting Phoenix to reload files outside of the main code base
- 34:04 -- A bunch of useful libraries that were used to help build the pro site
- 43:00 -- Building out a custom admin to help manage customers, plus custom analytics
- 46:41 -- About $100 a month to host everything on Heroku (2 Dynos + Postgres)
- 50:47 -- The deployment process from development to production
- 56:21 -- Backing up the database is handled very nicely by Heroku
- 1:00:03 -- Best tips? Try to keep as much as you can open and contributable by others
- 1:00:34 -- Check out Parker on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and [GitHub](https://github.com/sorentwo), his wife is on [GitHub too](https://github.com/sorenone)

## Links

###### 📄 References

- <https://hex.pm/docs/private>
- <https://asdf-vm.com/#/>
- <https://hexdocs.pm/plug/Plug.BasicAuth.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used
- <https://github.com/sorentwo/oban>
- <https://github.com/phoenixframework/phoenix_live_view>
- <https://github.com/elixirs/faker>
- <https://github.com/falood/exsync>
- <https://github.com/thoughtbot/bamboo>
- <https://github.com/hexpm/hex_core>
- <https://github.com/boydm/phoenix_markdown>
