---
layout: "podcast-or-interview"

mp3_bytes: "87624960"
mp3_duration: "1:31:16"

guest: "Jason Swett"
guest_avatar: "jason-swett"
guest_website: "https://meadowseye.com/"
guest_twitter: "jasonswett"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "ansible"
  - "aws"
  - "eks"
  - "elasticache"
  - "elasticsearch"
  - "kubernetes"
  - "nginx"
  - "postgres"
  - "rds"
  - "redis"
  - "s3"
  - "stimulusjs"

title: "A Custom Electronic Medical Record System for an Ophthalmology Clinic"

description:
  Jason Swett goes over creating a medical app with Rails. It's hosted on AWS
  using Kubernetes and has been up and running since 2019.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an internal medical record system with Ruby on Rails. It's hosted on AWS using
Kubernetes and it's been up and running since 2019.

Jason talks about replacing a few 3rd party services with 1 custom solution,
using custom generators, embracing PORO, transitioning from Ansible and
individual servers to Kubernetes, making safe decisions while learning as you
deploy new things and much more.

## Topics Include

- 1:14 -- The dream is to replace 9 separate systems with 1 custom solution
- 3:02 -- Deploying on day 1 and what exactly is an EMR?
- 6:20 -- Motivation for choosing Ruby on Rails to build a medical system
- 10:39 -- Infrastructure as code is important
- 13:36 -- The app does scheduling and soon emails will be sent to patients
- 15:29 -- Specific things the app does and how Rails helps Jason accomplish them
- 21:56 -- Custom generators are used for different modules
- 25:11 -- Every 5 seconds certain forms are auto-saved and a few gems that are being used
- 27:56 -- Rails can only help you so much, then you're kind of on your own
- 34:10 -- Making a distinction between imperative and declarative code
- 36:36 -- Server rendered templates with sprinkles of Javascript (StimulusJS)
- 43:53 -- Looking into using Hotwire Turbo in the distant future
- 45:41 -- Migrating to use Elasticsearch and using it over PostgreSQL's full text search
- 47:49 -- Using AWS for hosting and landing on using Kubernetes with EKS
- 52:57 -- 5% of Jason's brain is taken up at all times knowing he's on-call
- 55:22 -- Switching from individual servers with Ansible to Kubernetes
- 59:37 -- Using eksctl and Helm to move towards infrastructure as code
- 1:06:12 -- The deploy process from development to production with Kubernetes
- 1:09:53 -- Using feature flags and code reviews
- 1:11:35 -- Handling database migrations with a load balanced application
- 1:15:13 -- A strategy for writing Jira tickets
- 1:17:53 -- RDS snapshots are handling database backups
- 1:21:14 -- Monitoring, alerting and the idea of "sharpening the saw"
- 1:25:47 -- Best tips? Make safe decisions and improve skills such as reading documentation
- 1:30:44 -- Check out Jason's site at <https://www.codewithjason.com/>

## Links

###### 📄 References

- <https://twitter.com/dhh> (Creator of Rails)
- <https://en.wikipedia.org/wiki/Electronic_data_interchange>
- [Jason's podcast where Nick was a guest talking about freelancing, Docker and Kubernetes](https://www.codewithjason.com/code-with-jason-podcast/episodes/111-dockerizing-development-and-production-with-nick-janetakis-Qo4XwuSP/)
- <https://rtpg.co/2021/06/07/changes-checklist.html> (Database migration steps)
- <https://nickjanetakis.com/blog/learning-a-new-web-framework-with-question-driven-development>
- <https://www.codewithjason.com/best-programming-tips/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/mperham/sidekiq>
- <https://github.com/heartcombo/simple_form>
- <https://github.com/weaveworks/eksctl>
- <https://helm.sh/>
