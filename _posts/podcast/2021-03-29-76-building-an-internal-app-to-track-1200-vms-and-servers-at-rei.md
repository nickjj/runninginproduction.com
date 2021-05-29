---
layout: "podcast-or-interview"

mp3_bytes: "53561472"
mp3_duration: "55:47"

guest: "Sean Callaway"
guest_avatar: "sean-callaway"
guest_website: "https://rei.com"
guest_twitter: "smcallaway"

category: "podcast"
tags:
  - "django"
  - "python"
  - "ansible"
  - "aws"
  - "centos"
  - "docker"
  - "grafana"
  - "influxdb"
  - "jenkins"
  - "kubernetes"
  - "mssql"
  - "nginx"
  - "postgres"
  - "prometheus"
  - "rancher"
  - "slack"
  - "windows"

title: "Building an Internal App to Track 1,200+ VMs and Servers at REI"
description:
  Sean Callaway goes over building an infrastructure management app with Django
  and Python. It's mostly hosted on premesis.
---

In this episode of Running in Production, {{ page.guest }} talks about building
an app to help manage REI's server infrastructure. It was built with Django and
it's mostly hosted on premises in their own data center.

Sean covers keeping the app mostly server rendered and goes into detail about
using Ansible, Kubernetes and Rancher to help manage things.

## Topics Include

- 4:16 -- Motivation for using Django and Python
- 6:27 -- The Django admin is not being used
- 8:20 -- Using Ansible to automate spinning up VMware based VMs
- 10:17 -- It's a monolithic application and it does use Django apps
- 12:14 -- A high level overview of what the app does to help visualize it
- 15:14 -- It's using Django templates and they tuned a few database queries
- 18:19 -- PostgreSQL is used for some data and maybe Celery will be used soon
- 21:07 -- nginx is serving static files and Kubernetes' ingress controller handles SSL certs
- 23:43 -- Docker Compose is being used in dev and what Kubernetes has been like so far
- 28:42 -- Pretty much all of their servers are hosted on premises
- 31:17 -- Using Grafana, Splunk and Prometheus for logging and monitoring
- 34:26 -- For the Linux servers, they're running CentOS with Rancher
- 38:50 -- The entire flow for pushing code from development to production
- 45:37 -- Database backups and planning for disasters
- 51:50 -- Best tips? Containerize your app quickly
- 55:05 -- You can find Sean on [GitHub](https://github.com/seancallaway), [Twitter](https://twitter.com/{{ page.guest_twitter }}) and he has a blog at <https://callaway.dev>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Active_Directory>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://openpyxl.readthedocs.io/en/stable/>
- <https://gunicorn.org/>
- <https://github.com/Lucterios2/django_auth_ldap3_ad>
