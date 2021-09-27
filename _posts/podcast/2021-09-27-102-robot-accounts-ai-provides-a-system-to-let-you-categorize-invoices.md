---
layout: "podcast-or-interview"

mp3_bytes: "67733760"
mp3_duration: "1:10:33"

guest: "Josh Kinabrew"
guest_avatar: "josh-kinabrew"
guest_website: "https://robotaccounts.ai/"
guest_twitter: "robotaccountsai"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "aws"
  - "heroku"
  - "jquery"
  - "mailgun"
  - "papertrail"
  - "postgres"
  - "redis"
  - "sentry"
  - "terraform"

title: "Robot Accounts AI Provides a System to Let You Categorize Invoices"

description:
  Josh Kinabrew goes over building an AI driven invoice system with Rails.
  It's hosted on Heroku and AWS. It's been up since 2013.
---

In this episode of Running in Production, {{ page.guest }} goes over building
an AI driven invoice categorization system using Ruby on Rails. It's hosted on
Heroku and AWS and has been up and running since 2013.

Josh talks about training an AI system to scan and break down pictures of
invoices, managing thousands of clients, using the latest stable version of
Rails, using Sidekiq Pro, interfacing with QuickBooks and more. 

## Topics Include

- 1:52 -- A little bit about how the service works
- 5:32 -- Training an AI to process invoice items
- 8:33 -- Thousands of clients and the motivation to use Ruby on Rails
- 10:28 -- Using AWS Rekognition's Textract and SageMaker for AI and ML decisions
- 14:55 -- It takes about 2 minutes to get an initial result after uploading an invoice
- 18:12 -- The mobile version is served through a responsive web application
- 21:36 -- They're using the latest stable Rails release with good test coverage
- 25:31 -- Going over a few types of Sidekiq Pro driven background jobs that are running
- 29:28 -- Action Mailbox was a huge win for them, it's also a monolithic code base
- 31:54 -- They're using Heroku's CI service
- 32:52 -- Good old Sprockets is used for the asset pipeline at the moment
- 35:31 -- Josh really likes Postgres, Redis is also being used quite a bit
- 40:22 -- What it's like to work with QuickBook's imports and exports
- 46:30 -- Most things are hosted on Heroku (2 worker and web Dynos)
- 49:05 -- Papertrail, Sentry and Mailgun are being used
- 51:42 -- Before sending emails most agriculture folks were faxing paperwork
- 52:50 -- The deploy process from development to production
- 54:58 -- Terraform is used to spin up the infrastructure, even on Heroku
- 59:48 -- Avoiding real customer data when copying data from prod to dev
- 1:05:42 -- Currently there's no external monitoring checking the site for up-time
- 1:07:49 -- Best tips? Don't worry about being perfect, get something out there
- 1:09:43 -- They're hiring, you can [email Josh](mailto:josh@robotaccounts.ai) and they're [on Twitter too](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/UAN>
- [DHH's YouTube video using esbuild and Tailwind's CLI](https://www.youtube.com/watch?v=JsNtLiph87Y)
- <https://www.terraform.io/cloud>
- <https://en.wikipedia.org/wiki/Hero%27s_journey>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://aws.amazon.com/rekognition/>
- <https://aws.amazon.com/sagemaker/>
- <https://github.com/mperham/sidekiq>
- <https://github.com/gettalong/hexapdf>
- <https://github.com/jnunemaker/httparty>
- <https://github.com/vcr/vcr>
- <https://github.com/bear-metal/tunemygc>
- <https://github.com/roidrage/lograge>
- <https://github.com/flyerhzm/bullet>
