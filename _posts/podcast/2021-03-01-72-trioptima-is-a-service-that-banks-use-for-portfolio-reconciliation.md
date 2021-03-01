---
layout: "podcast-or-interview"

mp3_bytes: "78196736"
mp3_duration: "1:21:27"

guest: "Anders Hovmöller"
guest_avatar: "anders-hovmoller"
guest_website: "https://www.cmegroup.com/services/trioptima.html"
guest_twitter: "andershovmoller"

category: "podcast"
tags:
  - "django"
  - "python"
  - "elm"
  - "react"
  - "cassandra"
  - "centos"
  - "mysql"
  - "nginx"
  - "pingdom"
  - "puppet"
  - "sentry"
  - "vertica"
  - "webpack"

title: "TriOptima Is a Service That Banks Use for Portfolio Reconciliation"
description:
  Anders Hovmöller goes over building a reconciliation service with Django.
  It's hosted on bare metal servers in multiple data centers.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
CME Group owned bank portfolio reconciliation service with Django and Python.
It's hosted on 2 redundant data centers and has been up and running since 2005.

Anders talks about working with 13 other developers to build and maintain this
15+ year old project. It uses a bunch of different databases, handles tons of
batched writes and Anders goes over why the cloud isn't quite the best fit for
this type of app and more.

## Topics Include

- 6:01 -- Motivation to use Django and Python
- 9:07 -- How the software works when discrepancies are found
- 11:43 -- What it's been like to develop and keep a 10+ year old Django app updated
- 16:17 -- It's a 300k+ LOC monolithic Django app that's broken up by Django apps
- 22:23 -- A completely custom admin was built for internal teams
- 24:58 -- Useful Python / Django libraries that helped build this app
- 27:53 -- It's mostly using Django templates with a bit of Elm on the front-end
- 38:52 -- MySQL, Cassandra, Vertica, Elasticsearch and Redis are being used
- 42:01 -- Using the cloud was / is pretty much out of the question
- 45:51 -- gunicorn is the web server and nginx sits in front of that
- 48:04 -- Everything is hosted on 2 redundant data centers and is tested regularly
- 52:26 -- Handling errors in house with the self hosted Sentry and performance monitoring
- 59:28 -- (8) 16+ CPU core machines with loads of RAM run the batch jobs
- 1:02:05 -- A dedicated load balancer sits in front of nginx to load balance 4 app servers
- 1:04:56 -- CentOS is running on the servers and the ops team is separate from dev for now
- 1:06:46 -- What it's like to develop a feature and deploy it to production
- 1:14:27 -- Penetration tests happen on a regular basis to protect against bad actors
- 1:19:34 -- Best tips? Keep a close eye on the big picture and long term goals
- 1:20:43 -- Anders is [on GitHub](https://github.com/boxed), he also [has a blog](https://kodare.net) and check out <http://iommi.rocks/>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Dark_fibre>
- <https://github.com/benfred/py-spy>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://docs.iommi.rocks/en/latest/>
- <https://gunicorn.org/>
