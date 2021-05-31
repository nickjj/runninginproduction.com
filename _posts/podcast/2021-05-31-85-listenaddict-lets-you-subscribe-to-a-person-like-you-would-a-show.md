---
layout: "podcast-or-interview"

mp3_bytes: "69598848"
mp3_duration: "1:12:29"

guest: "David Parker"
guest_avatar: "david-parker"
guest_website: "https://www.listenaddict.com/"
guest_twitter: "davidwparker"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "svelte"
  - "sapper"
  - "cloudflare"
  - "honeybadger"
  - "logentries"
  - "mailgun"
  - "new-relic"
  - "postgres"
  - "redis"
  - "vercel"
  - "webpack"

title: "ListenAddict Lets You Subscribe to a Person Like You Would to a Show"
description:
  David Parker talks about building a service to subscribe to people with Ruby
  on Rails. It's hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a service to subscribe to people with Ruby on Rails and Sapper. It's hosted on
Heroku ($30 / month) and has been up and running since November 2020.

David talks about creating an API back-end with Rails, trying out Svelte and
Sapper, the challenges of scraping names from websites, figuring out and fixing
PostgreSQL performance issues, finding a good work / life balance and more.

## Topics Include

- 3:27 -- Motivation for using Ruby on Rails and Sapper / Svelte
- 6:18 -- Writing raw SQL queries before translating them to ActiveRecord
- 7:36 -- A few Ruby libraries that helped build this project
- 9:37 -- The challenges around scraping human names from various websites
- 13:17 -- The API Rails back-end is a monolithic app with about 100 endpoints
- 15:44 -- David pulls from 94 different sources to find new content
- 19:06 -- The Engtagger gem helps figure out stop words
- 20:25 -- Why did you go with an API back-end?
- 21:43 -- What Svelte and Sapper are and how they help build UIs
- 25:34 -- How the back-end and front-end communicate with each other
- 28:29 -- ~11k LOC on the back-end and ~5 LOC on the front-end
- 30:49 -- At the moment it's a free service and there's no ads too
- 33:23 -- What Sidekiq is being used for in terms of background jobs
- 35:30 -- Mailgun is being used to send all transactional emails
- 37:34 -- How the service might be monetized in the future (it's $30 / month for hosting now)
- 40:31 -- Break down of Heroku Dynos and add-ons
- 43:17 -- Figuring out how to add new people and also using Cloudflare
- 45:40 -- The deployment process from development to production
- 49:16 -- The database is being backed up through Heroku
- 52:00 -- A features table is in the database to enable features for himself
- 54:37 -- Logentries will send out a notification if something goes down
- 57:50 -- What to look out for and how to fix certain performance issues with PostgreSQL
- 1:01:09 -- An example of when to consider breaking up a wide table into multiple tables
- 1:05:22 -- Best tips? Figure out your work / life balance and try the back-end / front-end split
- 1:11:21 -- Find David [on Twitter](https://twitter.com/{{ page.guest_twitter }}), <https://www.programmingtil.com/> and his [YouTube channel](https://www.youtube.com/user/iamdavidwparker)

## Links

###### 📄 References

- <https://www.mturk.com/>
- <https://github.com/evanw/esbuild>
- <https://www.snowpack.dev/>
- <https://dev.to/svelte-radio/building-listenaddict-with-david-w-parker>
- <https://github.com/heroku/heroku-pg-extras>
- <http://rachbelaid.com/postgres-full-text-search-is-good-enough/>
- <https://mcfunley.com/choose-boring-technology>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/heartcombo/devise>
- <https://github.com/waiting-for-dev/devise-jwt>
- <https://github.com/yohasebe/engtagger>
- <https://github.com/rack/rack-attack>
- <https://github.com/rubocop/rubocop>
- <https://prettier.io/>
