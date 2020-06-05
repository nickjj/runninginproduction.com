---
layout: "podcast-or-interview"

mp3_bytes: "39252096"
mp3_duration: "40:53"

guest: "Chase Granberry"
guest_avatar: "chase-granberry.jpg"
guest_website: "https://logflare.app/"
guest_twitter: "chasers"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "bigquery"
  - "cloudflare"
  - "docker"
  - "gcp"
  - "open-source"
  - "postgres"

title: "Logflare Is a Log Management and Event Analytics Platform"
description:
  Chase Granberry goes over handling billions of log events per month with
  Phoenixi and Elixir. It's all running on Google Cloud (GCP).
---

In this episode of Running in Production, {{ page.guest }} goes over running a
logging platform that deals with 7+ billion log events per month. The back-end
and front-end is powered by a Phoenix / Elixir application that's running on
Google Cloud (GCP).

6 pretty beefy servers power everything but for a long time it was all on 1
server. Also, Live View is being used for search results and a few counters on
the web dashboard. Phoenix Tracker is being used for a cluster-wide rate
limiter too. The app is open source on
[GitHub](https://github.com/Logflare/logflare).

## Show Notes

- 2:16 -- Over 7 billion log events are being handled per month
- 2:43 -- What are CloudFlare apps?
- 3:42 -- In the future native language libraries will have more support
- 4:11 -- Currently there's support in Elixir for the Logflare library
- 5:13 -- Elixir and Phoenix is powering the web front-end for Logflare
- 5:35 -- Motivation for choosing Elixir and Phoenix
- 8:35 -- Phoenix allowed Chase to get things up and running in a few months
- 9:18 -- The web UI is using server side templates with a touch of Live View
- 11:04 -- Live View is mostly used for counters but it powers a search page too
- 12:24 -- A monolithic / mono-repo Phoenix app ingests all of the logs
- 12:49 -- Phoenix contexts are being used to break up the domain a bit
- 13:47 -- Docker isn't being used in dev, but it is in production on Google Cloud
- 14:34 -- Google's managed instance groups are being used to host the app
- 15:28 -- These managed instance groups help with doing rolling deploys
- 16:24 -- Motivation for choosing GCP came down to free hosting credits mostly
- 16:57 -- (6) 16 CPU core / 32 GB of memory instances power the Phoenix app
- 17:49 -- Each instance has an identical copy of the Phoenix app
- 18:23 -- Google's container-optimized OS is being used
- 19:10 -- PostgreSQL stores a bit of user data, but the logs are in BigQuery
- 19:38 -- BigQuery does not work with Ecto, but it's a fairly simple set up
- 19:58 -- For development, Chase connects to a dev BigQuery database on GCP
- 20:27 -- Cowboy is in front of Google's load balancer (nginx isn't being used)
- 20:51 -- SSL certificates are issued and signed by CloudFlare
- 21:35 -- A step by step walk through of how code goes from development to production
- 25:04 -- It takes 5 minutes for each server to get drained, but it's configurable
- 25:45 -- Having manual components of your deploy can be beneficial
- 26:26 -- Logflare is very stateful, so a 5 minute time-out is necessary
- 27:43 -- Chase uses his own tool and there are public charts to look at online
- 28:44 -- Scratching your own itch is a great way to build a useful service
- 28:58 -- Sign ups for free right now, but a billing system is coming soon
- 29:26 -- Getting $3,000, $17,000 and then $80,000 in GCP hosting credits for free
- 30:51 -- A majority of the cost is processing the log events on the web servers
- 31:55 -- Server costs could probably be cut down but Chase wanted to learn / experiment
- 32:49 -- Initially everything was on a single 32 CPU core server (3 billion reqs / month)
- 33:54 -- Rate limiting is cluster-wide and uses Phoenix Tracker
- 36:34 -- Using Redis vs rolling your own Elixir based set up for cluster state
- 38:29 -- Best tips? Stop over-thinking things because just starting helps a lot
- 39:36 -- Chase is on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and Logflare is open source on [GitHub](https://github.com/Logflare/logflare)

## Links

###### 📄 References

- <https://cloud.google.com/>
- <https://cloud.google.com/compute/docs/instance-groups/rolling-out-updates-to-managed-instance-groups>
- <https://martinfowler.com/bliki/CanaryRelease.html>
- <https://www.cloudflare.com/apps/developer/offers/google>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/ninenines/cowboy>
