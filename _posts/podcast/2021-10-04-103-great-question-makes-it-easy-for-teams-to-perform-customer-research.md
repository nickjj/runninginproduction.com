---
layout: "podcast-or-interview"

mp3_bytes: "72039936"
mp3_duration: "1:15:02"

guest: "PJ Murray"
guest_avatar: "pj-murray"
guest_website: "https://greatquestion.co/"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "react"
  - "algolia"
  - "datadog"
  - "github-actions"
  - "mixpanel"
  - "mux"
  - "postgres"
  - "redis"
  - "s3"
  - "sentry"
  - "stripe"

title: "Great Question Makes It Easy for Teams to Perform Customer Research"

description:
  PJ Murray goes over creating a customer research app with Rails. It's hosted
  on Heroku and has been running in production since mid-2020.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a customer research app with Ruby on Rails. It's hosted on Heroku and has been
up and running since mid-2020.

PJ talks about using feature flags, integrating Stripe with Jumpstart Pro,
building out a React front-end, the value of having business metrics, taking
data security very seriously, having a pragmatic approach around test coverage
and tons more.

## Topics Include

- 4:16 -- It took about a month to get the MVP out and a few months after for it to be sellable
- 6:52 -- Motivation for using Rails
- 8:54 -- How the app works and going over some of its screens
- 13:21 -- ActiveJob is such a good abstraction it's easy to forget what job library you use
- 14:14 -- A bunch of useful gems that are being used
- 18:14 -- The user experience can often impact the technical complexity of what you're building
- 21:53 -- Feature flags and swinging back to JSONB columns
- 26:21 -- Stripe handles all of the payments
- 28:24 -- The app is pretty much one big monolith and it's a good thing
- 29:55 -- About 25k lines of Ruby code and 40k lines of Typescript on the front-end
- 33:04 -- If Turbo were around for years would you have used it over React?
- 36:37 -- You shouldn't be afraid to touch code in your codebase
- 38:42 -- Getting a decent amount of things planned out before implementing the code
- 44:00 -- Postgres, Redis, Mixpanel and Datadog for app and business alerts / logging
- 49:19 -- Limiting access to production data from developers
- 51:17 -- Heroku helped them get to market faster and they had YCombinator credits
- 54:36 -- The deploy process from development to production
- 1:01:20 -- Limiting access at the GitHub repo level and Heroku
- 1:04:48 -- In general backups are handled by the providers they use (Heroku, S3, etc.)
- 1:07:21 -- Heroku will send out alerts if something unexpected is happening with the site
- 1:09:31 -- Best tips? Be pragmatic about testing and code coverage
- 1:11:58 -- User design and UX is handled by a specific team member
- 1:14:09 -- Check out <https://greatquestion.co> and [they're hiring too](https://careers.greatquestion.co/)

## Links

###### 📄 References

- <https://github.com/excid3/jumpstart>
- [DHH's YouTube video using esbuild and Tailwind's CLI](https://www.youtube.com/watch?v=JsNtLiph87Y)
- <https://github.com/nickjj/docker-rails-example>
- <https://en.wikipedia.org/wiki/System_and_Organization_Controls>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/ErwinM/acts_as_tenant>
- <https://github.com/excid3/noticed>
- <https://github.com/mperham/sidekiq>
- <https://brakemanscanner.org/>
- <https://github.com/roidrage/lograge>
- <https://github.com/basecamp/console1984>
- <https://github.com/testdouble/standardrb>
