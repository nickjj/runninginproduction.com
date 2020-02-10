---
layout: "podcast-or-interview"

mp3_bytes: "53336832"
mp3_duration: "55:33"

guest: "Julien Blanchard"
guest_avatar: "julien-blanchard.jpg"
guest_website: "https://www.smartmusic.com/"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "phoenix"
  - "elixir"
  - "dotnet-core"
  - "react"
  - "nginx"
  - "postgres"
  - "influxdb"
  - "redis"
  - "aws"
  - "kubernetes"
  - "ci"
  - "payments"

title: "Smart Music Helps Musicians Practice More Efficiently"
description:
  Julien Blanchard talks about building a service with Rails, Phoenix and .NET
  Core. It's deployed on AWS EKS and Elastic Beanstalk.
---

In this episode of Running in Production, {{ page.guest }} goes over building
[Smart Music]({{ page.guest_website }}) which uses a combination of Rails,
Phoenix and .NET Core. It has roughly half a million users and it's all hosted
on AWS with EKS, ECS and Elastic Beanstalk. It's been up and running since
2016.

There's around 20 developers working on the project. We talked about managing
git repos with a few apps, TDD, using GraphQL with Phoenix, contexts, multiple
databases with Rails, InfluxDB, GitHub Actions and tons more.

## Show Notes

