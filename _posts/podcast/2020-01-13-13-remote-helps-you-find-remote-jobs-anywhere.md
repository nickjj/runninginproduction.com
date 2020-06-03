---
layout: "podcast-or-interview"

mp3_bytes: "66230784"
mp3_duration: "1:08:59"

guest: "Marcelo Lebre"
guest_avatar: "marcelo-lebre.jpg"
guest_website: "https://remote.com/"
guest_twitter: "marcelo_lebre"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "react"
  - "postgres"
  - "redis"
  - "elasticsearch"
  - "aws"
  - "cdn"
  - "payments"

title: "Remote.com Helps You Find Remote Jobs Anywhere"
description:
  Marcelo Lebre goes over rebuilding a remote job search platform using Phoenix
  and Elixir. A few EC2 instances handle 100k+ daily requests.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
remote job platform on [remote.com]({{ page.guest_website }}). They serve about
100k+ requests a day and it's all hosted on a small AWS ECS cluster. It's been
up and running since early 2019.

We covered a lot of ground, from using Elasticsearch to developing API based
applications to Elixir's ecosystem and everything in between. One takeaway is
to be mindful of over engineering your code base and try to focus on the things
that are important to your application.

## Show Notes

- 3:15 -- Taking over the old remote.com site and rebuilding it from scratch
- 4:03 -- Motivation for rewriting everything in Elixir and Phoenix
- 6:25 -- Phoenix quickly became a go-to tool for Marcelo
- 7:27 -- He first used it in another project to deal with 1000s of requests per minute
- 8:08 -- It was pretty easy to get the rest of his team on-board with Elixir
- 9:40 -- Writing a monolithic code base using single responsibility principles
- 11:47 -- The code base's lib/ folder has 500+ files and many thousands of lines of code
- 12:59 -- Phoenix contexts are being used but with an added level of SRPs
- 14:26 -- This will allow Marcelo to easily break up his code base later if needed
- 16:15 -- The value in writing about things after having a lot of real world experience
- 20:28 -- The Phoenix app is API based with a React front-end
- 21:36 -- NextJS is also being used to have server rendered pages
- 22:31 -- Letting developers pick and choose their dev style leads to increased productivity
- 23:36 -- The front-end team doesn't need to know about the Phoenix back-end
- 24:52 -- There's 3 different git repos (back-end, front-end and the new app)
- 25:13 -- The front-end devs can get going easily due to excellent documentation
- 27:19 -- Docker is being used in staging and production but not development
- 29:43 -- PostgreSQL, Redis and Elasticsearch are being used and it's hosted on AWS ECS
- 30:16 -- Not super happy with AWS ECS and he wants to switch to Kubernetes eventually
- 30:51 -- Gitlab is used for continuous integration and deployment
- 31:17 -- Reasons for going with Elasticsearch (full text search and caching)
- 35:59 -- Live View isn't being used but he's keeping an eye on it
- 37:40 -- The core of what's needed to make Live View amazing is there
- 38:48 -- Everyone would still be using IE 5 if no one tried things out in practice
- 40:53 -- The Elixir community is very helpful if you get stuck
- 41:09 -- Keeping the ops side under control by using AWS for the DB, cache and ES
- 42:27 -- After looking at Heroku, Google Cloud, Azure and others - AWS looked good
- 43:26 -- Serving 100k to a million requests per day for $4,000 a month before Phoenix
- 45:26 -- The moment Remote switched to Phoenix the bill dropped to $500 / a month
- 45:56 -- The entire staging environment runs with ~512 MB of memory
- 46:01 -- The production environment runs on 2-4 instances with 2 GB of memory each
- 46:36 -- Exq is being used to process jobs and it's running in its own service
- 47:35 -- 2 web servers and 1 worker is enough to serve things with a ~150ms response time
- 48:24 -- Redis is being used to cache a few things (nothing like Rails level caching)
- 49:16 -- Elixir / Phoenix are incredibly efficient with memory usage and releasing it
- 51:11 -- AppSignal's notifications help with giving a general peace of mind
- 52:28 -- Searching and applying to jobs is free but posting jobs require a payment
- 54:44 -- Payments are handled with Stripe using the stripity_stripe library
- 55:40 -- Walking through a code deploy from development to staging to production
- 57:04 -- The Docker images are being stored on Gitlab's registry service
- 57:23 -- Secret management is done with Gitlab's secret management tool
- 58:47 -- Elixir releases are created using Docker multi-stage builds
- 1:00:05 -- Having small Docker images helps a lot due to their deployment strategy
- 1:00:21 -- Everything is backed up and the cache can be recreated from the DB
- 1:02:05 -- Mail Gun is used for transactional emails and customer.io is used too
- 1:02:39 -- Sometimes you get used to a service or tool always existing
- 1:03:34 -- Best tips? Be careful about over engineering and keep your eyes on the prize
- 1:06:18 -- Mistakes? Not enough tests, too many tests, finding a perfect structure, etc.
- 1:06:53 -- Coming to acceptance that Elixir and Phoenix has a fairly new ecosystem
- 1:07:52 -- Check out the [remote.com blog](https://blog.remote.com/) or follow Marcelo on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})

## Links

- <https://github.com/phoenixframework/phoenix>
- <https://elixir-lang.org/>
- <https://www.erlang.org/>
- <https://elixir-lang.org/getting-started/mix-otp/dependencies-and-umbrella-projects.html>
- <https://hexdocs.pm/phoenix/contexts.html>
- <https://en.wikipedia.org/wiki/Single_responsibility_principle>
- <https://news.ycombinator.com/>
- <https://reactjs.org/>
- <https://nextjs.org/>
- <https://www.getpostman.com/>
- <https://docker.com>
- <https://www.postgresql.org/>
- <https://redis.io/>
- <https://www.elastic.co/>
- <https://aws.amazon.com/ecs/>
- <https://kubernetes.io/>
- <https://about.gitlab.com/>
- <https://github.com/phoenixframework/phoenix_live_view>
- <https://hexdocs.pm/phoenix/channels.html>
- <https://dockyard.com/blog/2018/12/12/phoenix-liveview-interactive-real-time-apps-no-need-to-write-javascript>
- <https://aws.amazon.com/rds/>
- <https://aws.amazon.com/elasticsearch-service/>
- <https://aws.amazon.com/elasticache/>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>
- <https://github.com/sorentwo/oban>
- <https://github.com/akira/exq>
- <https://appsignal.com/>
- <https://stripe.com/>
- <https://www.cloudflare.com/>
- <https://edgeguides.rubyonrails.org/caching_with_rails.html#russian-doll-caching>
- <https://github.com/code-corps/stripity_stripe>
- <https://docs.gitlab.com/ee/user/packages/container_registry/>
- <https://docs.gitlab.com/runner/>
- <https://elixir-lang.org/getting-started/mix-otp/config-and-releases.html>
- <https://docs.docker.com/develop/develop-images/multistage-build/>
- <https://www.mailgun.com/>
- <https://customer.io/>
