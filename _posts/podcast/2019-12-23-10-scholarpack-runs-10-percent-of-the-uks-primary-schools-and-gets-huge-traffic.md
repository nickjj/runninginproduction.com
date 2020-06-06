---
layout: "podcast-or-interview"

mp3_bytes: "73524864"
mp3_duration: "1:16:35"

guest: "Gareth Thomas"
guest_avatar: "gareth-thomas.jpg"
guest_website: "https://scholarpack.com/"
guest_twitter: "thestub"

category: "podcast"
tags:
  - "flask"
  - "zope"
  - "python"
  - "aws"
  - "centos"
  - "cloudfront"
  - "cloudwatch"
  - "datadog"
  - "docker"
  - "ecs"
  - "fargate"
  - "jenkins"
  - "postgres"
  - "rds"
  - "redis"
  - "slack"
  - "terraform"

title: "ScholarPack Runs 10% of the UK's Primary Schools and Gets Huge Traffic"
description:
  Gareth Thomas talks about scaling a school management system with Flask to
  handle 65k / reqs per second. It's deployed on AWS Fargate.
---

In this episode of Running in Production, {{ page.guest }} goes over running a
platform that helps manage 3.5+ million students. There's over 1,500 databases
and it peaks at 65k requests per second. A legacy Zope server and a series of
Flask microservices power it all on AWS Fargate.

