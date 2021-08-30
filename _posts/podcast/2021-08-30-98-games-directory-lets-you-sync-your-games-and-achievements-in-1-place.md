---
layout: "podcast-or-interview"

mp3_bytes: "64280448"
mp3_duration: "1:06:57"

guest: "Vlad Radulescu"
guest_avatar: "vlad-radulescu"
guest_website: "https://games.directory/"
guest_twitter: "pacMakaveli90"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "ansible"
  - "aws"
  - "better-uptime"
  - "elasticache"
  - "elasticsearch"
  - "github-actions"
  - "lets-encrypt"
  - "memcached"
  - "mysql"
  - "nginx"
  - "rds"
  - "redis"
  - "s3"
  - "sentry"
  - "tailwindcss"
  - "turbolinks"
  - "ubuntu"

title: "Games Directory Lets You Sync Your Games and Achievements in 1 Place"

description:
  Vlad Radulescu goes over creating a game directory site with Ruby on Rails.
  It's hosted on AWS and has up and running since 2014.
---

In this episode of Running in Production, {{ page.guest }} goes over creating a
game directory site with Ruby on Rails. It's hosted on AWS and has been up
and running since 2014.

Vlad talks about having thousands of active users, interfacing with a few game
platform APIs, running millions of Sidekiq jobs, storing 10+ billion database
records, keeping things as a monolithic app, deploying the web app to 1 server
and lots more.

## Topics Include

- 6:30 -- Motivation for switching from PHP to Ruby on Rails
- 7:07 -- Figuring out which gaming API to implement first and how their APIs are
- 10:27 -- Reverse engineering undocumented API calls from the Windows Steam client
- 12:18 -- Using a separate database for each gaming platform provider
- 15:05 -- A few useful features of Rails that's being used and Stimulus Reflex
- 20:19 -- Switching from Webpacker to using Vite
- 23:14 -- Using Slim instead of ERB and a few other gems being used
- 25:29 -- It's a single monolithic Rails app that's using namespaces
- 28:36 -- A lot of the time spent developing this app is working with the game APIs
- 31:00 -- Using Sidekiq, a billion (!) gamer activities stored and millions of Sidekiq jobs
- 34:18 -- It's hosted on a single AWS T2.large instance (4 vCPUs / 16 GB memory)
- 36:13 -- The database is on an R6g.large with 10+ billion records
- 39:14 -- Ansible was used to set up the EC2 instance and it's running Ubuntu 18.04 LTS
- 41:13 -- A couple of AWS resources being used
- 43:01 -- The process to ship a feature from development to production
- 44:16 -- Switching to using TailwindCSS in a nicely controlled way
- 47:57 -- At the moment the site is free with no desire to make it pay to win
- 49:55 -- Hosting is $1,500 pounds a month and it's been running for free for 7+ years
- 51:43 -- There's 7 terabytes of S3 storage and daily database backups
- 55:59 -- 50ish mini servers spread across Heroku's free tier to bypass API rate limits
- 59:45 -- Being dialed into the ops side of things but there's room for improvement
- 1:00:54 -- Keeping up with a full date job and a long running passion project
- 1:02:25 -- Best tips? Don't forget to plan things out
- 1:05:56 -- You can find Vlad [on Twitter](https://twitter.com/{{ page.guest_twitter }}) and Games Directory will be [open source soon](https://github.com/games-directory/games.directory)

## Links

###### 📄 References

- <https://www.giantbomb.com/api/>
- <https://www.telerik.com/fiddler>
- <https://games.directory/u/pacmakaveli> (Vlad's profile)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/stimulusreflex/stimulus_reflex>
- <https://vitejs.dev/>
- <https://github.com/puma/puma>
- <https://github.com/slim-template/slim-rails>
- <https://github.com/github/view_component>
- <https://github.com/mperham/sidekiq>
