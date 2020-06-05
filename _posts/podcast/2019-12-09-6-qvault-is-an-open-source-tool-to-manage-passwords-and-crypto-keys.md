---
layout: "podcast-or-interview"

mp3_bytes: "54237727"
mp3_duration: "56:29"

guest: "Lane Wagner"
guest_avatar: "lane-wagner.jpg"
guest_website: "https://qvault.io/"
guest_twitter: "wagslane"

category: "podcast"
tags:
  - "golang"
  - "electron"
  - "acm"
  - "aws"
  - "cloudformation"
  - "cloudfront"
  - "cloudwatch"
  - "open-source"
  - "postgres"
  - "rds"
  - "route53"
  - "s3"
  - "serverless"
  - "travis-ci"
  - "vue"

title: "Qvault Is an Open Source Tool to Manage Passwords and Crypto Keys"
description:
  Lane Wagner walks us through building and deploying an Electron app that has
  a Serverless component written in Golang. It's all on AWS.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built [Qvault]({{ page.guest_website }}) which is an open source password
manager that specializes in cryptocurrency. It's built with Electron and has
a Serverless component that uses Golang. It's all hosted on AWS.

If you were ever wondering how Serverless works in the context of building a
native or web application this episode has you covered. Lane talks about how a
bunch of different AWS services all come together to make it work. We also talk
about a Serverless framework called Serverless!

## Show Notes

