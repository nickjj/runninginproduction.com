---
layout: "podcast-or-interview"

mp3_bytes: "62228352"
mp3_duration: "1:04:49"

guest: "Dave Blakey"
guest_avatar: "dave-blakey.jpg"
guest_website: "https://nova-adc.com"
guest_website_href: "https://nova-adc.com/?utm_source=Running%20in%20Production&utm_medium=banner&utm_campaign=Running%20in%20Production"
guest_twitter: "SnaptADC"

category: "podcast"
tags:
  - "golang"
  - "laravel"
  - "php"
  - "docker"
  - "influxdb"
  - "postgres"
  - "kubernetes"
  - "serverless"
  - "aws"
  - "digitalocean"
  - "lets-encrypt"
  - "ubuntu"
  - "ci"
  - "cdn"

title: "Load Balance, Secure and Observe Your Web Applications with Nova ADC"
description:
  Dave Blakey goes over how their load balancing service handles 33k+ events
  / second across a 100+ server Kubernetes cluster on AWS and DO.
---

In this episode of Running in Production, {{ page.guest }} goes over how their
load balancing service ([Nova]({{ page.guest_website_href }})) handles 33,000+
events per second across a 100+ server Kubernetes cluster that runs on both AWS
and DigitalOcean. There's a sprinkle of Serverless thrown in too.

If you ever wondered how a large scale app is developed and deployed, you're in
for a treat. Some of Nova's clients spend $5,000,000+ a month on hosting fees.
We covered everything from development best practices, how to create a scalable
application architecture and how they replicate their environment across
multiple cloud providers and regions.

