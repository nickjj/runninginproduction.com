---
layout: "podcast-or-interview"

mp3_bytes: "65206656"
mp3_duration: "1:07:55"

guest: "Adrian Marin"
guest_avatar: "adrian-marin"
guest_website: "https://avohq.io/"
guest_twitter: "adrianthedev"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "bugsnag"
  - "docker"
  - "github-actions"
  - "heroku"
  - "hotjar"
  - "mailgun"
  - "open-source"
  - "postgres"
  - "redis"
  - "stripe"
  - "tailwindcss"
  - "turbo"


title: "Avo Is a Framework for Creating Ruby on Rails Admin Panels"
description:
  Adrian Marin goes over building a custom Rails admin framework and gem. It's
  hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
Ruby on Rails admin framework. It's hosted on Heroku and has been available
since late 2020.

Adrian talks about building a Rails engine, using Stripe Checkout, building the
admin out with Hotwire Turbo, using View Component, creating a very automated
CI / CD pipeline to publish the gem and much more.

## Topics Include

- 6:38 -- Motivation for using Ruby on Rails
- 8:57 -- The gem does phone home on a 1 hour interval
- 11:33 -- The gem is using Hotwire Turbo but the product site is not
- 13:10 -- Handling billing with Stripe's Checkout page and a few Rails gems
- 16:43 -- Publishing a Rails engine with its own assets
- 21:10 -- Using Hotwire Turbo to build the admin dashboard
- 26:30 -- What it was like migrating the app from Vue to Turbo
- 31:49 -- Using View Component to help improve Rails partial performance
- 39:21 -- Postgres is being used as the database and Redis for caching
- 42:30 -- What is Hotjar, how it's being used and extracting features
- 46:36 -- From Notion to Linear to using GitHub to help manage the project
- 49:44 -- Using Heroku for hosting and what delayed job is being used for
- 54:55 -- What it's like deploying the site and the gem
- 1:01:19 -- Performing database backups? Maybe, maybe not!
- 1:03:57 -- Best tips? Start building and launch as soon as possible
- 1:06:06 -- The gem has an [open source version](https://github.com/avo-hq/avo) that's very usable
- 1:07:03 -- Check out <{{ page.guest_website }}> and [Adrian is on Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://guides.rubyonrails.org/engines.html>
- <https://github.com/avo-hq/avo>
- <https://world.hey.com/dhh/building-basecamp-4-405a347f>
- <https://viewcomponent.org/>
- <https://www.notion.so/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://hotwire.dev/>
- <https://github.com/alpinejs/alpine>
- <https://github.com/heartcombo/devise>
- <https://github.com/collectiveidea/delayed_job>
- <https://github.com/excid3/prefixed_ids>
- <https://github.com/github/view_component>
