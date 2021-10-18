---
layout: "podcast-or-interview"

mp3_bytes: "83458944"
mp3_duration: "1:26:56"

guest: "Nick Savrov"
guest_avatar: "nick-savrov"
guest_website: "https://uscreen.tv"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "vue"
  - "authorize-net"
  - "clickhouse"
  - "digitalocean"
  - "fastly"
  - "heroku"
  - "kafka"
  - "lets-encrypt"
  - "mux"
  - "new-relic"
  - "nginx"
  - "opsgenie"
  - "paypal"
  - "postgres"
  - "redis"
  - "sendgrid"
  - "sentry"
  - "stripe"
  - "turbolinks"
  - "uptime-robot"
  - "webpack"

title: "uscreen Is a Platform That Helps Content Creators Build a Business"

description:
  Nick Savrov goes over building a platform to help content creators with Rails.
  It's hosted on Heroku and has been up since 2014.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
platform to help content creators build a business with Ruby on Rails. It's
hosted on Heroku and has been up and running in production since 2014.

Nick talks about supporting 6.5 million users, using Turbolinks, having a 19
developer team working on a monolithic app, sending millions of weekly emails,
storing billions of weekly events, using ShapeUp to help manage the project and
much more.

## Topics Include

- 2:49 -- They support 6.5 million users on the platform which helped creators make $100m+
- 4:19 -- There's 2 parts to the system, the admin for creators and the user experience
- 8:49 -- BREAKING NEWS: Rails can scale and it's working out nicely for them as a monolith
- 10:47 -- Turbolinks and Liquid helped their app a lot
- 14:10 -- It feels like a Rails app but uses VueJS and InertiaJS on the front-end
- 18:47 -- A couple of interesting gems in their Gemfile, including using Fastly
- 21:38 -- They have a great relationship with Mux for streaming video
- 25:25 -- Approaching the latest stable version of Rails
- 27:05 -- 19 Rails engineers are working on the monolithic code base
- 28:33 -- Payments are supported with Stripe, PayPal and Authorize.net
- 31:42 -- About 10 million emails are sent out every week through SendGrid
- 34:29 -- Custom domains for customers and using Heroku with nginx / Let's Encrypt
- 39:51 -- Postgres is the main database along with ClickHouse (billions of events a week)
- 42:33 -- What types of events are being logged and how can it be viewed?
- 46:20 -- A custom nginx router that sits in front of Heroku
- 50:11 -- Reasons for using Heroku and setting up an auto-scaler
- 54:51 -- A couple of Heroku add-ons and using New Relic (NOTE: 10 billion rows = 250GB)
- 57:38 -- The deployment process from dev to prod (CI, code reviews, GitHub discussions)
- 1:07:57 -- What is ShapeUp which is Basecamp's methodology around project management
- 1:09:06 -- Backing up user data and more info about ClickHouse
- 1:14:51 -- There's value in performing soft deletes as long as you really delete it later
- 1:16:03 -- OpsGenie, New Relic and Uptime Robot are used for alerting and being on-call
- 1:22:34 -- Best tips? Follow standards when you can such as using built in Rails features
- 1:26:03 -- You can find Nick on [GitHub](https://github.com/savroff) and [Telegram](https://t.me/savrov_n)

## Links

###### 📄 References

- <http://railscasts.com/>
- <https://youtu.be/KJVTM7mE1Cc?t=600> (RailsConf 2015 "Backpack" reference)
- <https://runninginproduction.com/podcast/31-mux-is-an-api-based-platform-that-lets-you-process-and-stream-videos>
- <https://basecamp.com/shapeup>
- <https://runninginproduction.com/podcast/12-learn-ruby-on-rails-through-screencast-tutorials-on-gorails>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/Shopify/liquid>
- <https://github.com/inertiajs/inertia>
- <https://github.com/mperham/sidekiq>
- <https://github.com/PNixx/clickhouse-activerecord>
