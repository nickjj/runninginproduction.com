---
layout: "podcast-or-interview"

mp3_bytes: "67026944"
mp3_duration: "1:09:49"

guest: "Utsav Shah"
guest_avatar: "utsav-shah"
guest_website: "https://dropbox.com"
guest_twitter: "utsav_sha"

category: "podcast"
tags:
  - "pylons"
  - "python"
  - "golang"
  - "rust"
  - "react"
  - "cassandra"
  - "envoy"
  - "memcached"
  - "mysql"
  - "nginx"
  - "phabricator"
  - "ses"
  - "ubuntu"
  - "webpack"

title: "Dropbox Gives You Secure Access to All of Your Files"
description:
  Utsav Shah goes over building Dropbox with Pylons, Python, Rust and Go.
  It's mostly hosted on their own datacenters across 1000+ servers.
---

In this episode of Running in Production, {{ page.guest }} goes over building
Dropbox with Pylons, Python, Rust and Go. It's mostly hosted on their own
data centers across 1,000+ servers. It's been available since 2008. They have
700+ million users and handle 100k+ requests per second.

Utsav talks about working with hundreds of engineers on a multi-million line
Python based monolithic app, handling payments without Stripe, storing exabytes
of files, using Rust in the desktop client, having remote dev boxes, leveraging
open source tools and tons more.

## Topics Include

- 1:32 -- A couple of hundred of developers committing to a monolithic app
- 2:30 -- Motivation for choosing Pylons and Python
- 4:04 -- Their service architecture can be described as a solar system
- 6:03 -- Building their own NoSQL database called Edgestore before MongoDB existed
- 8:41 -- Pylons is a micro-framework for Python
- 10:29 -- Developing a custom payment handling system before Stripe existed
- 13:43 -- How Dropbox stores your files on disk and who can access those files
- 17:32 -- Back in 2014 Dropbox moved away from S3 to their own infrastructure
- 18:50 -- Dealing with exabytes of storage
- 20:44 -- A "multi mono repo" set up with millions of lines of Python
- 21:57 -- The desktop client is a combination of Python and Rust
- 23:34 -- Updating the desktop client code base from Python 2 to Python 3
- 26:09 -- Pytest is being used for tests and Black for code formatting
- 29:04 -- A developer can spin up their own Dropbox stack on a hosted dev server
- 32:34 -- The web UI is mostly server rendered templates and a mix of React
- 36:46 -- There's a lot going on with MySQL, plus memcached and nginx / Envoy
- 39:06 -- Using open source libraries created by Facebook and YouTube
- 41:39 -- The open source version of nginx is being used a bunch
- 43:33 -- Most things are hosted on their own data centers running Ubuntu
- 45:32 -- There's dedicated teams that focus on the infrastructure
- 46:59 -- How code gets from a developer's dev environment to passing in CI
- 53:46 -- Once everything passes, it's rolled out internally and then incrementally to users
- 55:13 -- Feature flags are being used with a home grown solution
- 56:06 -- Dealing with secrets using something they've developed in house
- 58:01 -- Sometimes you end up building out a lot more than your core product
- 59:03 -- Your files are very safely and securely backed up
- 1:01:16 -- Monitoring, alerting, logging and error handling
- 1:04:09 -- Rate limiting is handled at the app level along with memcached
- 1:05:13 -- Best tips? Monoliths aren't bad if you invest in them
- 1:06:30 -- Think deeply about what you're developing and focus on the architecture
- 1:08:55 -- [Utsav](https://twitter.com/{{ page.guest_twitter }}) has a podcast at <https://www.softwareatscale.dev>, check it out!

## Links

###### 📄 References

- <https://dropbox.tech/infrastructure/atlas--our-journey-from-a-python-monolith-to-a-managed-platform>
- <https://dropbox.tech/application/speeding-up-a-git-monorepo-at-dropbox-with--200-lines-of-code>
- <https://dropbox.tech/infrastructure/reintroducing-edgestore>
- <https://www.wired.com/2016/03/epic-story-dropboxs-exodus-amazon-cloud-empire/>
- <https://www.softwareatscale.dev/p/software-at-scale-001-alexey-ivanov> (podcast episode)
- <https://dropbox.tech/infrastructure/magic-pocket-infrastructure> (exabytes of storage)
- <https://dropbox.tech/infrastructure/continuous-integration-and-deployment-with-bazel>
- <https://dropbox.tech/infrastructure/how-we-migrated-dropbox-from-nginx-to-envoy>
- <https://dropbox.tech/infrastructure/athena-our-automated-build-health-management-system>
- <https://dropbox.tech/infrastructure/monitoring-server-applications-with-vortex>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://pythonpaste.readthedocs.io/en/latest/>
- <https://github.com/python/mypy>
- <https://github.com/pytest-dev/pytest>
- <https://github.com/psf/black>
- <https://github.com/bazelbuild/bazel>
