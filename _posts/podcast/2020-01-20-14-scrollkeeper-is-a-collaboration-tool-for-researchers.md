---
layout: "podcast-or-interview"

mp3_bytes: "53112960"
mp3_duration: "55:19"

guest: "Ian Butler"
guest_avatar: "ian-butler.jpg"
guest_website: "https://scrollkeeper.com/"
guest_twitter: "IanTB01"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "react"
  - "acm"
  - "aws"
  - "cloudfront"
  - "docker"
  - "ecs"
  - "gitlab-ci"
  - "lambda"
  - "postgres"
  - "route53"
  - "s3"
  - "serverless"
  - "stripe"

title: "ScrollKeeper Is a Collaboration Tool for Researchers"
description:
  Ian Butler talks us through building a document collaboration tool using
  Phoenix and Elixir. Everything is hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
collaboration tool for researchers called [Scrollkeeper]({{ page.guest_website
}}). Ian is all-in with AWS and hosting costs about $400 / month for a
multi-node AWS ECS cluster. It's been up and running since mid 2019.

His app is ~8,000 lines of Elixir code and there are a few things being done
through AWS Lambda. We talked about ways to run various AWS services locally,
auto-scaling, background workers, developing a custom caching solution and a
whole lot more.

## Show Notes

- 1:19 -- Working on it during nights and weekends as a part time project
- 2:03 -- Motivation for using Phoenix and Elixir
- 3:09 -- Ian is confident that if it came down to it, he could hire Elixir developers later
- 3:43 -- Generally speaking it's a monolithic app but it has a few tiny services broken out
- 4:15 -- At the moment there's not much benefit in breaking it out into umbrella apps
- 4:50 -- The main app is about 8,000 lines of Elixir and it's using Phoenix contexts
- 5:21 -- Phoenix has some opinions but you still need to make a lot of decisions
- 5:48 -- A couple of context names that are used in the main app
- 6:34 -- Parsing PDF files and doing some work in the background
- 7:40 -- Phoenix channels are used to ferry back the parser's status to the user
- 7:54 -- Live View isn't currently being used
- 8:08 -- It's a split app style with a Phoenix API and a React front-end
- 8:24 -- Live View currently doesn't have enough features to replace a React app
- 10:20 -- The PDF parsing rabbit hole goes quite deep
- 10:51 -- AWS ECS, AWS Lambda and a service called Spotinst helps run and scale the app
- 12:16 -- Docker isn't being used in development but tests are run in Docker
- 12:52 -- Gitlab CI handles testing, building images and pushing them to ECR
- 13:54 -- Why exactly isn't Docker being used in development?
- 14:41 -- Testing various AWS services locally using Local Stack
- 16:21 -- Local Stack is open source and free but they also have a paid tier if you want it
- 17:32 -- PostgreSQL is the primary database and S3 is used for storing flat files
- 17:54 -- The ex_aws library is used to connect to AWS using Elixir
- 18:43 -- Caching is being done directly in Elixir with a custom GenServer approach
- 20:27 -- What exactly is being cached? Mainly the PDF documents
- 21:11 -- nginx isn't being used because AWS' API Gateway and load balancers fill that role
- 21:26 -- Static files are being hosted with AWS CloudFront (CDN)
- 21:53 -- Going all-in with AWS and being very happy with it for productivity
- 22:57 -- 3 to 6 EC2 instances are used in the ECS cluster depending on the load
- 23:14 -- Scaling up is automated and takes about 30 seconds
- 23:37 -- Spotinst helps with that by having idle machines that are ready to go
- 23:57 -- The highest load comes from uploading many fairly large PDF files in parallel
- 24:44 -- Between AWS' and Spotinst' logs and alarms, it's easy to keep an eye on the load
- 25:53 -- Stripe is being used to handle payments and the payment strategy is interesting
- 26:58 -- Moving to Stripe's hosted checkout eventually would remove a lot of stress
- 27:46 -- Currently PaymentIntents and SCA isn't supported by choice
- 29:10 -- Handling payments was the last feature that was added to the app before shipping
- 30:16 -- PayPal isn't supported yet because there's only so many hours in the day
- 31:09 -- The only emails being sent out are for user actions which is handled by Cognito
- 32:01 -- Walking us through a deployment from development to production
- 33:13 -- ECS has gotten a little nicer to work with in regards to updating services
- 34:17 -- Having issues with AWS App Mesh and Envoy due to issues with websockets
- 36:27 -- Secrets are managed with env variables hard coded into the task definition files
- 37:56 -- The AWS web console is starting to become quite good
- 39:14 -- Rolling restarts are done over ECS to deploy without downtime
- 39:52 -- How do you deal with draining worker connections to avoid losing partial uploads?
- 41:11 -- Rihanna is an Elixir job processing library backed by PostgreSQL
- 42:00 -- You usually end up needing a job processing library even with Elixir
- 44:03 -- As for backups, all of the data and flat files are backed up and could be recovered
- 44:45 -- IP bans at the firewall level helps with denial of service attacks
- 45:48 -- Everything together on AWS costs about $400 / a month
- 47:13 -- Gust Launch gave him $15,000 in AWS credits for starting a business with them
- 48:38 -- Trying to crash things on purpose by throwing massive traffic at it
- 49:25 -- Thinking that all users are out to get you and designing your app to be robust
- 50:18 -- `Plug.Upload` goes straight to S3 to handle file uploads
- 51:31 -- Best tips? Profile and load test your app before you launch your app publicly
- 52:35 -- If you have a lot of task based jobs, look into using Lambda early on
- 54:06 -- Check out [Scrollkeeper]({{ page.guest_website}}), also Ian is on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and [GitHub](https://github.com/GrandathePanda)
- 54:41 -- Ian also wrote a [blog post series](https://www.reddit.com/r/elixir/comments/emdnfo/first_post_in_a_series_on_how_to_build_a_web/) on writing your own web crawler in Elixir

## Links

###### 📄 References

- <https://spotinst.com/>
- <https://github.com/localstack/localstack>
- <https://www.envoyproxy.io/>
- <https://docs.microsoft.com/en-us/azure/architecture/patterns/sidecar>
- <https://github.com/samphilipd/rihanna>
- <https://gust.com/launch>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/mozilla/pdf.js>
- <https://github.com/ex-aws/ex_aws>
- <https://github.com/samsondav/rihanna>