- 2:41 -- Roughly half a million users are on the platform (~1.5k requests a minute at times)
- 3:27 -- What Rails, Phoenix and .NET Core are being used for
- 5:38 -- End users of the site interact with the Rails app and .NET Core is for authentication
- 6:10 -- It's an API back-end driven app and React / EmberJS is used on the front-end
- 6:35 -- Motivation for using Phoenix and Elixir for the data ingesting app
- 9:28 -- About 20 developers work on all of the different parts of the site
- 9:55 -- Organizing the git repos for each of the apps
- 10:34 -- The back-end code has many tens of thousands of lines of code
- 11:04 -- TDD is something their company practices and they like it a lot
- 12:24 -- A JS front-end makes sense for this app since the UI is live and dynamic
- 13:17 -- Trying to visualize a live sheet music application that helps you learn notes
- 14:02 -- Maybe Phoenix LiveView could have been used, but they prefer what they chose
- 14:33 -- The TL;DR on GraphQL and why in this case it works better than a RESTful API
- 17:55 -- Docker isn't being used in dev, but Kubernetes is being used in production
- 18:29 -- PostgreSQL, InfluxDB and Redis are used to manage the data and for caching
- 19:32 -- They knew from the start that InfluxDB would be needed to store the time data
- 20:33 -- Redis is being used as a cache through AWS ElastiCache
- 21:49 -- nginx is sitting in front of the Rails application with Elastic Beanstalk
- 22:44 -- Motivation for picking AWS over Google Cloud and other providers
- 23:40 -- AWS Aurora is being used to manage PostgreSQL
- 24:51 -- They are using the Rails 6.x feature to select multiple databases
- 25:33 -- Rails is very nice when it comes to getting community driven features merged in
- 26:08 -- Julien also really likes Phoenix and here's how they use contexts
- 28:50 -- File uploads are sent directly to S3 using the `ex_aws` Elixir library
- 30:02 -- For Kubernetes, they are using the managed EKS service from AWS
- 31:07 -- (2) pretty beefy boxes with 8 GB of memory power the EKS cluster (overkill)
- 31:36 -- They are still feeling out the resource usage of their services
- 32:18 -- (20)'ish EC2 instances power the Elastic Beanstalk set up for the Rails app
- 32:54 -- CloudFront is being used as a CDN for book covers but not much else
- 33:38 -- Walking us through a code deploy from development to production
- 34:46 -- Getting rid of Jenkins is the next step but GitHub Actions is a bit insecure currently
- 35:49 -- GitHub Actions is a great tool and it's being used for more than just CI
- 36:44 -- You can use GitHub Actions to run tasks periodically (separate from git pushes)
- 37:27 -- Dealing with big database migrations with scheduled down time
- 38:54 -- New Relic and the ELK stack take care of metrics and logging
- 39:18 -- Sentry.io (self hosted version) is being used to track exceptions
- 39:42 -- The time series data doesn't end up getting logged by these tools
- 40:20 -- Braintree is used as a payment gateway to handle credit card and PayPal payments
- 41:44 -- Transactional emails are being sent through AWS SES
- 42:24 -- In app notifications are coming soon to SmartMusic (websockets, etc.)
- 44:05 -- Another use case for websockets and events will be for collaboration features
- 44:49 -- The databases are backed up daily and S3 is very redundant in itself for user files
- 45:31 -- VictorOps handles alerting if a service happens to go down
- 45:58 -- New Relic is being used in a few of the applications
- 46:55 -- Handling bot related issues with nginx's allow / deny IP address feature
- 48:46 -- Best tips? Make a solid proof of concept in your new tech before switching to it fully
- 50:36 -- Biggest mistake? Trying to use your old coding habits in a different language
- 51:27 -- Dealing with N + 1 queries with GraphQL using DataLoader 
- 52:58 -- Ecto Multi is awesome for ensuring multiple things happen successfully
- 54:10 -- Check out [Julien's blog](http://julienblanchard.com/), [@julienXX](https://github.com/julienXX) on GitHub and he's on [Source Hut](https://git.sr.ht/~julienxx/)

## Links

- <https://rubyonrails.org/>
- <https://www.ruby-lang.org/en/>
- <https://github.com/phoenixframework/phoenix>
- <https://elixir-lang.org/>
- <https://docs.microsoft.com/en-us/dotnet/core/>
- <https://en.wikipedia.org/wiki/Practice_(learning_method)#Deliberate_practice>
- <https://www.w3.org/2017/12/musicxml31/>
- <https://reactjs.org/>
- <https://emberjs.com/>
- <https://graphql.org/>
- <https://en.wikipedia.org/wiki/Test-driven_development>
- <https://docker.com/>
- <https://kubernetes.io/>
- <https://www.postgresql.org/>
- <https://redis.io/>
- <https://www.influxdata.com/>
- <https://aws.amazon.com/elasticache/>
- <https://nginx.org/>
- <https://aws.amazon.com/elasticbeanstalk/>
- <https://aws.amazon.com/elasticloadbalancing/>
- <https://aws.amazon.com/rds/aurora/>
- <https://guides.rubyonrails.org/active_record_multiple_databases.html>
- <https://hexdocs.pm/phoenix/contexts.html>
- <https://en.wikipedia.org/wiki/Domain-driven_design>
- <https://github.com/ex-aws/ex_aws>
- <https://aws.amazon.com/s3/>
- <https://aws.amazon.com/eks/>
- <https://aws.amazon.com/ecr/>
- <https://aws.amazon.com/ecs/>
- <https://aws.amazon.com/app-mesh/>
- <https://aws.amazon.com/cloudfront/>
- <https://aws.amazon.com/codedeploy/>
- <https://github.com/features/actions>
- <https://jenkins.io/>
- <https://github.com/dependabot>
- <https://newrelic.com/>
- <https://www.elastic.co/what-is/elk-stack>
- <https://sentry.io/welcome/>
- <https://www.braintreepayments.com/>
- <https://aws.amazon.com/ses/>
- <https://github.com/absinthe-graphql/absinthe>
- <https://victorops.com/>
- <http://nginx.org/en/docs/http/ngx_http_access_module.html>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>
- <https://stackoverflow.com/questions/97197/what-is-the-n1-selects-problem-in-orm-object-relational-mapping>
- <https://github.com/graphql/dataloader>
- <https://hexdocs.pm/ecto/Ecto.Multi.html>
- <https://sourcehut.org/>

## Shameless Plugs

- Nick: Want to learn Docker? Join thousands of others in my
  [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
  video course
