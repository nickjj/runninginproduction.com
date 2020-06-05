---
layout: "podcast-or-interview"

mp3_bytes: "45424896"
mp3_duration: "47:19"

guest: "Charley Stran"
guest_avatar: "charley-stran.jpg"
guest_website: "https://developer.va.gov/"
guest_twitter: "charleystran"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "node"
  - "react"
  - "ansible"
  - "aws"
  - "cloudwatch"
  - "elasticsearch"
  - "jenkins"
  - "open-source"
  - "postgres"
  - "redis"
  - "s3"
  - "sentry"
  - "sns"
  - "terraform"

title: "VA.gov Provides an API to Get Information about Veterans"
description:
  Charley Stran goes over building and deploying a government API platform
  with Ruby on Rails / React and its deployed on AWS GovCloud.
---

In this episode of Running in Production, {{ page.guest }} goes over building
the [developer.va.gov]({{ page.guest_website }}) API with Ruby on Rails and
React. It's running on 10+ auto scaling EC2 instances on AWS GovCloud and has
been since mid-2018.

There's around 140,000+ lines of code and ~20 developers. We covered what it's
like working on government contracts, how AWS GovCloud is different than the
regular AWS platform, the code base being open source, code reviews and a whole
lot more.

## Show Notes

- 2:17 -- 20 developers (~50 people total) run just the developer.va.gov site
- 3:10 -- The platform has been up and running for [18+ months](https://www.youtube.com/watch?v=GZgw7QyUSi0)
- 4:28 -- Motivation for using Ruby on Rails
- 5:55 -- The application is running Rails 5.2, but they want to upgrade to 6.x
- 6:14 -- It's currently a single Rails monolith but it may get broken up at some point
- 8:13 -- What's it like working on a government contract?
- 9:13 -- The app is roughly 140,000+ lines of code which is API driven and uses React
- 10:25 -- The entire application is [open source on GitHub](https://github.com/department-of-veterans-affairs/vets-api) (to my surprise)
- 11:32 -- What makes React a good fit for this application? Complicated forms mostly
- 13:56 -- The VA has their own [UI design specifications publicly posted](https://design.va.gov/)
- 15:09 -- Tailwind CSS isn't being used but Charley likes it
- 16:07 -- Docker is being used in production and it runs on AWS GovCloud
- 17:59 -- PostgreSQL and Redis are used but there's not a ton of data in the DB
- 18:45 -- How AWS GovCloud is different than the regular AWS platform
- 20:32 -- It's all on EC2 instances that's managed by Terraform and Ansible
- 21:15 -- They use Auto Scaling Groups, CloudWatch, SNS, Elasticsearch and more
- 22:45 -- Sentry.io is being used for error reporting
- 23:03 -- Getting external services approved for usage on AWS GovCloud
- 23:56 -- On average 10-15 t3.large instances power the web servers, but it fluctuates a lot
- 25:41 -- The EC2 instances are running the Amazon Linux 2 AMI
- 26:35 -- Each deploy takes about 20 minutes to run from start to finish
- 27:28 -- Charley walks us through deploying from development to production
- 29:24 -- So far he hasn't had to get woken up at 3am (except from his 2 year old)
- 30:07 -- Jenkins controls their CI pipeline, which is kicked off from git pushing code
- 30:54 -- With multiple instances and an ELB, there are zero downtime deploys
- 31:16 -- Database migrations can sometimes get complicated
- 32:14 -- They aim for 90%+ test coverage
- 33:10 -- Between 2 and 5 developers typically review code before it gets merged
- 33:52 -- Their team works remotely and waiting for builds can get interesting
- 35:08 -- Rubocop analyzes the code base along with Code Climate
- 35:50 -- A "development" environment exists on AWS but developers run the code locally
- 36:45 -- VCR is used to help cache remote API calls to other VA systems
- 38:27 -- Each API has its own version
- 39:47 -- Attempting to get rid of the need for fax machines
- 40:41 -- All of the data is backed up and recovery would be quick if something went wrong
- 42:18 -- How is Terraform being used?
- 43:03 -- Best tips? With undocumented APIs, write tests and pry into the details
- 44:10 -- Biggest mistakes that were corrected? The mocking layer
- 45:17 -- Every developer is accountable for their work and will help to resolve issues
- 46:27 -- Charley's consulting company [Oddball](https://oddball.io/) is hiring and you can also find him [on Twitter](https://twitter.com/{{ guest.twitter }})

## Links

###### 📄 References

- <https://oddball.io/>
- <https://twitter.com/dhh>
- <https://en.wikipedia.org/wiki/Agile_software_development>
- <https://en.wikipedia.org/wiki/Freedom_of_Information_Act_(United_States)>
- <https://en.wikipedia.org/wiki/Edward_Snowden>
- <https://stimulusjs.org/>
- <https://design.va.gov/>
- <https://tailwindcss.com/>
- <https://aws.amazon.com/govcloud-us/>
- <https://codeclimate.com/>
- <https://youtu.be/NV3sBlRgzTI?t=35> (First Principles explained by Elon Musk)

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/rubocop-hq/rubocop>
- <https://github.com/vcr/vcr>
