---
layout: "podcast-or-interview"

mp3_bytes: "70063872"
mp3_duration: "1:12:58"

guest: "Henry Popp"
guest_avatar: "henry-popp.jpg"
guest_website: "https://6dos.co/"
guest_twitter: "CodedgeLLC"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "vue"
  - "cloudflare"
  - "docker"
  - "elasticsearch"
  - "gcp"
  - "gitlab-ci"
  - "grafana"
  - "kubernetes"
  - "neo4j"
  - "postgres"
  - "prometheus"
  - "rabbitmq"
  - "sentry"
  - "stripe"
  - "timber"
  - "uptime-robot"
  - "webpack"

title: "6DOS Helps You Explore Your Personal Network"
description:
  Henry Popp goes over building a service with Phoenix and Elixir. It's
  deployed on GCP with a self managed Kubernetes cluster.
---

In this episode of Running in Production, {{ page.guest }} goes over building
[a platform to help explore your personal network]({{ page.guest_website }})
which was built using Phoenix and Elixir. It's hosted on Google Cloud using a
self managed Kubernetes cluster. It's been up and running since September 2019.

Henry went into great detail about the value of using a service oriented
architecture, DDD, event driven design and running a self managed Kubernetes
cluster. There's a lot of great insights in this episode around general code
design and scaling that apply to any web framework.

## Show Notes

- 2:11 -- 4 developers are actively working on the project
- 2:50 -- It's been running in production since September 2019
- 3:13 -- Motivation for using Phoenix and Elixir
- 4:26 -- Henry started using Elixir back in late 2014
- 5:48 -- Ditching Umbrella apps for dedicated services
- 7:35 -- 6DOS is built on 6 independent git repos with a service oriented architecture
- 8:20 -- A break down of what those 6 repos are and what they do
- 10:37 -- Each service has its own independent database (Postgres, Neo4j, Elasticsearch)
- 11:21 -- Neo4j is a graph database which is a great fit for their main data model
- 12:55 -- How is Elixir support for Neo4j?
- 13:46 -- Each service talks to each other through RabbitMQ events / notifications
- 15:43 -- Walking through the request / response cycle when a visitor hits the site
- 17:04 -- How did you arrive at this service oriented architecture?
- 18:33 -- It's easy to get Domain-driven Design (DDD) wrong initially
- 19:42 -- Are Phoenix contexts being used? Nope
- 20:20 -- Monoliths vs micro-services vs something in between and industry trends
- 20:56 -- "Instantaneous complexity"
- 21:39 -- Using an app skeleton project to help spin up new services quickly
- 23:23 -- Using VueJS on the front-end with Webpack, but not through Phoenix
- 24:43 -- Currently 6DOS doesn't need websockets but that could change later
- 26:47 -- Quite a lot of work happens in the background
- 27:37 -- RabbitMQ handles queueing up all of the jobs
- 29:10 -- Docker is being used in production, but not in development (yet)
- 29:38 -- The work flow for starting everything up locally in development
- 30:52 -- Everything is hosted on a self managed Kubernetes cluster on GCP
- 31:19 -- (3) 2 core master nodes, (3) 2 core worker nodes and extra servers for the databases
- 32:24 -- The self managed Kubernetes cluster was terrifying to set up initially
- 34:00 -- Kubernetes is not a magic button you press to scale your application
- 35:15 -- Auto-recovering from a `CrashLoopBackOff` error with Kubernetes
- 37:45 -- Those 2 CPU core servers have 8 GB of RAM but the app isn't using all of that
- 38:47 -- Handling an interesting auto-scaling problem with Kubernetes
- 40:20 -- Performing rolling restarts so there's no down time for each deploy
- 40:41 -- Dealing with restarting containers while an important action is happening
- 43:23 -- Walking through the deploy process from development to production
- 43:34 -- It starts with a self hosted Gitlab instance with automated CI
- 44:15 -- On the other side, Keel takes over to automate deploying any services
- 45:12 -- Helm is being used for a few things, but not everything
- 46:17 -- Humans needing to accept the release happens within Keel's UI
- 47:51 -- Secrets are stored directly in the self hosted config repo with strict access rights
- 49:09 -- Balancing your time between low level infrastructure vs app features
- 49:58 -- Handling SSL certificates on the cluster with cert-manager
- 51:06 -- Everything is behind a Cloudflare proxy too
- 51:20 -- Dealing with database migrations when you have automated deployments
- 52:40 -- Migrations get run as part of the app boot up process
- 54:24 -- Design your software like a space ship
- 55:16 -- Diagnosing errors with custom tasks and 3rd party tools
- 56:23 -- No one can agree on how to format API JSON errors
- 57:32 -- Elixir best practices are still being discovered, the future is bright
- 58:19 -- An example of one of Henry's open source Elixir tools (Pigeon) taking off
- 59:14 -- All of the databases get backed up hourly
- 1:00:26 -- Kubernetes really needs to be configured
- 1:01:16 -- Rate limiting is currently being added to all of the services
- 1:03:07 -- What about alerts if something goes down? It's a digital notification bomb
- 1:03:36 -- Using UptimeRobot as a second sanity check to make sure things are up
- 1:04:12 -- Hung over at 6am out in the middle of the woods and your server goes down
- 1:04:55 -- Using an external tool like UptimeRobot is worth it
- 1:06:16 -- Timber.io is being used for logging but that will change soon
- 1:07:00 -- Kubernetes' Stern package helps with tailing logs across pods
- 1:07:44 -- Henry isn't a fan of Kubernetes' web UI tools to manage the cluster
- 1:07:54 -- Weave Scope was interesting but it used too much resources to run it
- 1:08:41 -- Best tips? Don't be afraid to break your code up into multiple repos
- 1:09:45 -- If you're not at that point yet, at least look into using contexts and DDD
- 1:10:24 -- Developers as a whole are getting better over time
- 1:11:56 -- [Codedge](https://www.codedge.io/) is Henry's consulting company and they are on [GitHub](https://github.com/codedge-llc) / [Twitter](https://twitter.com/{{ page.guest_twitter }}) too

## Links

- <https://en.wikipedia.org/wiki/Six_degrees_of_separation>
- <https://neo4j.com/developer/cypher-basics-i/>
- <https://en.wikipedia.org/wiki/Directed_acyclic_graph>
- <https://kubernetes.io/docs/concepts/workloads/pods/pod/>
- <https://github.com/keel-hq/keel>
- <https://github.com/jetstack/cert-manager>
- <https://github.com/bitwalker/alpine-elixir>
- <https://github.com/wercker/stern>
- <https://www.weave.works/oss/scope/>

## Libraries Used

- <https://github.com/florinpatrascu/bolt_sips>
- <https://github.com/bitwalker/distillery>
- <https://github.com/codedge-llc/pigeon>
