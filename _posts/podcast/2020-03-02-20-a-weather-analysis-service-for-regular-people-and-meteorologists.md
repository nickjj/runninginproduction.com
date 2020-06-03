---
layout: "podcast-or-interview"

mp3_bytes: "69822336"
mp3_duration: "1:12:43"

guest: "Nick Gregory"
guest_avatar: "nick-gregory"
guest_website: "https://beta.vortexweather.tech/"
guest_twitter: "kallsyms"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "postgres"
  - "docker"
  - "kubernetes"
  - "cdn"
  - "open-source"

title: "A Weather Analysis Service for Regular People and Meteorologists"
description:
  Nick Gregory walks us through building his service with Flask. It's hosted on
  dedicated hardware running in a colo with Kubernetes.
---

In this episode of Running in Production, {{ page.guest }} walks us through
what it's like building [Vortex Weather]({{ page.guest_website }}) which uses
Flask and Python to help understand the weather. It's hosted on bare metal
servers running in a colo on top of a self managed Kubernetes cluster.

Nick goes into detail on having to manage 750+ GB of data that needs to be
recycled every 2 days and having his own servers with a combined, 24 physical
CPU cores, 128+ GB of RAM and 10+ TB of disk space. The app is open source and
it's his side project, so he also talked about tips on how to manage his time
and enforce self imposed deadlines.

## Show Notes

- 1:59 -- Weather data can come from a number of different sources
- 3:01 -- 750+ GB of data is cycled every 2 days and it needs to be queryable in ~200ms
- 3:57 -- This is Nick's side project and he's the sole developer which has its challenges
- 5:13 -- The app is [open source on GitHub](https://github.com/kallsyms/wx_explore)
- 5:26 -- Motivation for using Python and Flask
- 6:53 -- Picking gunicorn over uwsgi, mainly for ease of deployment
- 9:32 -- The web front-end is a monolith but the data processing happens in a different service
- 10:55 -- Looking at Go for more performance on the math heavy calculations
- 12:15 -- Ingesting data is done through Kubernetes cron jobs and it's backed by PostgreSQL
- 15:00 -- PostgreSQL is really amazing and works great as a queue back-end
- 16:34 -- PostgreSQL was originally used for the 750 GB of data but then it was moved to S3
- 18:41 -- The files on S3 are 10+ GB in size (each)
- 19:36 -- The files are a huge series of floats in a binary format
- 21:02 -- PostgreSQL ends up storing a little bit of meta-data that's used to get data from S3
- 21:19 -- It was all moved out of PostgreSQL because...
- 24:03 -- Before the S3 change there were over 2.5 billion rows being saved to PostgreSQL
- 25:10 -- Seriously, PostgreSQL is really good
- 25:49 -- Visualizing weather in a radar view requires a massive amount of computing power
- 28:23 -- Predicting the weather in the short term future based on clouds and wind
- 30:54 -- Docker is being used in development and it's making things a lot easier
- 32:01 -- Ubuntu is being used as a base OS for the Docker images
- 33:28 -- Traefik sits in front of gunicorn to do TLS termination and act as a reverse proxy
- 35:10 -- Traefik is rock solid but it's not a complete drop in replacement for nginx
- 38:27 -- (2) servers are sitting in a colo for now, mainly for cost and performance wins
- 40:13 -- The TL;DR on what a colo (colocation) is and what it's like owning your own hardware
- 41:27 -- Server 1 has 8 CPU cores, 96 GB of RAM, 6 TB of HDD space in RAID-5 and a 2 TB SSD
- 42:10 -- Server 2 is a Threadripper with 16 CPU cores, 64 GB of RAM and (2) 2 TB NVME SSDs
- 42:53 -- How much storage could you fit? 10+ SSDs plus the PCI slots on the motherboard
- 43:47 -- Getting similar capacity and performance with AWS would be a lot more money
- 44:49 -- Nick runs a Debian based distro called Proxmox
- 45:55 -- A good GUI is one of the selling points for Proxmox, even though it's on a server
- 46:41 -- Kubernetes is self managed but it was configured with Rancher's RKE 
- 48:49 -- Prior to finding RKE, he almost went with Swarm due to Kubernetes' complexity 
- 49:54 -- Currently there's no error reporting set up, but Sentry.io is on the horizon
- 51:24 -- Deploying code from development to production
- 51:34 -- The weather app is on the Docker Hub at [kallsyms/wx_explore](https://hub.docker.com/r/kallsyms/wx_explore)
- 53:22 -- CI isn't being used now but a self hosted Gitlab instance might happen in the future
- 54:09 -- As long as the kubeconfig stays out of CI, then it's all good
- 55:43 -- How are database migrations dealt with? By avoiding them since they're not needed
- 58:56 -- What about backing up the database? It's also not needed since it's all recreatable
- 59:57 -- The weather tool is made for both regular people and meteorologists
- 1:03:34 -- StatusCake's free tier is being used to do uptime monitoring
- 1:05:55 -- Best tips? Learning to self manage your time and break down problems 
- 1:07:01 -- Learning best practices and tips on how to optimize Docker performance
- 1:08:05 -- Keeping yourself accountable for hitting self imposed deadlines
- 1:11-20 -- You can find Nick on Twitter [@{{ page.guest_twitter}}](https://twitter.com/{{ page.guest_twitter}}) and on [GitHub too](https://github.com/kallsyms)

## Links

- <https://github.com/pallets/flask>
- <https://www.python.org/>
- <https://www.epa.gov/ceam/meteorological-data>
- <https://www.ncdc.noaa.gov/>
- <https://gunicorn.org/>
- <https://instagram-engineering.com/what-powers-instagram-hundreds-of-instances-dozens-of-technologies-adf2e22da2ad?gi=af837c58e3b>
- <https://en.wikipedia.org/wiki/List_of_common_coordinate_transformations>
- <https://golang.org/>
- <https://kubernetes.io/>
- <https://kubernetes.io/docs/concepts/workloads/controllers/cron-jobs/>
- <https://www.postgresql.org/>
- <https://pypi.org/project/pq/>
- <https://aws.amazon.com/s3/>
- <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Range>
- <https://www.postgresql.org/docs/9.2/indexes-types.html>
- <https://darksky.net/forecast>
- <https://github.com/python/cpython>
- <https://docs.traefik.io/>
- <https://www.cloudflare.com/>
- <https://en.wikipedia.org/wiki/Colocation_centre>
- <https://github.com/minio/minio>
- <https://en.wikipedia.org/wiki/Standard_RAID_levels>
- <https://en.wikipedia.org/wiki/Ryzen>
- <https://pve.proxmox.com/wiki/FAQ>
- <https://rancher.com/docs/rke/latest/en/>
- <https://sentry.io/welcome/>
- <https://kubernetes.io/docs/concepts/configuration/organize-cluster-access-kubeconfig/#merging-kubeconfig-files>
- <https://en.wikipedia.org/wiki/Convective_available_potential_energy>
- <https://www.statuscake.com/>
