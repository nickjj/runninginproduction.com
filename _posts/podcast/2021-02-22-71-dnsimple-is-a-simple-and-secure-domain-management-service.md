---
layout: "podcast-or-interview"

mp3_bytes: "91086848"
mp3_duration: "1:34:52"

guest: "Anthony Eden"
guest_avatar: "anthony-eden"
guest_website: "https://dnsimple.com/"
guest_twitter: "aeden"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "erlang"
  - "golang"
  - "vue"
  - "aws"
  - "bugsnag"
  - "chef"
  - "cloudflare"
  - "datadog"
  - "docker"
  - "env-key"
  - "heroku"
  - "lets-encrypt"
  - "memcached"
  - "nginx"
  - "pingdom"
  - "postgres"
  - "redis"
  - "slack"
  - "statuspage"
  - "stripe"
  - "ubuntu"
  - "webpack"

title: "DNSimple Is a Simple and Secure Domain Management Service"
description:
  Anthony Eden talks about building a domain management service with Rails,
  Go and Erlang. It's hosted on bare metal, AWS and Heroku.
---

In this episode of Running in Production, {{ page.guest }} covers building a
domain management service with Rails, Go and Erlang. It's hosted on a
combination of 70+ bare metal servers, AWS and Heroku. It's been been up and
running since 2010.

Anthony talks about handling millions of API queries per day, ~5 billion
monthly DNS queries, spikes of up to 10,000 requests per second, sticking with
a Rails monolith for the web dashboard, scaling PostgreSQL, building multiple
data centers, feature flags and tons more.

## Topics Include

- 3:58 -- Millions of API queries per day and 2-5 billion DNS queries per month
- 6:40 -- How Rails, Go and Erlang are being used along with why they were chosen
- 12:54 -- How DNS lookups happen and the importance of DDoS protection
- 16:40 -- The Erlang service has ~10k LOC and was written before Elixir existed
- 21:23 -- Go is responsible for a lot of glue services
- 24:50 -- A monolithic Rails app (server rendered templates) powers the web dashboard
- 28:08 -- Sidekiq (Enterprise), Redis, PostgreSQL and all services run on Ubuntu LTS
- 29:41 -- For cloud hosted services they end up on AWS or Heroku depending on what it is
- 31:45 -- There's 2 PostgreSQL instances and only the Rails app writes to it
- 34:55 -- nginx is sitting in front of the Rails app
- 35:43 -- Topping out at 5-10k requests per second through the Erlang service
- 42:44 -- You can spin things up locally with or without Docker
- 47:15 -- Datadog is used to help view metrics and logs to detect potential issues
- 50:10 -- What exactly is Anycast?
- 52:07 -- Picking out hardware for their data centers (roughly 70 physical servers)
- 59:29 -- Chef is being used to configure all of the servers
- 1:02:23 -- What the process is like to develop something and then deploy it to production
- 1:07:59 -- Toggling feature flags, managing database migrations at scale and API versioning
- 1:16:15 -- How developers add new features through pull requests and then deploy code
- 1:21:53 -- Stripe handles all of the payments for each subscription tier
- 1:24:26 -- Handling database backups with snapshots and streaming the data offsite
- 1:26:45 -- Bugsnag is used for error handling and logs get written to Datadog as well
- 1:29:16 -- Everyone's been working remotely from day 1 and there is no centralized office
- 1:31:39 -- Best tips? Have good processes in place as you grow in size
- 1:34:07 -- Check out <{{ page.guest_website }}> and you can find Anthony on [Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Anycast>
- <https://www.cloudflare.com/learning/ddos/dns-amplification-ddos-attack/>
- <https://miro.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/hanami/hanami>
- <https://github.com/dnsimple/erldns>
- <https://github.com/dnsimple/dns_erlang>
- <https://github.com/wal-e/wal-e>
