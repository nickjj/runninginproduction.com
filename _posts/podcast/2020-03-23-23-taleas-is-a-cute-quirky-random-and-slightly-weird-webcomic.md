---
layout: "podcast-or-interview"

mp3_bytes: "57500544"
mp3_duration: "59:53"

guest: "Seth Black"
guest_avatar: "seth-black"
guest_website: "https://www.taleas.com/"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "aws"
  - "digitalocean"
  - "digitalocean-spaces"
  - "docker"
  - "github-actions"
  - "lambda"
  - "lets-encrypt"
  - "mysql"
  - "nginx"
  - "redis"
  - "serverless"
  - "swarm"
  - "ubuntu"

title: "Taleas Is a Cute, Quirky, Random and Slightly Weird Webcomic"
description:
  Seth Blacks goes over building a webcomic and analytics service with Flask
  and goes over how it's deployed to a Docker Swarm cluster.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a webcomic platform with Flask and Python. It runs on a multi-node Docker Swarm
cluster on DigitalOcean and has been up and running since 2010. It gets up to
20,000+ visitors a day during traffic spikes.

Seth talks about the value of using nginx to cache Flask responses to keep the
site from getting a hug of death from Reddit. He also talks about using nginx
as a load balancer, running Docker Swarm, maintaining a web app that has been
running for 10+ years, creating a flexible and robust deployment pipeline with
GitHub Actions as a solo developer and a whole lot more.

## Topics Include

- 2:07 -- Experiences with using Flask to build the site for the last 10+ years
- 2:43 -- Traffic ranges from 20,000+ visitors a day to hundreds per month
- 4:54 -- A simple 5 second cache can save your server from a huge traffic spike
- 5:34 -- Motivation for using Flask after having used many different frameworks / languages
- 6:48 -- It's split into 2 services, one for the main app and one for analytics
- 7:51 -- The main app is about 1,000 lines of Python code with 15 database tables
- 8:35 -- Flask-Cache is used to cache the response of a few high traffic views
- 8:55 -- Each service has its own git repo that is independently deployed
- 9:31 -- Responses are sent out as server rendered templates using Jinja 2
- 10:30 -- A custom admin dashboard was built up over the years and it was worth it
- 13:14 -- Reducing page load speeds by lazy loading comic images as you scroll down
- 14:29 -- Websockets are being used in the admin to auto-save content in a real-time editor
- 16:27 -- MariaDB is being used as the main database and here's why
- 18:15 -- Search isn't implemented yet but it's the number 1 user feature request
- 19:25 -- Having search allows you to get good insights on what folks are looking for
- 20:07 -- Full page caching is done with the free and open source version of nginx
- 21:42 -- gunicorn is being used for the Flask app server and it works fantastically
- 21:57 -- Everything is inside of Docker, running in a Swarm cluster
- 22:47 -- Docker Swarm was chosen over Kubernetes because Kubernetes was overkill 
- 25:08 -- 2 web app servers that are load balanced, 2 DB servers, Redis and a load balancer
- 25:34 -- Celery isn't being used but Redis is doing a few things
- 26:27 -- Why Seth moved from AWS to DigitalOcean over the years
- 29:17 -- The load balancer is on a 2 GB of memory / 50 GB SSD / 2 virtual CPUs server
- 29:36 -- The app servers have 4 GB of memory / 4 virtual CPUs and a bit more SSD disk space
- 29:45 -- The database server has 8 GB of memory / 4 virtual CPUs and a 128 GB SSD
- 29:53 -- Everything is running smoothly and purs like a kitten with various amounts of traffic
- 30:18 -- Seth uses the same database server for a few of his other sites
- 31:15 -- A combo of Ubuntu 16.04 and Ubuntu 18.04 are running with intent to upgrade
- 32:04 -- Seth's upgrade process for when it comes time to upgrading Ubuntu to 20.04
- 33:50 -- DigitalOcean's load balancer wasn't around when all of this was set up
- 35:06 -- Everything was installed by hand on the servers but Seth likes Terraform and Puppet
- 36:32 -- You don't always need to upgrade to the latest tool that came out today
- 37:02 -- Over time, the app was updated from Python 2.6 to 3.4+ which was painful
- 37:58 -- How do you stay motivated working on a project that's been going for 10+ years?
- 40:49 -- Walking us through deploying code from development to production
- 43:14 -- GitHub Actions are used for CI / CD and it's all automated with a single git push
- 44:06 -- Secrets are stored in DigitalOcean Spaces and then are built into images on demand
- 46:17 -- Error reporting and logging are handled through flat file logs that get backed up
- 46:50 -- Newsletters are sent through a semi-manual mail merge strategy with Google Sheets
- 48:43 -- An RSS feed is also available and Pinterest provides a decent amount of traffic
- 49:45 -- The database is backed up nightly and 30 days worth of backups are saved
- 50:24 -- All of the comic assets are backed up on DropBox and the code is on GitHub
- 50:44 -- If the servers were to get forcefully rebooted, some of them recover automatically
- 51:36 -- Various DigitalOcean alarms are set up to do email notifications if things go bad
- 52:22 -- Reddit is weird sometimes (the hug of death or down voted into oblivion)
- 53:11 -- Using DigitalOcean and his comic reader community for determining site healthiness
- 54:55 -- Best tips? Focus on doing something you're passionate about, it really helps
- 55:39 -- Picking the right tool for the job is an art form and lean on trusted tools
- 56:27 -- One of Seth's biggest mistakes was trying to build something fancy initially
- 57:34 -- Another thing was chasing / building weird things that his users didn't ask for
- 59:04 -- Check out Seth's [webcomic]({{ page.guest_website }}) - he's also on [GitHub](https://github.com/sethblack) and [InstaGram](https://www.instagram.com/sethblackatx)

## Links

###### 📄 References

- <https://theoatmeal.com/>
- <https://xkcd.com/>
- <https://www.nginx.com/products/nginx/caching/>
- <https://developers.google.com/gsuite/solutions/mail-merge>
- <https://rss.com/blog/how-do-rss-feeds-work/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/thadeusb/flask-cache>
- <https://gunicorn.org/>
