---
layout: "podcast-or-interview"

mp3_bytes: "54200448"
mp3_duration: "56:27"

guest: "Adam Conrad"
guest_avatar: "adam-conrad"
guest_website: "https://gettoknowapp.com/"
guest_twitter: "theadamconrad"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "gigalixir"
  - "postgres"
  - "slack"
  - "stripe"

title: "Get to Know Your Coworkers through Simple QA with This Slack App"
description:
  Adam Conrad goes over building and deploying a Slack App with Phoenix and
  Elixir. It's all hosted on Gigalixir for about $50 / month.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a Slack bot service with Phoenix and Elixir. It's hosted with Gigalixir for
about $50 / month and has been up and running since mid 2018.

Adam talks about the wonderful Elixir community along with how Elixir helps him
manage a bunch of concurrent tasks for his service. He also goes over a number
of features that you get from using Gigalixir to host your Elixir projects.

## Show Notes

- 1:31 -- Adam is the sole developer but he has a friend who helps him market the service
- 2:38 -- The Slack bot asks you a number of questions, such as your music preference
- 6:01 -- The public site uses Phoenix and the bot is written in Elixir
- 6:25 -- What made Elixir a perfect fit for this application?
- 7:38 -- Handling concurrency through tasks using Elixir's standard library
- 9:16 -- Several thousand questions are answered per day
- 10:23 -- It's all done through Slack webhooks using the Elixir-Slack library
- 11:28 -- Slack bots are easy to start using but it gets complicated pretty quickly
- 12:26 -- Unix timestamps vs Gregorian seconds
- 13:39 -- The Elixir forums and Slack channel are great resources to get Elixir help
- 15:13 -- Are you using the latest version of Phoenix? Not yet
- 17:50 -- Phoenix is nice because it gently guides you into creating well structured apps
- 19:19 -- The stripity_stripe library is used to handle Stripe payments
- 19:52 -- The awesome-elixir repo on GitHub has a great list of libraries
- 21:25 -- It was hard to find a good well maintained authentication library for Elixir
- 22:50 -- The Elixir-Slack library was really helpful for Adam's project
- 23:59 -- Everything is stored in a PostgreSQL database
- 25:02 -- Gigalixir is used for hosting and it's well optimized for running Elixir in production
- 25:56 -- Gigalixir has really good support
- 26:25 -- Gigalixir's team is mostly composed of ex-Google / ex-Stripe employees
- 27:50 -- Gigalixir also has zero down time deploys for most deploys
- 28:42 -- nginx isn't being used and Gigalixir handles TLS too
- 30:20 -- The push for HTTPS everywhere and Let's Encrypt being easy but not that easy
- 31:15 -- Accessing your logs on Gigalixir by tailing your logs on the command line
- 32:31 -- Adam pays about $50 a month for everything on Gigalixir
- 33:59 -- Metrics related to server health can be found in the Gigalixir dashboard
- 34:14 -- Surviving the front page of HackerNews with an Elixir app on a hobby instance
- 35:22 -- Depending on user feedback for error reporting
- 36:28 -- It's super nice to have a compiler warn you about flaws in your code
- 36:57 -- Gigalixir lets you git push your code to get it from your dev box into production 
- 38:04 -- Code is also pushed to GitHub mainly for backup purposes
- 38:23 -- Code is tested locally before being pushed but testing a Slack integration is hard
- 42:18 -- Putting an app on the Slack app marketplace requires human review
- 44:30 -- Managing secrets with Gigalixir is done through their CLI, similar to Heroku
- 45:03 -- Database backups happen daily but the interval on Gigalixir can be configured
- 47:26 -- Email alerts are sent out by Gigalixir if your app happens to go down
- 48:59 -- Best tips? Leverage the Elixir community if you get stuck
- 49:24 -- Enjoy a language that a bit of novelty to it since it's still relatively young
- 50:37 -- Getting help for basic things from the creator of Elixir on IRC
- 51:47 -- Constantly looking at older code to see how it could be refactored
- 52:57 -- Using the Credo library to help analyze your code base for best practices
- 55:07 -- Check out their [Slack app]({{ page.guest_website }}), follow Adam on Twitter @[{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and [GitHub](https://github.com/acconrad)

## Links

###### 📄 References

- <https://www.phoenixframework.org/blog/the-road-to-2-million-websocket-connections>
- <https://api.slack.com/messaging/webhooks>
- <https://adamconrad.dev/blog/verifying-request-signatures-in-elixir-phoenix/>
- <https://elixir-lang.slack.com/>
- <https://github.com/h4cc/awesome-elixir>
- <https://www.postgresql.org/>
- <https://twitter.com/josevalim>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/BlakeWilliams/Elixir-Slack>
- <https://github.com/code-corps/stripity_stripe>
- <https://github.com/rrrene/credo>
