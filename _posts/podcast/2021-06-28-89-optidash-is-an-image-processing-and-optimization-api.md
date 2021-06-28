---
layout: "podcast-or-interview"

mp3_bytes: "64078848"
mp3_duration: "1:06:44"

guest: "Przemek Matylla"
guest_avatar: "przemek-matylla"
guest_website: "https://optidash.ai"

category: "podcast"
tags:
  - "express"
  - "node"
  - "angularjs"
  - "c"
  - "python"
  - "swift"
  - "jekyll"
  - "aws"
  - "cloudflare"
  - "docker"
  - "elasticsearch"
  - "firebase"
  - "glusterfs"
  - "influxdb"
  - "mailgun"
  - "mongodb"
  - "nginx"
  - "puppet"
  - "redis"
  - "server-density"

title: "Optidash Is an Image Processing and Optimization API"
description:
  Przemek Matylla talks about building an image processing API with C, Python
  and Node. It's hosted on bare metal servers.
---

In this episode of Running in Production, {{ page.guest }} talks about building
an image processing and optimization API with mostly C, Python and Node. It's
hosted on bare metal servers in a data center and has been running in
production since 2019.

Przemek talks about handling 20-50 million+ daily API calls, how they're using
C, image detection techniques, using Lua scripting with nginx, building their
own servers in a data center, using boring technology and much more.

## Topics Include

- 3:17 -- An average day has about 20 million API calls, busy days have 50m+
- 4:11 -- Breaking down where C, Node and other languages are being used
- 6:46 -- What happens when you upload an image to their API
- 9:06 -- Really figuring out the file type of something that's been uploaded
- 11:54 -- Dealing with edge cases as they come up but preparing a bit ahead of time
- 14:45 -- Switching from Core ML on Apple hardware to Tensorflow on AMD hardware
- 19:43 -- There's no framework sitting on top of the Node API server
- 22:28 -- The customer facing web dashboard is using Express, the marketing site is Jekyll
- 24:41 -- They're mostly B2B so feature requests end up being 1 on 1 calls
- 25:23 -- Handling payments with Stripe and using a Node / Angular app for it
- 28:04 -- Using Lua with nginx for rate limiting, also nginx is their load balancer
- 31:05 -- You can't go wrong with boring and predictable technology
- 31:47 -- MongoDB, Redis and Elasticsearch are all running on 3 nodes each
- 32:18 -- Having nearly instant access to a ton of data helps figure things out
- 34:52 -- What it was like finding a freelance C developer
- 35:55 -- Sending webhooks out is controlled by a separate Node Bull driven app
- 38:41 -- Dealing with GDPR compliance and storing images on GlusterFS for 1 hour
- 40:50 -- Going with bare metal servers in their own data center over the cloud
- 44:51 -- The servers have 32-256GB of memory and a range of different CPUs
- 46:34 -- Having spare parts and dealing with hardware failures
- 49:15 -- About 50 servers run the latest Ubuntu LTS and are managed with Puppet
- 51:22 -- The deployment process for a number of different services
- 54:19 -- It takes ~30min to replace a drive and every service is tripled up
- 56:48 -- The database servers are replicated and there's alarms and alerts set up
- 58:56 -- Rate limiting was put in place for limiting API calls to customers
- 1:01:12 -- There's custom payment rates depending on each customer's requirements
- 1:03:06 -- Best tips? Over provision like crazy and monitoring lets you sleep at night
- 1:03:31 -- Do what works for you, don't copy another company because it works for them
- 1:05:48 -- Check out <{{ page.guest_website }}>, their [tech blog]({{ page.guest_website }}/blog) and [GitHub account](https://github.com/optidash-ai)

## Links

###### 📄 References

- <https://www.techpowerup.com/gpu-specs/firepro-d700.c2555>
- <https://www.amd.com/en/products/epyc>
- <https://first-colo.net/en/>
- <https://www.backblaze.com/blog/backblaze-hard-drive-stats-q1-2021/>
- <https://optirank.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://numpy.org/>
- <https://developer.apple.com/documentation/coreml>
- <https://www.tensorflow.org/>
- <https://github.com/OptimalBits/bull>
- <https://github.com/capistrano/capistrano>
- <https://www.influxdata.com/time-series-platform/telegraf/>
