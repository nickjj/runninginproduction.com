---
layout: "podcast-or-interview"

mp3_bytes: "103858944"
mp3_duration: "1:48:11"

guest: "Matthias Viehweger"
guest_avatar: "matthias-viehweger"
guest_website: "https://hitobito.com/"
guest_twitter: "der_kronn"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "appuio"
  - "bash"
  - "cloudscale"
  - "dnsimple"
  - "docker"
  - "github-actions"
  - "grafana"
  - "jenkins"
  - "kubernetes"
  - "lets-encrypt"
  - "memcached"
  - "mysql"
  - "nginx"
  - "open-source"
  - "openshift"
  - "prometheus"
  - "redhat"
  - "sentry"
  - "uptime-robot"

title: "Hitobito Helps You Manage Communities with Complex Group Hierarchies"

description:
  Matthias Viehweger goes over building a service to help organize groups of
  people with Ruby on Rails. It's hosted with OpenShift.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
service to help organize groups of people. It's built with Ruby on Rails and is
hosted on OpenShift with Kubernetes. It's been running in production since 2012.

Matthias talks about building a Rails Engine abstraction, creating a multi-repo
monolith, using Sphinx for full text search, making the most of Kubernetes /
OpenShift and lots more.

## Topics Include

- 6:23 -- There's an [open source version of it](https://github.com/hitobito) along with a hosted SAAS app
- 9:10 -- Motivation for using Ruby on Rails and updating from v4 to v6 over time
- 12:18 -- Using Action Mailer and Delayed Job to send and receive emails
- 16:40 -- A few other gems being used in the project
- 19:25 -- 86 models in the core app and 275 extra for a specific Scout site (~70k LOC too)
- 22:49 -- How billing is handled for the hosted SAAS app (it's through invoices)
- 24:54 -- Handling integrations by exporting data
- 26:31 -- It's a multi-repo monolithic application, what the "core" and "wagon" are
- 32:02 -- There's mostly server rendered templates with a bit of JS on the front-end
- 35:00 -- Full text search is handled with the Thinking Sphinx gem
- 37:09 -- There's a separate MySQL database for each tenant
- 42:35 -- Tech stack run down so far and how memcached is being used
- 44:58 -- The app is set up to use Docker Compose in dev but Matthias doesn't use it
- 48:05 -- It's hosted on APPUiO which is a hosted version of OpenShift
- 50:20 -- We're all YAML engineers, configuring Kubernetes and DB migrations
- 1:03:04 -- Kustomize is being used instead of Helm for templating YAML files
- 1:05:20 -- The Kubernetes related code is in its own git repo
- 1:08:01 -- From developing a feature locally to pushing it to production
- 1:19:38 -- Resource limits are defined in the Kubernetes config files
- 1:27:40 -- Backing up the database with daily Kubernetes cron jobs
- 1:31:02 -- Developers are treated like grown ups when it comes to customer data
- 1:34:48 -- Handling logging and alerting with Prometheus, Grafana and Kubernetes
- 1:40:51 -- Handling DNS with DNSimple and SSL certificates with Let's Encrypt
- 1:44:05 -- Best tips? Start with a specific thing instead of making a generic thing
- 1:46:45 -- Check out <{{ page.guest_website }}> and their [GitHub account](https://github.com/hitobito), Matthias is also on [GitHub](https://github.com/kronn), [Twitter](https://twitter.com/{{ page.guest_twitter }}) and he has a site at <http://kronn.de/>, also [Puzzle](https://www.puzzle.ch/) is the company he works for

## Links

###### 📄 References

- <https://github.com/basecamp/name_of_person>
- <https://tldrlegal.com/license/gnu-affero-general-public-license-v3-(agpl-3.0)>
- <https://edgeguides.rubyonrails.org/active_record_encryption.html>
- <https://runninginproduction.com/podcast/71-dnsimple-is-a-simple-and-secure-domain-management-service>
- <https://github.com/puzzle/statuscope>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/basecamp/trix>
- <https://github.com/collectiveidea/delayed_job>
- <https://github.com/salsify/delayed_job_heartbeat_plugin>
- <https://github.com/joshwlewis/validates_by_schema>
- <https://github.com/rubysherpas/paranoia>
- <https://github.com/codez/wagons>
- <https://github.com/pat/thinking-sphinx>
- <https://github.com/influitive/apartment>
- <https://github.com/puzzle/bleib/>
- <https://kustomize.io/>
