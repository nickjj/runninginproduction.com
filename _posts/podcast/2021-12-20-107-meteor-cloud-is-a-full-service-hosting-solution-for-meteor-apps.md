---
layout: "podcast-or-interview"

mp3_bytes: "98981760"
mp3_duration: "1:43:06"

guest: "Filipe Névola"
guest_avatar: "filipe-nevola"
guest_website: "https://www.meteor.com/cloud"
guest_twitter: "filipenevola"

category: "podcast"
tags:
  - "meteor"
  - "node"
  - "golang"
  - "react"
  - "aws"
  - "datadog"
  - "docker"
  - "dynamodb"
  - "ecs"
  - "elasticache"
  - "graphql"
  - "lets-encrypt"
  - "loggly"
  - "memcached"
  - "mongodb"
  - "pagerduty"
  - "postmark"
  - "recurly"
  - "scalegrid"
  - "sendgrid"
  - "statuscake"
  - "terraform"
  - "websockets"

title: "Meteor Cloud Is a Full Service Hosting Solution for Meteor Apps"

description:
  Filipe Névola goes over building a Meteor hosting platform using Meteor, Node
  and Go. It's hosted on AWS and has been up since 2015.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
hosting platform for Meteor apps. It's hosted on AWS with ECS and has been
running in production since 2015.

Filipe talks about building critical services with Go, using Meteor to build
front-end web dashboards, the importance of monitoring, using Recurly for
subscription payments, multi-region AWS hosting and overall providing a highly
available platform for thousands of clients.

## Topics Include

- 1:45 -- High level overview of the hosting platform
- 7:01 -- Splitting up compute resources for enterprise clients
- 8:44 -- Motivation for choosing Go for a few of the back-end services
- 11:24 -- Feeding data to the web dashboard with MongoDB, ECS, a load balancer and Go
- 15:53 -- The Go proxy service was built using the standard library (no 3rd party libraries)
- 17:46 -- Differences between the free and paid plans
- 22:49 -- Displaying a custom page if your Meteor app happens to be down
- 26:28 -- Going over a few services, starting with the Docker image builder
- 31:18 -- The Go services are in a mono repo but they can be individually deployed
- 33:36 -- The next service is the scheduler which is custom built
- 41:49 -- How the web dashboard gets updated from events on the back-end
- 47:08 -- The last service we'll cover is for registering SSL certificates with Let's Encrypt
- 50:21 -- Monitoring is very important and they're using Datadog, plus being on-call
- 54:26 -- Postmark and SendGrid are both used to send emails
- 56:23 -- Payments are handled through Recurly
- 1:00:28 -- Loggly is used for logging and a bit of analytics
- 1:04:08 -- Handling a lot of incoming notifications and making sense out of alerts
- 1:08:05 -- Choosing AWS for hosting everything and using ECS over EKS
- 1:11:20 -- It's hosted across multiple AWS regions (Virginia, Ireland and Sydney)
- 1:15:55 -- The open source side of Meteor is very very important
- 1:17:49 -- How Terraform is being used to manage their infrastructure
- 1:20:31 -- ScaleGrid is used to host their MongoDB instances
- 1:22:29 -- How clients store their secrets
- 1:24:15 -- How deployments are handled from development to production
- 1:32:34 -- All data is backed up on a regular basis with lots of redundancy
- 1:36:01 -- Handling big traffic spikes with little warning
- 1:38:38 -- Best tips? Monitor everything and avoid premature optimization
- 1:41:43 -- Check out Filipe [on Twitter](https://twitter.com/{{ page.guest_twitter }}), his [coding education platform](https://www.howtocreateanapp.dev/) and [YouTube channel](https://www.youtube.com/channel/UC8A0hHUaCBvuBs0eA5g_q3A)

## Links

###### 📄 References

- <https://guide.meteor.com/>
- <https://www.tinycapital.com/> (They acquired Meteor)

###### ⚙️ Tech Stack

{% include services-used.html %}