*P.S., Nova is also really useful for small sites too and they have a free tier
with no strings attached, so you may want to [give it a
try](https://nova-adc.com/pricing?utm_source=Running%20in%20Production&utm_medium=banner&utm_campaign=Running%20in%20Production).
After this episode the first thing I thought was "wtf, why am I not using
this?". I'm going to start playing with it over the holidays for my own sites.*

## Show Notes

- 1:31 -- 2 teams composed of 9 developers work on the back-end and front-end
- 1:59 -- Motivation for choosing Golang for the back-end came down to scaling requirements
- 2:57 -- Tens of thousands of clients are connected to 1 point of control (the Golang server)
- 3:24 -- Balancing operational scale with developer programming speed
- 3:43 -- Their dev team has lots of programming experience and decided Golang was solid
- 4:28 -- The client / server architecture of how their load balancer is installed
- 5:38 -- The "cloud" component which is the managed web UI to configure your load balancer
- 5:54 -- The web UI is written in PHP using Laravel
- 6:39 -- It wasn't really a matter of using Laravel, it was "should we even use a framework?"
- 7:16 -- Motivation for picking Laravel for the web interface
- 8:08 -- Picking a web framework where hiring isn't a problem and the documentation is great
- 8:47 -- The Laravel app isn't a monolithic app, many things run on Kubernetes and Serverless
- 9:38 -- As an end user, if you click a button on the site it ultimately leads to a job running
- 9:57 -- Docker and Vagrant are heavily being used in development
- 10:43 -- This isn't a typical web app, there's lots of moving parts to deal with in development
- 11:34 -- Vagrant makes it really easy to network together your VMs to other systems
- 12:08 -- The value in spending the time in your dev tooling to spin new devs up quickly
- 12:46 -- InfluxDB is being used as a time series database and what problems it solves
- 13:45 -- After only 4 months of being around, we're writing 33,000+ metrics per second
- 14:37 -- Nova operates at massive scale but if you're not, maybe stick with a SQL database
- 15:19 -- Their load balancer is the single source that your clients (web visitors) connect to
- 15:50 -- Even if Nova happens to have growing pains, it won't affect your site's up-time at all
- 17:18 -- What makes Nova different than a load balancer on AWS, GCP or anywhere else?
- 17:42 -- It's an ADC with availability, security, caching and observability
- 18:37 -- Nova is more than load balancing and there's also multi-cloud hosting to think about
- 19:14 -- For example, Nova is currently hosted on both AWS and DigitalOcean
- 19:30 -- It's difficult to rely on cloud specific services (ELB, ALB, Firewalls, etc.)
- 20:14 -- Nova is replicated between AWS and DigitalOcean for redundancy
- 20:57 -- (40) $20 / month servers on DigitalOcean running in Kubernetes
- 21:42 -- And another (100) servers for their testing environment to perform load tests
- 21:55 -- About (20) servers are running on AWS
- 22:01 -- For the Nova load balancers, they are running on $5 / month DigitalOcean droplets
- 22:21 -- Everything is running Ubuntu 18.04 LTS, except for a few servers running 19.x
- 22:49 -- On AWS, those 20 servers range from $40-60 / month
- 23:07 -- 2-4 CPU cores is the sweet spot for their work load, more cores doesn't help much
- 23:55 -- They run their own load balancer to manage their own infrastructure
- 24:29 -- Most of their servers are a piece of a Kubernetes cluster
- 24:49 -- The rest of the servers are template driven but we're not using Ansible, etc.
- 25:42 -- Those development changes were great because it makes things easier to scale
- 26:11 -- Kubernetes is nice but it took a lot of changes in development to make it work
- 26:23 -- There is no magic Kubernetes button to scale, it takes a lot of preparation
- 27:35 -- Nova supports many different deployment environments, not just Kubernetes
- 28:11 -- For example, you can load balance (2) DigitalOcean droplets, here's how it works
- 30:01 -- Doing things like rolling restarts is all handled by Nova
- 31:05 -- Using Kubernetes is hard, especially for larger organizations
- 31:30 -- What would the deploy process look like for an end user load balancing 2 servers?
- 33:35 -- Performing an automated rolling restart with Kubernetes
- 34:16 -- The dangers of a fully automated rolling restart without extra "smarts"
- 34:44 -- Nova's deploy process for their own infrastructure (Golang server and client)
- 36:21 -- Their CI / CD environment runs on CircleCI but the deploy script is custom
- 36:57 -- Secrets are managed mostly with environment variables
- 38:16 -- Being cloud neutral is a trend right now (AKA, not being locked into a vendor)
- 38:41 -- Moving the data, replication and keeping things in sync are the hardest parts
- 38:54 -- End to end, a new web UI deploy for Nova could be done in under 10 seconds
- 40:20 -- What about deploying the client / server component? It's quite a bit different
- 40:57 -- Shell scripts can go a long ways, especially for gluing together deployment code
- 41:44 -- A lot of monitoring and reporting is kept in-house for performance reasons
- 42:12 -- For error reporting on the web UI with Laravel, it goes to Sentry
- 42:16 -- Then it's all integrated with an agent-less DataDog and Slack notifications
- 43:17 -- It's nice using 3rd party tools that integrate easily like Laravel and Sentry
- 43:36 -- Not using DigitalOcean's alerting mainly due to working with a cluster of servers
- 44:30 -- Being able to switch cloud hosting providers without a huge fuss
- 44:37 -- One of Nova's clients spend 5 million US dollars a month on cloud hosting fees
- 45:00 -- Another client has 500+ load balances deployed across 5,000+ servers
- 45:30 -- Spending that kind of money on hosting fees is a whole different level
- 45:59 -- Nowadays a small team can be responsible for a huge amount of infrastructure
- 46:51 -- WhatsApp and Instagram are great examples of a few devs with lots of end users
- 47:12 -- We live in an interesting time where 1 developer can do so much
- 47:27 -- Nova's test environment has 1 million connected clients
- 48:00 -- Their databases are run across multiple data centers and are auto-backed up
- 49:19 -- Their business is redundancy and up-time, so good disaster plans are necessary
- 49:36 -- Working with high traffic clients helped define best practices
- 50:31 -- Nova is great for small sites too and you get 5 nodes for free (no strings attached)
- 52:01 -- It's not a pay to win system, the free tier has everything you would need at that scale
- 52:55 -- Stripe is being used to process payments and it uses the new Payments Intents API
- 53:28 -- Nova bills you per hour instead of per month and Stripe makes this really easy
- 55:46 -- SendGrid is being used to send transactional emails to end users
- 56:12 -- They send less than a 1,000 emails out a day (mostly for notifications and alerts)
- 56:41 -- Their load balancer deals with handling SSL certificates using Let's Encrypt
- 56:59 -- End users of the service don't need to worry about issuing their own SSL certs
- 57:34 -- Push button, receive bacon
- 57:51 -- If you're in the public cloud you can also get encryption end to end
- 58:43 -- Dealing with SSL at the load balancer level can save a lot of headaches
- 58:54 -- It comes back to setting up your app using best practices in order to scale
- 59:35 -- Best tips? Create a code contract to help keep your code sane for years to come
- 1:00:56 -- It's sort of like Heroku's 12 factor guidelines but not really
- 1:01:06 -- It's more like 8 things to do to avoid an angry meme in your pull request
- 1:01:36 -- It's 8 core concepts (but it doesn't need to be 8) to define your system's purpose
- 1:02:49 -- One mistake that was corrected was under estimating time series databases
- 1:03:52 -- [snapt](https://www.snapt.net/?utm_source=Running%20in%20Production&utm_medium=banner&utm_campaign=Running%20in%20Production)
             is their parent company, [Nova]({{ page.guest_website_href }})
             is the load balancer service that we talked about today, and you can also find
             them [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) on Twitter

# Links

- <https://golang.org/>
- <https://kubernetes.io/>
- <https://www.php.net/>
- <https://laravel.com/>
- <https://laracasts.com/>
- <https://en.wikipedia.org/wiki/Serverless_computing>
- <https://aws.amazon.com/lambda/>
- <https://www.docker.com/>
- <https://www.vagrantup.com/>
- <https://en.wikipedia.org/wiki/Time_series_database>
- <https://www.influxdata.com/>
- <https://en.wikipedia.org/wiki/Application_delivery_controller>
- <https://aws.amazon.com/>
- <https://cloud.google.com/>
- <https://en.wikipedia.org/wiki/Denial-of-service_attack>
- <https://en.wikipedia.org/wiki/SQL_injection>
- <https://en.wikipedia.org/wiki/Cross-site_scripting>
- <https://en.wikipedia.org/wiki/Geo-fence>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://aws.amazon.com/elasticloadbalancing/>
- <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html>
- <https://en.wikipedia.org/wiki/Web_application_firewall>
- <https://azure.microsoft.com/en-us/>
- <https://en.wikipedia.org/wiki/Ubuntu>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>
- <https://circleci.com/>
- <https://sentry.io/welcome/>
- <https://www.datadoghq.com/>
- <https://github.com/statsd/statsd>
- <https://en.wikipedia.org/wiki/Timeline_of_Instagram>
- <https://www.postgresql.org/>
- <https://en.wikipedia.org/wiki/Application_firewall>
- <https://stripe.com/>
- <https://sendgrid.com/>
- <https://letsencrypt.org/>
- <https://i.pinimg.com/originals/bb/98/e0/bb98e03ac44d2fa7b07cfd364eab6e2e.jpg>
- <https://en.wikipedia.org/wiki/Heartbleed>
- <https://12factor.net/>
