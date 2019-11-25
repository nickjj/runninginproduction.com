---
layout: "podcast-or-interview"

mp3_bytes: "50249978"
mp3_duration: "52:20"

guest: "Mark Wilbur"
guest_avatar: "mark-wilbur.jpg"
guest_website: "https://alchemist.camp/"
guest_twitter: "AlchemistCamp"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "postgres"
  - "nginx"
  - "lets-encrypt"
  - "digitalocean"
  - "ubuntu"
  - "gitlab"
  - "payments"

title: "Learn Elixir and Phoenix by Building Things Over at Alchemist Camp"
description:
  Mark Wilbur goes over how he built his platform using Phoenix and Elixir.
  It's all hosted on a $10 a month DigitalOcean server.
---

In this episode of Running in Production, Mark Wilbur guides us through how he
builds and deploys his video and article driven learning platform called
[Alchemist Camp]({{ page.guest_website }}). The site gets about 12,000+
visitors a month and it's all hosted on a single $10 / month DigitalOcean
server.

One takeaway is that you can be quite productive as a solo developer but the
bar is constantly being raised for what developers need to learn. For example,
at one point we talked about the new SCA workflows with Stripe since he
collects payments for subscriptions.

## Show Notes

- 1:53 -- What type of content does Alchemist Camp have?
- 3:41 -- The whole platform was developed by Mark
- 4:12 -- Motivation for using Elixir and Phoenix
- 5:17 -- Would you use Phoenix again if you rewrote your app today?
- 6:52 -- Finding a balance between productivity and ease of maintenance
- 7:51 -- Alchemist Camp is a monolithic application but uses it Phoenix contexts
- 9:07 -- The app has roughly 10,000+ lines of Elixir code across 240+ Elixir modules
- 10:02 -- Monolithic apps work very well in a number of different use cases
- 10:42 -- Server rendered templates with sprinkles of JavaScript
- 11:06 -- There's an API component but it's for a public subscriber API to download videos
- 12:04 -- The site is very speedy from an end user's POV even without Turbolinks
- 12:24 -- Waiting a bit longer before trying out Live View
- 12:48 -- Pretty severe RSI limited development to 10 hours a week for a while
- 14:20 -- PostgreSQL is the database of choice
- 14:34 -- nginx is being used, primarily for handling Let's Encrypt certificates
- 15:36 -- nginx is also used to serve static files and deal with compression
- 16:29 -- Docker is not being used in development, but it's part of the deploy process
- 16:40 -- Going over previous ways the app was deployed with distillery and edeliver
- 18:19 -- Going over the current deployment method which still uses edeliver
- 18:25 -- GitLab CI / CD helps push code to production with Docker and edeliver
- 19:05 -- Docker isn't used in production, processes are managed with systemd
- 19:34 -- The server was just upgraded to run Ubuntu 18.04 LTS
- 20:34 -- Everything (including the database) is running on 1 server on DigitalOcean
- 21:08 -- Render is an interesting Heroku alternative that Mark might use next
- 22:34 -- The server is manually configured but using Ansible is in the works
- 23:27 -- Do everything manually first and then automate afterwards when needed
- 24:21 -- Managed database service vs self hosting your own database
- 25:18 -- Logging events into your own database vs using another service
- 26:30 -- Using DigitalOcean's built in monitoring dashboard
- 27:40 -- It's hosted on the $10 / month server with 1 CPU core and 2 GB of memory
- 29:03 -- Using ETS with a custom GenServer for caching certain page responses
- 30:20 -- It held up after many people slammed his site using various benchmark tools
- 31:28 -- One bottleneck was compiling Markdown into HTML on each page load
- 33:09 -- Amazon SES is being used to send transactional emails out
- 34:21 -- Marketing emails are done with MailChimp but that's being moved to ConvertKit
- 36:25 -- Using Stripe to handle subscription payments, and PayPal is done manually
- 37:45 -- Barrier of entry for handling payments is going up with things like SCA
- 38:53 -- Logging is old school, just hop on the server and check out the log files 
- 39:12 -- Taking advantage of DigitalOcean's built in alerting system
- 40:34 -- Using Let's Encrypt for issuing SSL certificates with the Certbot tool
- 40:49 -- DNS records are being hosted on DigitalOcean
- 41:28 -- Getting notified by email if your SSL certificates are expiring soon
- 42:19 -- Handling disasters with daily and weekly automated backups
- 43:17 -- There's lots of ways to backup a database, use the one that works best for you
- 44:27 -- Database backups are being saved on DO Spaces (S3 compatible object storage)
- 44:59 -- There's no URL based health checks on the app itself but that may change soon
- 45:35 -- Sometimes you can't believe your site actually works because you don't get alerts
- 46:58 -- Best tips? Keep your code and infrastructure simple early on and ship your app
- 48:18 -- Region based discount had a display bug, but developers (as end users) are forgiving
- 51:23 -- You can find Mark [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) on Twitter and check out his [new podcast](https://alchemist.camp/podcasts)

## Links

- <https://elixir-lang.org>
- <https://hexdocs.pm/phoenix/overview.html>
- <https://rubyonrails.org/>
- <https://hexdocs.pm/ecto/Ecto.Query.html#preload/3>
- <https://elixir-lang.org/getting-started/mix-otp/dependencies-and-umbrella-projects.html>
- <https://en.wikipedia.org/wiki/Domain-driven_design>
- <https://nickjanetakis.com/blog/microservices-are-something-you-grow-into-not-begin-with>
- <https://github.com/turbolinks/turbolinks>
- <https://github.com/phoenixframework/phoenix_live_view>
- <https://en.wikipedia.org/wiki/Repetitive_strain_injury>
- <https://www.postgresql.org/>
- <https://www.nginx.com/>
- <https://letsencrypt.org/>
- <https://github.com/google/brotli>
- <https://hexdocs.pm/phoenix/Mix.Tasks.Phoenix.Digest.html>
- <https://www.docker.com/>
- <https://github.com/bitwalker/distillery>
- <https://stackoverflow.com/a/414258> (using setcap)
- <https://github.com/edeliver/edeliver>
- <https://about.gitlab.com/product/continuous-integration/>
- <https://en.wikipedia.org/wiki/Systemd>
- <https://github.com/OvermindDL1/pid_file>
- <https://en.wikipedia.org/wiki/Ubuntu>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://render.com/>
- <https://github.com/ansible/ansible>
- <https://keen.io/>
- <https://soundcloud.com/elixirtalk/episode-157-feat-chris-mccord-liveviewphoenix-part-deux>
- <https://www.digitalocean.com/products/monitoring/>
- <https://elixir-lang.org/getting-started/mix-otp/ets.html>
- <https://github.com/whitfin/cachex>
- <https://elixirforum.com/t/7-5-second-average-page-load-speed-for-200-visitors-hitting-a-phoenix-driven-website-on-a-5-month-digital-ocean-droplet/15073>
- <https://aws.amazon.com/ses/>
- <https://mailchimp.com/>
- <https://convertkit.com/>
- <https://stripe.com/>
- <https://github.com/heresydev/stripy>
- <https://stripe.com/docs/strong-customer-authentication>
- <https://nanobox.io/>
- <https://certbot.eff.org/>
- <https://www.digitalocean.com/products/block-storage/>
- <https://www.digitalocean.com/products/spaces/>
- <https://uptimerobot.com/>

## Shameless Plugs

- Nick: Want to learn Docker? Join thousands of others in my
  [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
  video course
