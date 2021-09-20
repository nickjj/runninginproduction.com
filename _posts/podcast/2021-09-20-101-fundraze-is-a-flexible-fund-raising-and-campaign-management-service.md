---
layout: "podcast-or-interview"

mp3_bytes: "60922368"
mp3_duration: "1:03:27"

guest: "CJ Avilla"
guest_avatar: "cj-avilla"
guest_website: "https://www.fundraze.org/welcome"
guest_twitter: "cjav_dev"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "heroku"
  - "mailchimp"
  - "new-relic"
  - "papertrail"
  - "postgres"
  - "pusher"
  - "redis"
  - "rollbar"
  - "s3"
  - "sendgrid"
  - "stripe"
  - "twilio"

title: "Fundraze Is a Flexible Fund Raising and Campaign Management Service"

description:
  CJ Avilla goes over creating a fund raising with Rails. It's hosted on
  Heroku and has been running in production since 2015.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a fund raising platform with Ruby on Rails. It's hosted on Heroku and has been
running in production since 2015.

CJ talks about rewriting an app with Rails, processing $30 million dollars of
donations, using Stripe, maintaining a Rails 4.2 app, carefully sending out
bulk emails, ensuring good tests are written, keeping things simple and more.

## Topics Include

- 2:26 -- Rebuilding a similar app with a new tech stack is easier the 2nd time around
- 6:14 -- Motivation for using Rails and live coding features right next to his client
- 9:33 -- What the app does at a high level and what some of the screens do
- 12:20 -- The app is running Rails 4.2 and it's humming along with minimal maintenance
- 13:29 -- Stripe handles accepting donations and keeping things as simple as possible
- 17:33 -- Processing over $30 million dollars since the site went live
- 22:35 -- It's worth checking out which payment providers are available in different countries
- 24:51 -- Using an older version of Stripe's API but it's super stable
- 27:22 -- A couple of gems from 2015 which helped build this app
- 28:50 -- (1) standard Heroku Dyno for the web app and (1) 2x size Dyno for the worker
- 32:15 -- Postgres, Redis and Resque are being used along with Heroku's cron scheduler
- 35:48 -- Sending bulk emails out can be scary
- 39:42 -- Using Rbenv locally to manage things in development
- 42:42 -- The reasons for picking Heroku were mainly to avoid any type of ops work
- 46:03 -- What it's like to develop a new feature and push it up to production
- 47:58 -- Not doing traditional TDD but tests are still written
- 51:18 -- Heroku is in charge of performing daily database backups
- 55:40 -- Handling background worker spikes with popular donation pages
- 57:42 -- Tagging the current user in Rollbar errors and then emailing customers ASAP
- 1:00:27 -- Best tips? Keeping it simple really drives down your maintenance
- 1:02:38 -- CJ's has a [YouTube channel](https://www.youtube.com/CJAvilla) and a personal site at <https://cjav.dev>

## Links

###### 📄 References

- <https://www.youtube.com/CJAvilla>
- <https://stripe.com/payments/checkout>
- <https://stripe.com/docs/payments/payment-element>
- <https://faye.jcoglan.com/node.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/collectiveidea/audited>
- <https://github.com/thoughtbot/paperclip>
- <https://github.com/gaffneyc/usps>
- <https://github.com/resque/resque>
