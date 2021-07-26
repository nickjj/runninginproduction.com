---
layout: "podcast-or-interview"

mp3_bytes: "69291264"
mp3_duration: "1:12:10"

guest: "Karl Roos"
guest_avatar: "karl-roos.jpg"
guest_website: "https://www.politico.eu/"
guest_twitter: "karlroos"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "node"
  - "vue"
  - "python"
  - "algolia"
  - "aws"
  - "bugsnag"
  - "cloudformation"
  - "cloudfront"
  - "docker"
  - "elasticache"
  - "memcached"
  - "mysql"
  - "rds"
  - "redis"
  - "serverless"
  - "sns"
  - "sqs"
  - "terraform"

title: "Politico Europe Is a Business to Business News and Data Service"
description:
  Karl Roos talks about building a B2B news platform with Rails, Node and Python.
  It's hosted AWS using Elastic Beanstalk.
---

In this episode of Running in Production, {{ page.guest }} goes over building
a B2B news and data platform with Rails, Node and Python. It's hosted on AWS
using Elastic Beanstalk and has been up and running since 2014.

Karl talks about writing a Rails API back-end, scraping 400+ sites, executing
500k+ daily jobs, using a bunch of AWS resources, what it's like dealing with a
~500 GB MySQL database, the importance on taking action and more.

## Topics Include

- 1:55 -- What type of application we are talking about here?
- 4:41 -- Switching from PHP to a combo of Rails and Node
- 8:02 -- A few useful Ruby gems that were used to help build the app
- 9:41 -- The Vue front-end is for a customer facing dashboard
- 14:48 -- Where D3.js is being used to render charts and the data pipeline
- 17:43 -- Scraping data from 400+ sites and dealing with edge cases
- 21:38 -- The scraper runs on 10-16 EC2 instances through Elastic Beanstalk
- 26:04 -- Each separate service lives in its own git repository and a bit of Serverless
- 31:06 -- Sticking with the latest stable version of Rails and updating dependencies
- 33:10 -- Sprinkles of Python to glue together a few AWS services and translating languages
- 36:11 -- What it's like using Elastic Beanstalk and executing 500k+ jobs a day
- 40:04 -- Initial AWS credits helped sway the decision to try out AWS initially
- 43:47 -- How CloudFormation and Terraform are being used
- 48:59 -- All devs can push to production, code reviews, linting and the deploy process
- 54:21 -- Dealing with database migrations and a ~400-500 GB data set
- 1:01:17 -- Getting a local dump of the DB in development, seeding data and secrets
- 1:06:03 -- Database backups are done with the built in RDS snapshots
- 1:10:19 -- Best tips? Less thinking, more doing and learn from your experiments
- 1:11:35 -- Karl is on [GitHub](https://github.com/klr) and [Twitter](https://twitter.com/karlroos)

## Links

###### 📄 References

- <https://aws.amazon.com/elasticbeanstalk/>
- <https://github.com/localstack/localstack>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://graphql-ruby.org/>
- <https://www.apollographql.com/>
- <https://bulma.io/>
- <https://d3js.org/>
- <https://github.com/cheeriojs/cheerio>
- <https://www.serverless.com/>
- <https://codeclimate.com/>
- <https://github.com/typicode/husky>
