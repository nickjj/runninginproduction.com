---
layout: "podcast-or-interview"

mp3_bytes: "110740608"
mp3_duration: "1:55:21"

guest: "Matt Oliver"
guest_avatar: "matt-oliver"
guest_website: "https://couchmate.com"
guest_twitter: "halfmatthalfcat"

category: "podcast"
tags:
  - "akka"
  - "scala"
  - "react-native"
  - "cloudflare"
  - "digitalocean"
  - "github-actions"
  - "grafana"
  - "kamon"
  - "kubernetes"
  - "lets-encrypt"
  - "mailgun"
  - "pingdom"
  - "postgres"
  - "prometheus"
  - "redis"
  - "sentry"
  - "slack"
  - "terraform"
  - "vercel"

title: "Couchmate Is a Social Chat Platform for Viewers of Live TV"
description:
  Matt Oliver goes over building a chat platform with Akka, Scala and React
  Native. It's hosted on Digitalcoean with Kubernetes.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a chat platform with Akka, Scala and React Native. It's hosted on DigitalOcean
with Kubernetes and has been running in production since 2013.

Matt talks about rewriting his app a few times, handling tens of thousands of
nightly TV shows, going all-in with Kubernetes, using Terraform, understanding
it'll take a while to learn things along the way and more.

## Topics Include

- 4:55 -- Going from PHP to Scala to Node and back to Scala for the back-end
- 15:09 -- Tens of thousands of channels are created every night
- 16:39 -- What exactly is Akka and the actor model
- 19:55 -- Websockets are being used quite heavily
- 23:04 -- A few Scala libraries that were useful for building this platform
- 27:31 -- There's a mobile front-end using React Native for Android and iOS
- 31:30 -- Storing and caching TV listings with Gracenote
- 34:53 -- Roughly ~25k lines of Scala and ~11k on the front-end in 2 repos
- 39:41 -- Motivation for using React Native instead of using native languages
- 45:55 -- How to deal with large show TVs with a massive audience
- 50:28 -- The app is basically 3 screens
- 54:34 -- Handling user uploaded gifs and link submissions
- 1:00:09 -- What it was like building out the React Native front-end
- 1:05:54 -- Reasons for picking DigitalOcean and using Kubernetes
- 1:14:44 -- Most of the infrastructure is managed by Terraform
- 1:16:57 -- What it was like to go from not using Kubernetes to going all-in with it
- 1:24:21 -- (3) 2 GB of memory / 2 CPU core servers are running the cluster
- 1:26:12 -- What it's like developing a new feature and deploying it to production
- 1:34:28 -- The database is backed up on a schedule and before schema changes
- 1:39:21 -- Prometheus, Grafana, Kamon and Sentry are used for metrics and monitoring
- 1:43:41 -- Pingdom is used for an external site monitor
- 1:44:31 -- It took about a month to get confident in using Kubernetes
- 1:49:29 -- Best tips? It's going to take a while, hang in there
- 1:53:06 -- Writing comments for your future self while learning
- 1:54:34 -- Matt is on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and most socials as @{{ page.guest_twitter }} and [@couchmatehq](https://twitter.com/couchmatehq)

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Electronic_program_guide>
- <https://www.gracenote.com/on-entertainment-tv-listings/>
- <https://en.wikipedia.org/wiki/Language_Integrated_Query>
- <https://tenor.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/redis/jedis>
- <https://github.com/lloydmeta/enumeratum>
- <https://scala-slick.org/>
- <https://material-ui.com/>
- <https://github.com/reduxjs/redux>
- <https://helm.sh/>
- <https://github.com/kubernetes-sigs/external-dns>
- <https://github.com/fastlane/fastlane>
