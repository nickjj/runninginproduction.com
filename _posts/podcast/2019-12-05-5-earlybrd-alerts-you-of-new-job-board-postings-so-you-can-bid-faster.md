---
layout: "podcast-or-interview"

mp3_bytes: "40945789"
mp3_duration: "42:39"

guest: "Stetson Blake"
guest_avatar: "stetson-blake.jpg"
guest_website: "https://earlybrd.io/"
guest_twitter: "stets_10"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "docker"
  - "postgres"
  - "redis"
  - "aws"
  - "cdn"
  - "ubuntu"
  - "payments"

title: "EarlyBrd Alerts You of New Job Board Postings So You Can Bid Faster"
description:
  Stetson Blake shares his tech choices for building a SAAS app with Flask.
  It's all hosted on a single AWS EC2 instance.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built [EarlyBrd]({{ page.guest_website }}) using Flask which is a web framework
written in Python. This SAAS app focuses on sending out emails and it also
happens to use Stripe for subscriptions. It's been up since March 2019.

Stetson's motto has been to keep moving forward by writing code and making
decisions instead of getting hung up in endless research loops. His set up is
optimized for simplicity and to solve the problems he's run into so far as a
solo developer working on the project.

## Show Notes

- 1:44 -- Running the latest stable build of Flask and Python 3.7.x
- 2:24 -- Motivation for using Flask and Python
- 2:57 -- Grappling with Django vs Flask
- 3:38 -- Double edge sword, batteries included vs very few opinions
- 3:55 -- Community support was a big factor in choosing Flask
- 5:32 -- Stetson would choose Flask again if he re-wrote his app today
- 6:01 -- The site uses server side templates with Jinja and no JavaScript
- 6:55 -- Using what was built into Flask was a big factor in going with server side templates
- 7:30 -- The app's core functionality is emailing users when new jobs are available
- 7:56 -- Starting to use Celery to send emails through MailGun
- 8:46 -- The web front-end is basically a way to configure what emails you receive
- 9:38 -- Sticking to a content delivery strategy that works for your app
- 11:01 -- Earlybrd is mostly a monolithic application
- 11:23 -- Being a solo developer is a nice match for having a monolithic app
- 11:52 -- gunicorn is Stetson's Python web server of choice
- 12:13 -- PostgreSQL is being used as a database and everything runs in Docker
- 12:38 -- A separate Python service does a bit of work outside of Celery
- 13:18 -- There's no admin dashboard, DB interaction is done with TablePlus (a GUI app)
- 14:44 -- Finding a balance between making admin features vs user features
- 15:08 -- Redis is being used as a back-end for Celery
- 15:22 -- Everything is running in Docker containers through Docker Compose
- 16:18 -- gunicorn is exposed to the internet directly
- 17:14 -- AWS was chosen due to prior experience and loving it in general
- 18:00 -- Everything runs on a single `t2.micro` EC2 instance
- 18:40 -- Ubuntu 18.04 LTS is being used as the operating system
- 19:25 -- Prometheus and Grafana are being used for monitoring and they run in a home lab
- 21:31 -- Using a Python script, Dead Man's Snitch and Uptime Robot for down time alerts
- 22:29 -- What does Dead Man's Snitch do?
- 23:45 -- Using Sentry's free tier for getting notified of app errors
- 24:25 -- Using Slack to get notified of certain errors and alerts
- 24:50 -- Stripe is being used to handle subscriptions after the free trial ends
- 25:55 -- So many things for developers to learn and being surprised that anything works
- 26:24 -- Walking through a code deploy from Stetson's dev box into production
- 27:37 -- Building your Docker images on your server vs using a Docker registry
- 28:22 -- A little bit of down time between Docker Compose restarts
- 29:34 -- No automated tests before git pushing the code, just linting
- 29:47 -- The lack of tests mainly comes down to a lack of time
- 30:07 -- To test or not to test, that is the question
- 31:00 -- Daily sql dumps of the database to an S3 bucket managed by a cron job
- 31:38 -- Choosing between cron jobs and Celery periodic tasks on a set interval
- 32:48 -- Will everything come up if you forcefully reboot your server? Yep!
- 33:21 -- Applying the 80 / 20 rule when it comes to disaster recovery
- 34:21 -- Database migrations get run manually when necessary
- 35:02 -- The main app is roughly 1,000 to 1,500 lines of Flask / Python code
- 35:28 -- SQLAlchemy isn't being used because there was a lot on the plate already
- 36:52 -- Doing it the wrong way initially helps you understand why it might be wrong
- 38:01 -- Best tips? Just get moving to the best of your ability
- 38:54 -- Users not receiving alerts due to lack of monitoring was one mistake (but it's fixed)
- 40:16 -- End users (especially developers) tend to be forgiving with bugs if you're honest
- 40:41 -- Some developers enjoy hunting bugs and alerting someone if they found something
- 41:53 -- You can find Stetson [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) on Twitter and on [LinkedIn](https://www.linkedin.com/in/stetson-blake-31635252/), also check out [EarlyBrd]({{ page.guest_website }})

## Links

- <https://palletsprojects.com/p/flask/>
- <https://www.python.org/>
- <https://www.upwork.com/>
- <https://www.python.org/dev/peps/pep-0373/>
- <https://www.djangoproject.com/>
- <https://www.jetbrains.com/research/python-developers-survey-2018/>
- <https://www.php.net/>
- <https://palletsprojects.com/p/jinja/>
- <https://www.mailgun.com/>
- <https://github.com/celery/celery>
- <https://gunicorn.org/>
- <https://www.postgresql.org/>
- <https://tableplus.com/>
- <https://www.pgadmin.org/>
- <https://dbeaver.io/>
- <https://redis.io/>
- <https://www.docker.com/>
- <https://docs.docker.com/compose/>
- <https://aws.amazon.com/>
- <https://www.cloudflare.com/>
- <https://www.terraform.io/>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://www.linode.com/>
- <https://aws.amazon.com/ec2/instance-types/t2/>
- <https://en.wikipedia.org/wiki/Ubuntu>
- <https://en.wikipedia.org/wiki/Debian>
- <https://prometheus.io/>
- <https://grafana.com/>
- <https://github.com/prometheus/node_exporter>
- <https://deadmanssnitch.com/>
- <https://uptimerobot.com/>
- <https://sentry.io/>
- <https://slack.com/>
- <https://stripe.com/>
- <https://git-scm.com/book/en/v2/Git-on-the-Server-Getting-Git-on-a-Server>
- <https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks>
- <https://aws.amazon.com/ecr/>
- <https://aws.amazon.com/codepipeline/>
- <https://aws.amazon.com/codebuild/>
- <https://github.com/psf/black>
- <https://aws.amazon.com/s3/>
- <https://media.makeameme.org/created/i-dont-always-mt4th0.jpg>
- <https://github.com/sqlalchemy/sqlalchemy>
