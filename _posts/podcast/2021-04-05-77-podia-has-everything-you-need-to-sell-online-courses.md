---
layout: "podcast-or-interview"

mp3_bytes: "68807424"
mp3_duration: "1:11:40"

guest: "Jason Charnes"
guest_avatar: "jason-charnes"
guest_website: "https://podia.com"
guest_twitter: "jmcharnes"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "react"
  - "bootstrap"
  - "caddy"
  - "cronitor"
  - "heroku"
  - "jquery"
  - "lets-encrypt"
  - "metabase"
  - "opsgenie"
  - "paypal"
  - "postgres"
  - "postmark"
  - "redis"
  - "s3"
  - "slack"
  - "spark-post"
  - "stripe"
  - "uptime-robot"
  - "wistia"

title: "Podia Has Everything You Need to Sell Online Courses"
description:
  Jason Charnes talks about building a video course hosting platform with Ruby
  on Rails. It's hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
video course hosting platform. It's built with Ruby on Rails and is hosted on
Heroku. It's been running in production since 2014.

Jason talks about using StimulusReflex / Action Cable, upgrading to Sidekiq
Enterprise, writing tons of tests, setting up auto scaling on Heroku, tips to
run zero down database migrations at scale, ways to reduce 3rd party API calls
and more.

## Topics Include

- 2:39 -- Motivation for using Ruby on Rails (and yes Rails does scale!)
- 3:50 -- Using interactors and Action Cable with StimulusReflex
- 6:06 -- Things to think about for using Hotwire Turbo Streams vs other solutions
- 10:56 -- Action Cable is embedded into the main web server
- 12:25 -- The workflow gem and how payments are handled with Stripe and PayPal
- 16:15 -- Recently upgrading to Sidekiq Enterprise and also using flipper for feature flags
- 19:40 -- Using Knapsack Pro to help speed up tests in CI
- 21:18 -- Code to test radio is about 1 to 1.5 and there's about 38k lines of non-test code
- 24:03 -- Examples of when they're using Sidekiq's batching feature
- 26:38 -- Mostly using the asset pipeline but also using Webpacker and using StimulusJS
- 30:07 -- Most developers at Podia touch most areas of the code base
- 31:37 -- The run down on how the site editor works and using Trix plus Active Storage
- 34:41 -- It's 2021 and uploads still aren't a fully solved problem
- 36:57 -- Handling bulk video uploads from Podia to Wistia
- 38:38 -- PostgreSQL is the main database, Docker isn't being used and on-boarding new devs
- 40:53 -- How they're using Caddy and Let's Encrypt to link custom domains to customers
- 42:48 -- Using Postmark for transactional emails and SparkPost for email campaigns
- 44:18 -- Full text search with PostgreSQL and building the Podia admin dashboard
- 47:38 -- It's hosted on Heroku and they use the Rails Autoscale add-on
- 49:43 -- Surviving Black Friday without any problems
- 51:25 -- The end to end process and time to deploy code from development to production
- 53:01 -- Gems and strategies to help run database migrations at scale
- 56:44 -- Using Diffend to audit gems and switching from Heroku's scheduler to Sidekiq
- 1:01:42 -- The DB is backed up on Heroku's schedule and everything else is backed up too
- 1:03:21 -- Avoiding tons of third party API calls by storing certain things locally
- 1:05:16 -- Their payment code builds upon the official Ruby SDKs from Stripe and PayPal
- 1:06:11 -- Using Uptime Robot, Cronitor, OpsGenie and Slack for monitoring and alerts
- 1:09:13 -- Best tips? Build a friendly team of co-workers and automate as much as you can
- 1:11:03 -- You can find Jason on Twitter at [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://www.speedshop.co/blog/>
- <https://hotwire.dev/>
- <https://courses.jasoncharnes.com/stimulus-reflex>
- <https://gorails.com/episodes/how-to-use-cable-ready>
- <https://anycable.io/>
- <https://remoteruby.transistor.fm/113> (DHH on the Remote Ruby podcast)
- <https://elements.heroku.com/addons/rails-autoscale>
- <https://github.com/contribsys/faktory>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/collectiveidea/interactor>
- <https://github.com/hopsoft/stimulus_reflex>
- <https://github.com/hopsoft/cable_ready>
- <https://github.com/geekq/workflow>
- <https://github.com/mperham/sidekiq>
- <https://github.com/jnunemaker/flipper>
- <https://github.com/KnapsackPro/knapsack_pro-ruby>
- <https://stimulus.hotwire.dev/>
- <https://github.com/basecamp/trix>
- <https://github.com/Casecommons/pg_search>
- <https://github.com/ilyakatz/data-migrate>
- <https://github.com/ankane/strong_migrations>
- <https://diffend.io/>
