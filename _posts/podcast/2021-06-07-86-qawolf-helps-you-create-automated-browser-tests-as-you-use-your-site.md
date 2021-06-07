---
layout: "podcast-or-interview"

mp3_bytes: "81067776"
mp3_duration: "1:24:26"

guest: "Jon Perl"
guest_avatar: "jon-perl"
guest_website: "https://www.qawolf.com/"
guest_twitter: "jon_perl"

category: "podcast"
tags:
  - "node"
  - "react"
  - "apollo"
  - "azure"
  - "datadog"
  - "digitalocean"
  - "docker"
  - "github-actions"
  - "graphql"
  - "lets-encrypt"
  - "netlify"
  - "nextjs"
  - "nginx"
  - "open-source"
  - "pipedream"
  - "postgres"
  - "sendgrid"
  - "slack"
  - "stripe"
  - "vercel"
  - "webpack"

title: "QA Wolf Helps You Create Automated Browser Tests as You Use Your Site"
description:
  Jon Perl goes over building an automated testing service with Node and React.
  It's hosted on Netlify, Vercel, Azure and DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
service that automates creating browser tests for your web apps. It's built
with Node and React and is hosted on Netlify, Vercel, Azure Containers and
DigitalOcean.  It's been running in production since 2019.

Jon talks about creating an open source tool and turning it into a SAAS app,
using VNC and websockets to stream test runner data to the browser, keeping
things as a mono repo, moving from Azure Containers to Kubernetes and much
more.

## Topics Include

- 3:11 -- Going from a self hosted version to self hosted + hosted SAAS app
- 7:20 -- Motivation for using Node and React
- 8:33 -- Docker is being used for the test runners
- 11:24 -- A mono repo with Next.js, GraphQL and Apollo
- 15:33 -- Balancing your unit tests with end to end tests
- 18:25 -- Using noVNC and websockets to link the test runner output to the browser
- 22:58 -- Spinning up separate Docker containers for each test runner
- 24:52 -- Next.js, Webpack, React and Typescript make up the front-end JS
- 28:37 -- Efficiently sending VNC data over websockets
- 32:21 -- Handling usage limits with the API server
- 35:55 -- PostgreSQL is their primary database and they're using Pipedream
- 38:01 -- Stripe is being used to handle payments and SendGrid to send emails
- 42:00 -- Everything is hosted on a combo of Netlify, Vercel, Azure and DigitalOcean
- 47:11 -- Scaling up and down Azure containers with custom Node scripts
- 49:06 -- Moving to Kubernetes in the future but only after it was deemed worth it
- 57:08 -- The current deployment strategy pre-Kubernetes
- 1:00:03 -- Jest tests are written and the code is linted with ESLint
- 1:04:06 -- Database backups and the front-end is deployed to 2 hosts for redundancy
- 1:06:11 -- Datadog handles monitoring and logging with Slack for notifications
- 1:09:30 -- Keeping your assets fresh in a SPA or a long lived app in a browser tab
- 1:14:44 -- Best tips? Focus on getting something out and learning from it
- 1:16:32 -- Toggling feature flags with ENV variables and database fields
- 1:18:03 -- Building the selector generator was a tricky problem to solve
- 1:23:06 -- Check out <{{ page.guest_website }}>, the app is on [GitHub](https://github.com/qawolf/qawolf) and you can [email Jon](mailto:jon@qawolf.com)

## Links

###### 📄 References

- <https://code.visualstudio.com/docs/remote/containers>
- <https://github.com/yjs/yjs>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/novnc/noVNC>
- <https://microsoft.github.io/monaco-editor/>
- <https://github.com/socketio/socket.io>
- <https://github.com/patriksimek/vm2>
- <https://www.kubestack.com/>
- <https://github.com/eslint/eslint>
- <https://github.com/facebook/jest>
- <https://github.com/prettier/prettier>
