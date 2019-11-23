---
layout: "podcast-or-interview"

mp3_bytes: "55765368"
mp3_duration: "58:05"

guest: "Andrew Brown"
guest_avatar: "andrew-brown.jpg"
guest_website: "https://www.exampro.co/"
guest_twitter: "andrewbrown"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "postgres"
  - "aws"
  - "payments"

title: "A Video Based AWS Certificate Training Platform Called Exam Pro"
description:
  Andrew Brown talks about using Ruby on Rails to build an AWS certificate
  training platform called Exam Pro. He is all-in with AWS.
---

In this episode of Running in Production, Andrew Brown talks about how he and
his team use Ruby on Rails to build an AWS certification training platform
called [Exam Pro]({{ page.guest_website }}). We talked about a huge range of
AWS services and how they all come together to run and deploy his application.

They've gone all-in with AWS. Even their development environment is running on
AWS using Cloud9 IDE. Exam Pro has been running in production since late 2018.

## Show Notes

- 1:21 -- A small team of developers actively work on the Exam Pro platform
- 2:40 -- Motivation for using Ruby on Rails
- 4:52 -- Would you use Rails again if you rewrote your app today?
- 5:21 -- Monoliths are optimized for developer happiness not DevOps happiness
- 7:29 -- Bypassing ActiveRecord to run raw SQL queries for database reads
- 8:19 -- Using Rails Engines to break up the admin dashboard from the main app
- 9:22 -- Trade offs for using 1 git repo vs multiple git repos
- 10:18 -- Server side templates and a bit of JavaScript or an API back-end with lots of JS?
- 11:36 -- Soon enough the front-end code will be completely separate and hosted on S3
- 12:02 -- Pain points of using the asset pipeline and Rails specific build tools
- 13:57 -- Action Cable is being used for something (but we don't know what haha)
- 14:53 -- Not using Sidekiq for background tasks, instead AWS SQS and the Ruby AWS SDK
- 16:47 -- Docker is being used to run tests but not for dev and prod
- 18:38 -- Cloud9 IDE is being used in development as an AWS based dev environment
- 20:03 -- AWS Aurora is being used to manage a PostgreSQL database
- 21:01 -- Your data is your most important asset, don't leave it to chance
- 22:10 -- A recap on what AWS SQS is and how it compares to Sidekiq, Resque or DelayedJob
- 23:26 -- The main app responds back in 50-60 milliseconds without caching
- 25:29 -- We never touch our servers, not even to SSH into them
- 26:40 -- The Rails app is fronted by CloudFront and a load balancer, but not nginx
- 27:21 -- SSL is terminated at the ELB level, not at each individual EC2 instance
- 28:27 -- Comparing ELB to ALB and even NLB
- 29:07 -- Strategies for migrating away from a monolithic application
- 29:59 -- An S3 outage story that lead to using multi-region DNS fail over using Route 53
- 32:47 -- What about error reporting, logging, monitoring and metrics?
- 35:27 -- Sending transactional and campaign emails with SES and PinPoint
- 37:32 -- Setting up 3rd party services with infrastructure as code tools is a huge win
- 39:24 -- Sometimes there's exceptions to the above, such as using Stripe to accept payments
- 41:08 -- Configuration management on AWS with CloudFormation and Systems Manager
- 44:14 -- They are using Amazon Linux 2 as their distro of choice
- 45:00 -- Overall hosting costs less than $500 / month after all is said and done
- 45:49 -- Zero down time deploys using blue / green deployments across 3 web servers
- 47:36 -- Walking through a code deploy using various AWS resources and services
- 50:09 -- Is is worth using managed services / mini-Heroku alternatives instead?
- 51:01 -- Everyone Andrew knows who uses Heroku ends up leaving due to how pricey it is
- 52:20 -- How do Rails database migrations get run?
- 52:42 -- AWS really helps with database backups and disaster prevention / recovery
- 55:08 -- Best tips and advice? Build a ton of apps and automate as much as possible
- 56:25 -- You can find Andrew on [Exam Pro]({{ page.guest_website }}),
    [LinkedIn](https://www.linkedin.com/in/andrew-wc-brown/),
    [YouTube](https://www.youtube.com/ExamProChannel),
    [dev.to](https://dev.to/andrewbrown),
    [GitHub](https://github.com/omenking) and
    [Twitter](https://twitter.com/{{ page.guest_twitter }}).

## Links

- <https://rubyonrails.org/>
- <https://www.ruby-lang.org/en/>
- <https://www.exampro.co/>
- <https://en.wikipedia.org/wiki/Ruby_on_Rails>
- <https://en.wikipedia.org/wiki/Systemd>
- <https://github.com/puma/puma>
- <https://en.wikipedia.org/wiki/Serverless_computing>
- <https://en.wikipedia.org/wiki/Isomorphic_JavaScript>
- <https://en.wikipedia.org/wiki/Domain-specific_language>
- <https://guides.rubyonrails.org/engines.html>
- <https://github.com/ExamProCo/dilithium.js>
- <https://github.com/rails/webpacker>
- <https://edgeguides.rubyonrails.org/action_cable_overview.html>
- <https://github.com/mperham/sidekiq>
- <https://aws.amazon.com/sqs/>
- <https://aws.amazon.com/kinesis/>
- <https://aws.amazon.com/fargate/>
- <https://aws.amazon.com/lambda/>
- <https://aws.amazon.com/step-functions/>
- <https://aws.amazon.com/sdk-for-ruby/>
- <https://github.com/phstc/shoryuken>
- <https://www.docker.com/>
- <https://en.wikipedia.org/wiki/Center_for_Internet_Security>
- <https://aws.amazon.com/inspector/>
- <https://aws.amazon.com/cloud9/>
- <https://www.postgresql.org/>
- <https://aws.amazon.com/cloudformation/>
- <https://aws.amazon.com/rds/aurora/>
- <https://aws.amazon.com/systems-manager/>
- <https://docs.aws.amazon.com/elasticloadbalancing/latest/application/introduction.html>
- <https://aws.amazon.com/cloudfront/>
- <https://aws.amazon.com/waf/>
- <https://docs.aws.amazon.com/acm/latest/userguide/acm-overview.html>
- <https://aws.amazon.com/ecs/>
- <https://aws.amazon.com/route53/>
- <https://en.wikipedia.org/wiki/Failover>
- <https://www.datadoghq.com/>
- <https://en.wikipedia.org/wiki/Application_performance_management>
- <https://aws.amazon.com/cloudwatch/>
- <https://aws.amazon.com/ses/>
- <https://aws.amazon.com/pinpoint/>
- <https://www.terraform.io/>
- <https://dev.to/>
- <https://stripe.com/>
- <https://en.wikipedia.org/wiki/Payment_Card_Industry_Data_Security_Standard>
- <https://aws.amazon.com/amazon-linux-2/>
- <https://aws.amazon.com/ec2/instance-types/t2/>
- <https://martinfowler.com/bliki/BlueGreenDeployment.html>
- <https://aws.amazon.com/elasticbeanstalk/>
- <https://aws.amazon.com/codebuild/>
- <https://codeclimate.com/>
- <https://aws.amazon.com/codepipeline/>
- <https://aws.amazon.com/codedeploy/>
- <https://capistranorb.com/>
- <https://aws.amazon.com/api-gateway/>
- <https://en.wikipedia.org/wiki/Macro_(computer_science)>

## Shameless Plugs

- Nick: Want to learn Docker? Join thousands of others in my
  [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
  video course
