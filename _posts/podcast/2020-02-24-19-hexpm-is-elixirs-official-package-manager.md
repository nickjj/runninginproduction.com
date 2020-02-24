---
layout: "podcast-or-interview"

mp3_bytes: "54077184"
mp3_duration: "56:19"

guest: "Eric Meadows-Jönsson"
guest_avatar: "eric-meadows-jonsson"
guest_website: "https://hex.pm/"
guest_twitter: "emjii"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "postgres"
  - "docker"
  - "kubernetes"
  - "gcp"
  - "aws"
  - "ci"
  - "cdn"
  - "payments"
  - "open-source"

title: "Hex.pm Is Elixir's Official Package Manager"
description:
  Eric Meadows-Jönsson talks us through building and deploying the Hex.pm site
  and surrounding services. It's hosted on GCP with Kubernetes.
---

In this episode of Running in Production, {{ page.guest }} goes over building
[the Hex.pm site]({{ page.guest_website }}) and surrounding services which was
built using Phoenix and Elixir. It's hosted on Google Cloud using their managed
Kubernetes service (GKE). It's been up and running since early 2014.

Eric talks all about creating a highly available package manager for Elixir,
the value in breaking out independent services, working with Google's managed
Kubernetes service, keeping administrative tasks simple, his struggles with
Stripe's SCA and more.

## Show Notes

- 1:02 -- The hex.pm site is a community effort with a few core contributors
- 1:52 -- 5 reqs / second for the main site and 140 reqs / second for the repo side of things
- 2:58 -- A majority of the traffic is pulling down packages with mix
- 3:17 -- Eric started working on the Hex client in late 2013 before Elixir 1.0
- 3:51 -- Hex launched with both the CLI and web front-end at the same time
- 4:22 -- Motivation for using Elixir to build an Elixir package manager
- 4:43 -- For the site, Plug was used initially because Phoenix wasn't out yet at the time
- 5:00 -- They try to keep the site updated to use the latest stable release of Phoenix & Ecto
- 5:16 -- Why Eric decided to [open source the platform](https://github.com/hexpm/hexpm) on GitHub
- 5:38 -- The Hex site's source code helped Nick learn a bit more about Elixir and Phoenix
- 6:01 -- Trying to use the latest best practices so the site is a good working example
- 6:45 -- The site is mostly a monolith but there are a few dedicated services 
- 7:17 -- <https://diff.hex.pm/> is one of the separate services along with billing and the docs
- 7:52 -- Why did they decide to make the billing service closed source?
- 9:45 -- There's currently 10,000+ packages on Hex with 60k+ different versions combined
- 10:08 -- Less than 10 GB of data makes up everything that's stored on S3 for all packages
- 11:30 -- The benefits of splitting up a few services outweigh the pain points
- 12:35 -- Johanna Larsson ([@joladev](https://twitter.com/joladev)) initially created the Hex diff service
- 13:16 -- The diff service's search feature is powered by Phoenix Live View
- 13:47 -- The main Hex website is mostly server rendered templates with a touch of JavaScript
- 14:35 -- Breaking out smaller services lets you experiment with new technologies
- 15:08 -- There is no admin dashboard web UI, it's all powered by version controlled scripts
- 17:01 -- PostgreSQL is the primary database
- 17:41 -- Docker is used in production with the managed Kubernetes service on GCP
- 18:06 -- There's no need to cache anything because Phoenix is fast out of the box 
- 19:15 -- They rolled their own rate limiter with very little Elixir code
- 20:22 -- Docker isn't being used in development since their stack is so simple
- 21:00 -- What made them choose Google Cloud (GCP)? Mainly Google's managed Kubernetes
- 22:28 -- (3) servers power everything, each having 2 CPU cores and 4 GB of memory
- 22:54 -- When you install public packages from the CLI, you don't hit the web API
- 26:12 -- For private packages you do hit the web API but that's going to change soon
- 28:39 -- Fastly is their CDN and it lets you upload Varnish config files
- 29:23 -- Fastly gives you unlimited and instant cache purges, most other CDNs limit you
- 30:11 -- Amazon SES is used for transactional emails
- 30:59 -- Rollback is used for error reporting and Stripe is being used for billing
- 31:05 -- For logging and metrics, that's all handled on Google Cloud and it's decent 
- 33:05 -- Elixir Telemetry isn't really being used now, but they might use it later
- 33:57 -- Stripe SCA support is being worked on  but it wasn't fun to re-write everything for it
- 38:10 -- What it's like to push code from development to production
- 40:25 -- Dealing with database migrations isn't easy
- 43:16 -- Putting your site into a read-only or maintenance mode during a migration
- 45:03 -- Creating an Elixir library to toggle your app into read-only mode, make it so!
- 46:10 -- DB backups are done through GCP, and they also use Tarsnap for S3 backups
- 47:33 -- Health checks are in place with Google to get notified if a service goes down
- 49:54 -- Best tips? Don't start out with a fancy infrastructure, just get your app up and running
- 51:45 -- Mistakes? It's hard to test the Hex client (the CLI) and they are looking to improve that
- 53:22 -- For testing, they mock out S3 with the local file system
- 55:14 -- Hex.pm is open source [on GitHub](https://github.com/hexpm) and you can find Eric on Twitter [@{{ page.guest_twitter}}](https://twitter.com/{{ page.guest_twitter }})

## Links

- <https://github.com/phoenixframework/phoenix>
- <https://elixir-lang.org/>
- <https://hexdocs.pm/ecto/Ecto.html>
- <https://hexdocs.pm/plug/readme.html>
- <https://hexdocs.pm/phoenix/contexts.html>
- <https://aws.amazon.com/s3/>
- <https://diff.hex.pm/>
- <https://github.com/phoenixframework/phoenix_live_view>
- <https://www.postgresql.org/>
- <https://docker.com/>
- <https://kubernetes.io/>
- <https://cloud.google.com/>
- <https://en.wikipedia.org/wiki/Erlang_distribution>
- <https://cloud.google.com/kubernetes-engine>
- <https://www.fastly.com/>
- <https://varnish-cache.org/intro/index.html#intro>
- <https://aws.amazon.com/ses/>
- <https://rollbar.com/>
- <https://stripe.com/>
- <https://stripe.com/docs/billing/migration/strong-customer-authentication>
- <https://www.terraform.io/>
- <https://www.tarsnap.com/>
- <https://cloud.google.com/stackdriver>

## Shameless Plugs

- Nick: Want to learn Docker? Join thousands of others in my
  [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
  video course