- 1:03 -- Qvault is an Electron based password manager with a focus on cryptocurrency
- 2:16 -- The focus has been a secure desktop app but a browser extension is coming soon
- 2:45 -- Creating a secure browser extension without sharing your master key
- 3:12 -- It's an [open source app](https://github.com/Q-Vault/qvault), so if you're skeptical you can compile it yourself
- 3:46 -- Motivation for using Golang for the Serverless component
- 5:00 -- For personal projects learning something new (Serverless) is worthwhile
- 5:48 -- The TL;DR on what Serverless is and how it works
- 6:49 -- AWS API Gateway helps map Serverless functions to HTTP requests
- 7:05 -- Instead of 1 app with many routes, you have many individual functions
- 7:50 -- A Serverless framework called Serverless helps tie everything together
- 8:33 -- Tying in a Serverless function to a specific URL endpoint
- 9:25 -- Calling these URL endpoints from the Electron app is like any other REST API
- 10:40 -- What's being executed within these Serverless functions?
- 11:12 -- When it comes to Bitcoin and cryptocurrencies, it's all about privacy and security
- 12:13 -- Passwords are encrypted client side in the Electron app
- 13:17 -- Encrypted vault file gets saved client side and it's optionally saved server side too
- 14:01 -- This data is stored inside of PostgreSQL using RDS within AWS
- 14:20 -- Electron app -> API endpoint -> Serverless function -> data gets written to Postgres
- 14:49 -- Using a managed database vs managing your own database
- 15:28 -- The developer / development experience for writing Serverless functions
- 17:41 -- When hacking on a new Serverless function, it just gets pushed to production
- 18:37 -- The 2 biggest Serverless wins are function isolation and scaling auto-magically
- 18:56 -- Serverless scales to the size of your wallet
- 19:21 -- But it also costs nothing if no one is using it
- 20:02 -- The turn around time for AWS to spin up an environment to run a Serverless function
- 20:35 -- Function warming helps keep spin up times to milliseconds
- 21:44 -- There are tricks to keep your functions warm to avoid a multi-second spin up time
- 22:21 -- For Qvault's API, response times were never a problem partly due to using Golang
- 22:53 -- The Electron app is written in JavaScript using Vue
- 23:28 -- Electron is basically a browser bundled with a specific JavaScript app
- 23:56 -- Electron apps can be pretty bloated but it's super convenient to develop with
- 24:45 -- On Arch someone made a package that tries to use what you have installed already
- 25:43 -- A recap of which AWS services are being used
- 26:02 -- Using Route 53 on AWS for DNS hosting saves a lot of headaches
- 27:15 -- Wait, how is CloudFront (Amazon's CDN) being used on the back-end?
- 28:24 -- It's not, but CloudFormation is (it's so easy to mix up AWS service names!)
- 28:33 -- The TL;DR on what CloudFormation is, how it's being used and why it's useful
- 29:29 -- Serverless framework converts platform agnostic configs into platform specific configs
- 30:03 -- CloudFormation is especially handy for Serverless due to the number of endpoints
- 30:44 -- Every Serverless endpoint is being served over HTTPS with Amazon's ACM SSL certs
- 31:31 -- There are no external software as a service dependencies besides what's on AWS
- 32:04 -- For logging, error reporting and metrics it's all AWS services
- 32:36 -- Getting logs from a Serverless function involves using CloudWatch and S3
- 32:53 -- One nice thing about Serverless is there's no long running state
- 33:45 -- Strategies for dealing with database migrations with a Serverless set up
- 34:53 -- Dealing with long running migrations that surpass AWS Lambda's 15 minute timeout
- 36:41 -- Lane is a big fan of CI / CD and the master branch always matching production
- 37:13 -- A CI pipeline is being used for the Electron app with Travis CI
- 37:28 -- The Electron app has an auto-update function to check for updates on demand
- 38:09 -- The Serverless side of things doesn't change much and there is no CI pipeline
- 38:42 -- The turn around time is nearly instant for a new function version to take effect
- 39:59 -- The Serverless framework sets environment variables for secret / sensitive values
- 41:01 -- The work flow for changing a sensitive value to an existing Serverless function
- 43:18 -- Dealing with disasters and malicious users
- 44:00 -- Qvault hashes passwords before it's sent to the server
- 45:50 -- Running all of this on AWS costs in between $20 and $30 / month
- 46:36 -- On AWS it's easy to upgrade to a larger instance size but it's hard to downgrade
- 46:42 -- The RDS instance is running on a `t2.micro` since the DB is very simple
- 47:34 -- Most of the app's complexity is client side in the Electron app
- 48:10 -- There's 53k+ lines of code but that includes the `node_modules/` directory
- 48:37 -- The app itself has about 3-5k lines of code across ~40 files
- 49:01 -- The complexity being on the front-end is necessary due to security requirements
- 49:32 -- Lessons learned? Serverless couples your app logic to your provider, it's not great
- 50:48 -- There's a lot of DevOps complexity where you trade 1 ops problem for another
- 51:25 -- But Serverless is likely easier to set up than an entire Kubernetes cluster
- 51:39 -- That being said, Serverless is very cost effective for low traffic APIs
- 52:12 -- Lane would likely choose Serverless again for his specific use case
- 52:29 -- Another nice thing about Serverless is not having to worry about scaling up
- 53:08 -- Should you use Serverless for a traditional web application?
- 53:46 -- It really depends on what you care about, such as cost vs development speed
- 54:16 -- Serverless can get really expensive at larger scale (more so than regular hosting)
- 55:39 -- You can find Lane on Twitter at [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and his app can be found at [qvault.io](https://qvault.io/)

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Serverless_computing>
- <https://en.wikipedia.org/wiki/Cryptocurrency>
- <https://en.wikipedia.org/wiki/Bitcoin>
- <https://serverless.com/>
- <https://en.wikipedia.org/wiki/Representational_state_transfer>
- <https://docs.aws.amazon.com/IAM/latest/UserGuide/id_users.html>
- <https://serverless.com/blog/keep-your-lambdas-warm/>
- <https://en.wikipedia.org/wiki/List_of_DNS_record_types>
- <https://linux.die.net/man/1/kill>
- <https://www.postgresql.org/docs/current/functions-json.html>
- <https://medium.com/coryodaniel/from-erverless-to-elixir-48752db4d7bc>

###### ⚙️ Tech Stack

{% include services-used.html %}
