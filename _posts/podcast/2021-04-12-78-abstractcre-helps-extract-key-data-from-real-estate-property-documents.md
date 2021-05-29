---
layout: "podcast-or-interview"

mp3_bytes: "96307200"
mp3_duration: "1:40:19"

guest: "Cole Simmons"
guest_avatar: "cole-simmons"
guest_website: "https://abstractcre.com"
guest_twitter: "colersimmons"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "react"
  - "app-engine"
  - "docker"
  - "elasticsearch"
  - "firebase"
  - "gcp"
  - "gke"
  - "intercom"
  - "jenkins"
  - "kubernetes"
  - "log-rocket"
  - "mailgun"
  - "postgres"
  - "webflow"

title: "AbstractCRE Helps Extract Key Data from Real Estate Property Documents"
description:
  Cole Simmons goes over building a service for commercial real estate
  professionals using Flask and Python. It's hosted on GCP using GKE.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an AI driven service for commercial real estate professionals with Flask and
Python. It's hosted on Google Cloud using GKE (Kubernetes) and has been up and
running since 2017.

Cole talks about rewriting the initial prototype, the dangers of not using an
ORM, splitting out the front-end from the back-end, using Google Functions, the
importance in making sure you're building what your users want and so much
more.

## Topics Include

- 1:05 -- The inefficiencies when dealing with commercial real estate
- 6:51 -- From an MVP in 2016 to the main app in 2017 to the first paying customer in 2019
- 16:48 -- Motivation for choosing Flask and Python and backing out from using Go
- 21:59 -- Losing (recoverable) data by accidentally running a bad raw SQL query
- 24:14 -- Using openpyxl to handle Excel files and Weasy print to export PDFs
- 25:31 -- The API is a separate service in its own repo and the AI stuff runs on App Engine
- 30:47 -- The API is built with Flask straight up, no external packages
- 32:19 -- The front-end is built using React and Redux
- 34:24 -- Creating an amazing data tables solution is still not a generic solved problem
- 39:43 -- Payments are handled in a custom way (ACH, check, etc.)
- 44:06 -- Going with Google Cloud, Google Functions and GKE (Kubernetes Engine)
- 49:18 -- A DNS related GCP bug caused ~80% of their requests to 404 for 2-3 days
- 54:00 -- Developing local functions and what it's like to deploy everything
- 1:03:04 -- Making sure the back-end and front-end deployments are sync'd up
- 1:05:15 -- Dealing with secret management using Google's key management service
- 1:07:48 -- Currently using Mailgun but looking to switch over to Postmark
- 1:13:43 -- Database and file backups are happening regularly
- 1:19:31 -- GCP's logging and error reporting has been good so far, using LogRocket too
- 1:21:25 -- The TL;DR on what Webflow is and how they use it for their landing page
- 1:27:10 -- Best tips? Listen to advice but make and follow your own path
- 1:29:41 -- Customer discovery is important as well as asking the right questions
- 1:32:15 -- It's probably going to take you longer to build your app than you initially think
- 1:38:30 -- Cole's on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and [you can email him](mailto:cole@abstractcre.com) if you're an engineer that is interested in this problem space

## Links

###### 📄 References

- <https://phoenixframework.org/>
- <https://blog.samaltman.com/advice-for-ambitious-19-year-olds>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/coleifer/peewee>
- <https://openpyxl.readthedocs.io/en/stable/>
- <https://weasyprint.org/>
- <https://github.com/pytorch/pytorch>
- <https://github.com/reduxjs/redux>
- <https://imagemagick.org/index.php>
