---
layout: "podcast-or-interview"

mp3_bytes: "69455872"
mp3_duration: "1:12:20"

guest: "Tigran Nazaryan"
guest_avatar: "tigran-nazaryan"
guest_website: "https://10web.io/"

category: "podcast"
tags:
  - "laravel"
  - "php"
  - "python"
  - "node"
  - "angularjs"
  - "cloudflare"
  - "docker"
  - "gcp"
  - "lets-encrypt"
  - "mongodb"
  - "mysql"
  - "nginx"
  - "ovh"
  - "paypal"
  - "redis"
  - "sentry"
  - "slack"
  - "stripe"
  - "ubuntu"

title: "10Web Is an Automated WordPress Hosting Platform"
description:
  Tigran Nazaryan goes over building a WordPress hosting platform with Laravel,
  Python and Node. It's hosted on GCP and OVH.
---

In this episode of Running in Production, {{ page.guest }} covers building a
WordPress hosting platform with Laravel, Python and Node. It's hosted on GCP
for their clients' sites and OVH for their core services. It's been up and
running as a hosting platform since late 2020.

Tigran talks about working with a team of 34 engineers, using both MongoDB and
MySQL, creating a bunch of services with a very well thought out architecture
while keeping it simple enough for it to all run on a developer's laptop. He
covered a lot of ground.

## Topics Include

- 2:05 -- Thousands of customers have their site hosted there
- 3:16 -- A break down of their stack (there's a lot going on)
- 4:54 -- Motivation for choosing a mixture of programming languages and frameworks
- 7:26 -- All of the services are independent and live in their own git repo
- 9:39 -- The image optimizer service is written with Laravel
- 12:50 -- MongoDB is quite heavily used by a number of services
- 15:56 -- How to optimize CSS and JS bundles with many WordPress plugins
- 21:29 -- The hosting service is written in Python with MySQL for a DB (hosted on GCP)
- 24:08 -- It's mostly Linux containers being used but Docker is used in some spots
- 25:27 -- End customers don't need to worry about things like nginx and SSL certs
- 30:46 -- Other tech components that's in their stack
- 32:16 -- Payments are handled monthly or annually with Stripe and PayPal
- 33:38 -- Client sites are hosted on Google Cloud and their services are on OVH
- 37:49 -- Some of the servers are pretty beefy with 32GB of memory and 8+ CPU cores
- 40:12 -- Developers can run everything on their own laptops
- 44:43 -- The developers who build a service are responsible for deploying it
- 45:42 -- The process to set up a server is documented and automated when possible
- 49:02 -- Customers can access their hosted sites very quickly after signing up
- 51:29 -- The deployment process from development to production
- 57:11 -- Databases are backed up and core services are load balanced
- 59:20 -- Keeping track of errors, monitoring and alerting
- 1:04:01 -- Cloudflare is sitting in front of the core services
- 1:06:58 -- Best tips? Really focus on getting a good architecture designed early on
- 1:10:52 -- Check out <{{ page.guest_website }}>, Tigran's [LinkedIn](https://www.linkedin.com/in/tnazaryan/) and their [Engineer blog](https://10web.io/blog/)

## Links

###### 📄 References

- <https://developers.google.com/speed/pagespeed/insights/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/PyCQA/flake8>
- <https://github.com/psf/black>
- <https://github.com/PyCQA/bandit>
