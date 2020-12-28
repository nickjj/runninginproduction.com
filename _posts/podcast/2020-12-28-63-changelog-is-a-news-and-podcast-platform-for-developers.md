---
layout: "podcast-or-interview"

mp3_bytes: "89412864"
mp3_duration: "1:33:08"

guest: "Jerod Santo"
guest_avatar: "jerod-santo"
guest_website: "https://changelog.com/"
guest_twitter: "jerodsanto"
guest_2: "Gerhard Lazu"
guest_2_avatar: "gerhard-lazu"
guest_2_website: "https://changelog.com/"
guest_2_twitter: "gerhardlazu"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "docker"
  - "fastly"
  - "grafana"
  - "kubernetes"
  - "lets-encrypt"
  - "linode"
  - "nginx"
  - "pingdom"
  - "postgres"
  - "prometheus"
  - "s3"
  - "turbolinks"
  - "webpack"

title: "Changelog.com Is a News and Podcast Platform for Developers"
description:
  Jerod Santo & Gerhard Lazu go over building a news and podcast platform
  with Phoenix / Elixir. It's hosted on Linode's Kubernetes Engine.
---

In this episode of Running in Production, {{ page.guest }} and {{ page.guest_2
}} go over their news and podcast platform which is using Phoenix and Elixir.
It was rewritten in Phoenix back in 2015 and it runs on Linode's Kubernetes
Engine across a 3 node cluster.

Jerod and Gerhard talk about building a context-less Phoenix app, using
Turbolinks, caching, transitioning to using Kubernetes, automating as much as
possible while focusing on patterns that work for small teams and so much more.

## Topics Include

- 6:06 -- Motivation for choosing Phoenix and Elixir
- 10:34 -- The MVP didn't require too many changes to make it deployable
- 13:43 -- It's an [open source](https://github.com/thechangelog/changelog.com) monolithic app in 1 git repo and it doesn't use contexts
- 17:35 -- Gerhard was happy to see it was a monolithic app when it came to deploying it
- 21:09 -- A few useful libraries that help power the podcast CMS
- 24:09 -- Using embedded schemas for handling email subscription settings
- 25:19 -- Using Docker but Jerod hasn't gone all-in with it in development
- 33:47 -- It's mostly server side templates with sprinkles of JavaScript and Turbolinks
- 37:45 -- Choosing not to use Live View because Turbolinks is working at the moment
- 41:51 -- nginx, Linode's load balancer, Fastly as a CDN and handling metrics
- 47:42 -- Motivation for choosing Linode and using their Kubernetes Engine
- 54:42 -- Serving about 200 requests per minute and how caching is done with ETS
- 59:54 -- Creating very thin wrapper modules for certain libraries when it makes sense
- 1:02:36 -- The deployment process from development to production
- 1:08:29 -- What was it like to transition to using Kubernetes?
- 1:11:45 -- Polling for new versions of the app instead of giving CI the keys to the kingdom
- 1:13:38 -- Dealing with inserting secrets into the app through Kubernetes
- 1:17:48 -- The embodiment of dev and ops working very well together
- 1:19:01 -- Database backups, making small changes and health checks
- 1:27:38 -- Best tips (Jerod)? Team up with people who fill in your knowledge gaps
- 1:30:16 -- Best tips (Gerhard)? Be honest about what you like and enjoy doing
- 1:31:59 -- Gerhard has a [personal site](https://gerhard.io/), Jerod is [on Twitter](https://twitter.com/{{ page.guest_twitter }}) &amp; check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://twitter.com/adamstac>
- <https://github.com/edeliver/edeliver>
- <https://www.youtube.com/watch?v=0hd0FPd47II> (3h+ podcast on Changelog's history)
- <https://github.com/thechangelog/changelog.com/blob/master/mix.exs>
- <https://skaffold.dev/>
- <https://changelog.com/posts/why-we-chose-turbolinks>
- <https://changelog.com/posts/the-new-changelog-setup-for-2020>
- <https://www.lastpass.com/>
- <https://www.youtube.com/watch?v=sTt-jdDEWAw> (epic Predator handshake scene)
- <https://github.com/derailed/k9s>
- <https://github.com/thechangelog/changelog.com>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used
- <https://github.com/quantum-elixir/quantum-core>
- <https://github.com/stavro/arc>
- <https://github.com/thoughtbot/bamboo>
- <https://github.com/thoughtbot/ex_machina>
- <https://github.com/asaaki/cmark.ex>
- <https://github.com/drewolson/scrivener>
- <https://github.com/sasa1977/con_cache>
