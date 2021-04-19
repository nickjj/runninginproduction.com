---
layout: "podcast-or-interview"

mp3_bytes: "96849920"
mp3_duration: "1:40:53"

guest: "Ian Eyberg"
guest_avatar: "ian-eyberg"
guest_website: "https://nanovms.com/"
guest_twitter: "nanovms"

category: "podcast"
tags:
  - "golang"
  - "aws"
  - "circle-ci"
  - "gcp"
  - "mailgun"
  - "s3"
  - "stripe"
  - "updownio"
  - "webpack"

title: "NanoVMs Let You Run Your Apps Faster and Safer with Unikernels"
description:
  Ian Eyberg talks about Unikernels and how he built one with C. Their site is
  built with Golang and hosted on GCP / their own datacenter.
---

In this episode of Running in Production, {{ page.guest }} goes over creating a
Unikernel with C as well as host a few sites supporting his tool with Go. It's
hosted on Google Cloud and their own data center. Nanos has been available since
2020.

Ian talks about what a Unikernel is, their open source tools and how they
manage their own services. This episode has a healthy mix between background
knowledge on Unikernels and how they (as a company) set up their
infrastructure.

It's worth pointing out you can run your existing applications in a Unikernel
without having to change how it's written and they support running them on most
major hosting providers (AWS, GCP, Azure, DigitalOcean, your own hardware,
etc.).

## Topics Include

- 1:44 -- What is a Unikernel? How is it different than a traditional VM or container?
- 7:58 -- There's a [free and open source tool](https://ops.city/) and an optional SAAS offering
- 10:07 -- How it's possible to build a new deployable golden image in 2 minutes
- 12:12 -- Motivation to use Go for building the surrounding sites and services
- 16:51 -- Certain organizations are pushing decent traffic through their Unikernel driven apps
- 19:02 -- How you can run a multi-service app with Nanos (web + worker + db + cache, etc.)
- 22:59 -- ops.city and nanos.org are a single Go binary / 1 Unikernel driven app
- 25:37 -- The nanosvm.com site is a bit more involved and has Stripe integration
- 28:08 -- I never heard of the term Unikernel until today
- 30:20 -- nginx isn't sitting in front of the Go app and how Unikernels can be so fast
- 40:29 -- With a Unikernel approach you can easily move between hosting providers
- 44:23 -- SSL certs are handled directly by the Go app for their sites
- 49:56 -- nanos.org and ops.city use GCP and nanovms.com is on their own hardware
- 54:26 -- Why they went with their own data center for hosting and their server specs / costs
- 1:02:02 -- Terraform, Ansible and similar tools aren't being used to set up anything
- 1:04:21 -- What the deployment process looks like for their services
- 1:10:40 -- You can run all of this on a Raspberry Pi 4
- 1:13:15 -- What does the development process look like with a Unikernel driven app?
- 1:16:21 -- Dealing with secrets in production
- 1:17:55 -- Databases are backed up regularly and how logs are handled
- 1:23:52 -- Getting notified of errors and up-time reports from updown.io
- 1:25:52 -- Mailgun is used for sending out transactional emails
- 1:26:45 -- Best tips? Keep it simple (seriously)
- 1:30:05 -- Thoughts on the Plan9 operating system
- 1:34:06 -- You don't need to change how you write your apps to run them in a Unikernel
- 1:40:07 -- The code for Nanos is [open source on GitHub](https://github.com/nanovms/nanos)

## Links

###### 📄 References

- <https://ops.city/>
- <https://nanos.org/>
- <https://firecracker-microvm.github.io/>
- <https://deepdiscountservers.com/>
- <https://he.net/>
- <https://queue.acm.org/detail.cfm?id=2349257>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/gorilla/mux>
