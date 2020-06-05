---
layout: "podcast-or-interview"

mp3_bytes: "60405888"
mp3_duration: "1:02:51"

guest: "Scott Johnson"
guest_avatar: "scott-johnson.jpg"
guest_website: "https://www.covidnearme.org/"
guest_twitter: "fuzzygroup"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "digitalocean"
  - "hatchbox"
  - "honeybadger"
  - "lets-encrypt"
  - "nginx"
  - "postgres"
  - "redis"
  - "simple-analytics"
  - "uptime-robot"

title: "CovidNearMe Tracks Cases and Has Info for Citizens / Health Workers"
description:
  Scott Johnson goes over building a Covid-19 case tracking site with Ruby
  on Rails. It's hosted using Hatchbox.io on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a Covid-19 case tracking / anonymous survey / information site using Ruby on
Rails. It's all hosted on DigitalOcean using the Hatchbox.io service (it's
load balanced across 2 servers).

We talked a lot about using Jumpstart Pro, Hatchbox, working with team mates
in the DOD and iterating on a project super quickly. The app's initial release
was created in less than 2 days and it's currently serving 100,000+ visitors a
day.

## Show Notes

- 1:23 -- The app was initially released after 2 days of part time development
- 2:36 -- The data is pulled in from the Johns Hopkins CSV data on GitHub
- 3:14 -- Scott's partner for this app works for the DOD (Department of Defense)
- 3:43 -- The site is much more than just an infection counter for countries
- 4:45 -- All of the crowd sourced data is anonymous and encrypted at rest
- 5:15 -- They are using FDA protocols and everything is signed off by a doctor
- 6:00 -- NY state has 15,000+ cases and it's very hard to get tested
- 6:47 -- Scott has been using Ruby on Rails since 2007, that's why he used Rails
- 7:32 -- Getting an MVP up and running quickly
- 8:30 -- Jumpstart Pro was used to create the base application
- 9:06 -- You can use Jumpstart Pro for more than a typical SAAS app
- 11:12 -- Jumpstart Pro gives you a base application to build upon using Rails best practices
- 11:54 -- Jumpstart Pro uses TailwindCSS and it looks nice out of the box
- 12:28 -- Websockets are not being used, they are trying to keep things simple
- 13:19 -- A rake task uses the Mechanize gem to grab the data from GitHub on a cron job
- 13:47 -- How do the Coronavirus numbers compare to Worldometers?
- 14:44 -- Doctor validated crowd sourced reports will help provide per county infection rates
- 15:39 -- A few notable gems that were helpful for building this app
- 16:28 -- Hatchbox is used to deploy the application ($99 / month for the cluster edition)
- 16:43 -- Simple Analytics is used for basic analytics ($19 / month)
- 16:59 -- Honey Badger is used for error reporting (~$20 / month)
- 17:08 -- Google Suite is used for email and other business things
- 17:12 -- Tuple.app is used for pair programming sessions on MacOS systems ($25 / month)
- 18:17 -- All in all after server costs ($100 / month) , it's about $300 / month for everything
- 18:35 -- Not all side projects are close to free, these tools cost money
- 19:02 -- Why not just throw it all on a single $20 / month DigitalOcean server?
- 19:50 -- The Rails core team puts the burden of deployment on each developer
- 20:22 -- Hatchbox helped remove some of the pain of managing servers yourself
- 21:40 -- 650+ commits in about 10 days of development, so iteration speed is fast
- 21:52 -- ~11,000 lines of code, most of which are separate from Jumpstart Pro
- 22:21 -- Jumpstart is a base application to work off of, it's not a gem you install
- 24:10 -- Docker is not being used in development or production
- 25:17 -- Something funky in happening with Rails 6 and code reloading in development
- 26:43 -- Jumpstart uses Webpacker and Yarn
- 26:52 -- PostgreSQL, Redis and Sidekiq are being used
- 27:03 -- Sidekiq is used to move encrypted data from server 1 to server 2
- 29:06 -- Having a partner in the DOD / FDA helped keep Scott on track with data security
- 29:24 -- Hosting is being moved to Google Cloud for storing more sensitive information
- 29:56 -- What exactly is clustered mode with Hatchbox?
- 30:58 -- It took about 30 minutes to deploy everything to GCP thanks to Hatchbox
- 31:48 -- Most side projects fall apart when it comes time to deploy things
- 33:20 -- How Hatchbox manages project isolation since you can deploy multiple apps
- 34:22 -- This Covid-19 site has 2 web servers that are load balanced to serve traffic
- 34:49 -- Currently Hatchbox doesn't appear to handle rolling restarts
- 35:41 -- Hatchbox sets up nginx as the load balancer and also uses Let's Encrypt (SSL certs)
- 36:06 -- How code gets from development to production
- 37:33 -- Creating a deploy script to help remove human errors from deploying
- 39:30 -- The risk wizard feature was rolled out quickly to determine your risk factor
- 40:16 -- The current situation in Italy is a tragedy
- 41:26 -- Data is backed up daily but most of it can be recreated from source files
- 42:28 -- Hatchbox and Jumpstart don't help you out with backing up your data
- 43:07 -- Deployment is hard with Ruby on Rails
- 44:45 -- Basecamp, Shopify, GitHub and others all deploy things much differently
- 45:06 -- Hatchbox helps, but it's expensive and does lack some useful features
- 45:47 -- There's always Heroku, but that's also expensive with a opaque pricing model
- 46:49 -- Uptime Robot is being used for free notification if the site goes down
- 47:36 -- It would be cool if Hatchbox hooked into each hosting provider's monitoring APIs
- 48:58 -- Dealing with secrets in development and production using environment variables
- 49:33 -- Scott is the primary developer of this project
- 49:58 -- A really brilliant way to handle internationalization by leveraging restaurants
- 52:23 -- Best tips? Get your workflows right and then automate them with scripts
- 54:02 -- Also, focus on keeping all of your URL shortcuts in 1 place for easy access
- 54:51 -- Should these URLs be in your admin back-end? Maybe, maybe not
- 55:28 -- Testing is important but it doesn't always need to be classical tests
- 56:09 -- Rubocop isn't being used, but it's a good tool once properly configured
- 58:29 -- Scott's code is very organic and not perfect but he ships working things quickly
- 59:08 -- Scott is a prolific blogger and most posts are based on what he's learning at the time
- 1:01:39 -- Learn more about Scott by [reading his blog](https://fuzzyblog.io/blog/) and following him on [Twitter](https://twitter.com/{{ page.guest_twitter }}) / [GitHub](https://github.com/fuzzygroup), there's also his other projects at <https://netlabeler.com/> and <https://scottsfeedfinder.com/>

## Links

###### 📄 References

- <https://coronavirus.jhu.edu/map.html>
- <https://github.com/CSSEGISandData/COVID-19>
- <https://en.wikipedia.org/wiki/United_States_Department_of_Defense>
- <https://jumpstartrails.com/>
- <https://tailwindcss.com/>
- <https://www.worldometers.info/coronavirus/>
- <https://simpleanalytics.com/>
- <https://gsuite.google.com>
- <https://tuple.app/>
- <https://guides.rubyonrails.org/v4.0/command_line.html>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/sparklemotion/mechanize>
- <https://github.com/zombocom/wicked>
- <https://github.com/monterail/zip-codes>
- <https://github.com/loureirorg/city-state>
- <https://github.com/awesome-print/awesome_print>
- <https://github.com/binarylogic/authlogic>
- <https://github.com/puma/puma>
- <https://github.com/rails/webpacker>
- <https://github.com/mperham/sidekiq>
- <https://github.com/phusion/passenger>
