---
layout: "podcast-or-interview"

mp3_bytes: "44426112"
mp3_duration: "46:16"

guest: "Sascha Wolf"
guest_avatar: "sascha-wolf"
guest_website: "https://www.betterdoc.org/"
guest_twitter: "wolf4earth"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "aws"
  - "circle-ci"
  - "docker"
  - "eks"
  - "elasticache"
  - "elasticsearch"
  - "heroku"
  - "kafka"
  - "kubernetes"
  - "lambda"
  - "redis"
  - "sentry"
  - "serverless"
  - "slack"
  - "terraform"

title: "Stacker Is an Internal Tool to Stitch Together Microservices Responses"
description:
  Sascha Wolf goes over building an internal tool with Phoenix and Elixir. It's
  hosted on AWS in a Kubernetes cluster through EKS.
---

In this episode of Running in Production, {{ page.guest }} walks us through an
internal tool he built to help deal with microservices. It's written in
Phoenix and Elixir and is hosted within a Kubernetes cluster on AWS using EKS.
It's been running in production since mid 2019.

Sascha talks about rewriting the prototype from Java to Elixir, taking
advantage of Phoenix Channels, creating event driven systems, moving from
Heroku to AWS and really making the most of OTP features such as using stateful
processes.

## Topics Include

- 4:26 -- Motivation to rewrite the prototype from Java to Phoenix and Elixir
- 6:45 -- Live View likely would have been used if it were around when they started
- 9:17 -- 30+ microservices in 1 git repo and deployment isn't really a pain
- 12:46 -- This Stacker service is pretty big with about 90 Elixir modules
- 18:06 -- On the front-end it's just a little bit of vanilla Javascript
- 21:44 -- Useful libraries in their mix.exs file
- 23:59 -- Most of the other services are written in Ruby (for now)
- 25:25 -- Running on Heroku, but moving to AWS with Docker and Kubernetes with EKS
- 28:32 -- Terraform is used to manage their infrastructure as code with Circle CI
- 32:09 -- Load balancers, AWS API Gateway and using Lambda for backups
- 34:09 -- Sentry for error reporting and an ELK stack for viewing logs
- 34:55 -- Deploying code from development to running live on the Kubernetes cluster
- 40:36 -- Backups are handled by Amazon's managed services
- 42:59 -- Best tips? Don't be afraid to jump into OTP and leverage process state
- 45:31 -- Sascha is [on Twitter](https://twitter.com/{{ page.guest_twitter }}), he [has a personal site](https://saschawolf.me/) and [Better Doc is hiring](https://stackoverflow.com/jobs/474740/full-stack-developer-at-health-startup-elixir-betterdoc)

## Links

###### 📄 References

- <https://github.com/phoenixframework/phoenix_live_view>
- <https://aws.amazon.com/elasticsearch-service/the-elk-stack>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/bitwalker/distillery>
- <https://github.com/rrrene/credo>
- <https://github.com/edgurgel/httpoison>