[ScholarPack](https://scholarpack.com/) been running in production since 2010.
This episode is loaded up with all sorts of goodies related to running
microservices at scale, handling multi-tenancy databases with PostgreSQL,
aggressively using feature flags and so much more.

## Topics Include

- 0:57 -- The current stack is a legacy Zope system combined with Flask
- 1:27 -- ScholarPack has been running for 12+ years and Zope was very popular then
- 2:12 -- 10% of the schools in the UK are using ScholarPack, it peaks at 65k reqs / second
- 2:40 -- Their traffic patterns are predictable based on a school's working hours
- 3:39 -- Feature development during school sessions / architecture upgrades during holidays
- 4:36 -- Zope vs Flask and the main reason they wanted to move to Flask
- 6:20 -- Since Flask is so flexible, you need to be on the ball with setting standards
- 7:06 -- 17-18 folks deal with the infrastructure and development of the project
- 7:31 -- Gareth has a fetish for microservices but it really does fit well for their app
- 8:00 -- Microservices let you split out your responsibilities and independently scale
- 8:47 -- At their scale, downtime can have a serious impact on the kids at school
- 10:16 -- A well maintained skeleton app works wonders for working with microservices
- 11:15 -- A developer's workflow for starting and working with a microservice
- 12:10 -- Mocking responses for unrelated services helps with the development process
- 14:32 -- Dealing with multi-tenancy across 1,500+ databases using SQLAlchemy binds
- 16:59 -- Splitting the data up with a foreign key and 1 database would be too risky
- 18:02 -- A school's database gets picked from a sub-domain / unique URL
- 19:15 -- What it's like running database migrations on 1,500+ databases with PostgreSQL
- 20:03 -- Point in time database backups make running so many migrations less scary
- 20:52 -- Point in time backups are why they are on AWS instead of GCP
- 22:26 -- Most services render Jinja on the server with sprinkles of JavaScript
- 23:08 -- Supporting browsers like IE8 limits what you can do on the front-end
- 24:58 -- IE8 is getting a little crusty, but it's necessary to support it
- 26:29 -- Redis and CloudFront are the 2 only other services being used in their stack
- 27:39 -- Using signed cookies vs Redis for storing session state
- 28:56 -- What about Celery and background workers? Most things are synchronous
- 29:41 -- Celery could still be used in the future since it has benefits
- 30:13 -- Schools do pay to use this service, but not with a credit card
- 34:32 -- Using checks has an advantage of not needing a billing back-end
- 36:04 -- Cost and scaling requirements of their old platform lead them to AWS Fargate
- 37:34 -- GCP was looked into initially but the lack of point in time backups killed that idea
- 38:07 -- The added complexity of going multi-cloud wasn't worth it and RDS won
- 38:50 -- Managed Kubernetes is not that great on AWS (especially not in 2017)
- 39:03 -- ECS was also not going to work out due to their scaling requirements
- 39:20 -- Fargate allows them to focus on scaling containers, not compute resources
- 40:21 -- The TL;DR on what AWS Fargate allows you to do and not have to worry about
- 42:25 -- Their microservices set up fits well with the Fargate style of scaling
- 43:11 -- You still need to allocate memory and CPU constraints on your containers
- 44:40 -- Everything runs in the AWS UK region across its multiple availability zones
- 45:10 -- AWS initially limits you to 50 Fargate containers but you can easily raise that cap
- 46:06 -- Setting a cap on the number of containers Fargate will ever spawn
- 46:30 -- Pre-warming things to prepare for the massive traffic spike at 9am
- 47:25 -- It's fun to watch the traffic spikes on various dashboards
- 48:05 -- Number of requests per host is their primary way to measure scaling requirements
- 48:32 -- DataDog plays a big role in monitoring and reporting
- 49:08 -- But CloudWatch is used too and DataDog alerts get sent to Slack
- 49:28 -- Jira is used for error logging and ticket management
- 49:44 -- 100s of errors occur a day in the legacy Zope system, but they are not serious
- 50:32 -- It's very rare to have a system level error where things are crashing
- 50:45 -- The longest down time in the last 3.5 years has been 35 minutes
- 51:10 -- All of the metrics to help detect errors have a strong purpose
- 52:16 -- Walking through a deployment from development to production
- 52:29 -- The Zope deployment experience has been a dream come true
- 54:02 -- The Flask deployment has more steps but it's still very automated
- 55:59 -- Dealing with the challenges of doing a rolling restart
- 57:12 -- Complex database changes are done after hours with a bit of down time
- 57:41 -- That's a great time to do a Friday evening deploy!
- 57:56 -- Most new additions are behind a feature toggle at the Flask level
- 58:35 -- Feature flags can be tricky but a good mindset helps get everyone on board
- 1:00:08 -- A company policy combined with experience dictates best practices
- 1:00:43 -- Switching from Flask-RESTPlus to Connexion
- 1:01:03 -- What is Connexion and how does it compare to other API libraries?
- 1:03:07 -- It only took a few days to get a real API service running with Connexion
- 1:04:04 -- Everything is in git, it's all deterministic and they use Pipenv with lock files
- 1:04:57 -- The Zope structure is in a RAID file system and has daily backups
- 1:05:27 -- Extensive user auditing is done at the database level (everything is logged)
- 1:07:06 -- The audit tables get a huge amount of writes
- 1:07:38 -- (10) `t3.2xlarge` (8 CPU cores / 32 GB of memory) instances power the RDS database
- 1:08:07 -- How much does it all cost on AWS? Too much!
- 1:08:49 -- The cloud is nice but you need to really keep tabs on your bills
- 1:09:54 -- Gareth spends 2 days a month reviewing the AWS bills
- 1:10:16 -- RDS will automatically restart stopped instances after 7 days
- 1:11:18 -- Best tips? Look at what you have, what you want to do and how to get there
- 1:12:36 -- A microservice should be broken up by its scope / domain, not lines of code
- 1:13:24 -- There is no "wrong", there is only the thing that works
- 1:13:50 -- One mistake they did early on was try to be too perfect which delayed shipping
- 1:15:34 -- Gareth is on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})
             and his personal site is at <https://munci.co.uk>

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Single_responsibility_principle>
- <https://git-scm.com/book/en/v2/Customizing-Git-Git-Hooks>
- <https://www.getpostman.com/>
- <https://aws.amazon.com/fargate/>
- <https://docker.com>
- <https://flask-sqlalchemy.palletsprojects.com/en/2.x/binds/>
- <https://en.wikipedia.org/wiki/Universally_unique_identifier>
- <https://en.wikipedia.org/wiki/Benefit_corporation>
- <https://aws.amazon.com/rds/>
- <https://github.com/helm/helm>
- <https://www.elastic.co/what-is/elk-stack>
- <https://en.wikipedia.org/wiki/Open_API>
- <https://www.thoughtworks.com/insights/blog/microservices-nutshell>
- <https://martinfowler.com/articles/break-monolith-into-microservices.html>
- <https://martinfowler.com/bliki/StranglerFigApplication.html>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.zope.org/>
- <https://www.sqlalchemy.org/>
- <https://github.com/psf/black>
- <https://github.com/pgbouncer/pgbouncer>
- <https://github.com/zalando/connexion>
