---
layout: "podcast-or-interview"

mp3_bytes: "61128576"
mp3_duration: "1:03:40"

guest: "Eduardo Messuti"
guest_avatar: "eduardo-messuti"
guest_website: "https://statuspal.io/"
guest_twitter: "messutied"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "bootstrap"
  - "cloudflare"
  - "digitalocean"
  - "docker"
  - "github-actions"
  - "heroku"
  - "honeybadger"
  - "hugo"
  - "jquery"
  - "lets-encrypt"
  - "mailgun"
  - "nginx"
  - "papertrail"
  - "pingdom"
  - "postgres"
  - "preact"
  - "twilio"
  - "ubuntu"
  - "webpack"

title: "Statuspal Is a Service for Hosted Status Pages and Monitoring"
description:
  Eduardo Messuti talks about building a status page and monitoring service
  with Phoenix and Elixir. It's hosted on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a status page and monitoring service with Phoenix and Elixir. It's hosted on
DigitalOcean and Heroku. It's been up and running since 2017.

Eduardo talks about upgrading their code base to use Phoenix contexts, using
Oban, creating a notification abstraction, going all-in with EEx rendered
templates and a bit of jQuery, using Docker Compose in production and more.

## Topics Include

- 1:59 -- What it was like using Elixir back in 2017
- 4:52 -- Elixir handles 500k requests a day and motivation to use Elixir / Phoenix
- 8:17 -- The process to upgrade the code base to use Phoenix contexts
- 10:02 -- Oban is being used to handle background jobs
- 14:39 -- Sending out notifications and webhooks with custom code
- 16:39 -- Using Mix format as part of a CI pipeline with GitHub Actions
- 19:00 -- Breaking out the mail service into its own service
- 21:03 -- About 28k lines of Elixir and 2k lines of JS
- 23:48 -- Server rendered app with EEx vs going the SPA / API route vs Live View
- 28:45 -- Supplying a status page embed widget for customers and custom domains
- 33:08 -- Using nginx as a reverse proxy, ETS for caching along with Cloudflare
- 35:03 -- Hugo is being used to serve the static marketing site
- 37:11 -- Docker is being used in staging and production
- 38:17 -- The mailer is hosted on Heroku, everything else is on DigitalOcean
- 39:58 -- The hardware specs of the 4-5 DigitalOcean servers and what they do
- 42:27 -- They're running Ubuntu 20.04 LTS and upgraded the servers on the fly
- 44:13 -- The servers are manually provisioned and run Docker Compose
- 50:52 -- Deploying a feature from development to production
- 53:37 -- User logos get uploaded and saved to disk with a Docker volume
- 54:52 -- Using BackupPC for backing up the database, certificates and file uploads
- 56:40 -- DigitalOcean's monitoring and Pingdom are being used for various health checks
- 57:38 -- Honeybadger and Papertrail for errors + logging, and the Elixir experience
- 1:00:38 -- Best tips? Pick a technology you're comfortable with and start building
- 1:01:31 -- What it was like hiring Elixir contract workers
- 1:02:40 -- Check out <{{ page.guest_website }}> with promo code *PRODUCTION* to save 10%

## Links

###### 📄 References

- <https://turbo.hotwire.dev/>
- <https://github.com/asdf-vm/asdf>
- <https://elixirjobs.net/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/sorentwo/oban>
- <https://github.com/code-corps/stripity_stripe>
- <https://github.com/unrelentingtech/httpotion>
- <https://github.com/smpallen99/coherence>
- <https://github.com/preactjs/preact>
- <https://backuppc.github.io/backuppc/>
