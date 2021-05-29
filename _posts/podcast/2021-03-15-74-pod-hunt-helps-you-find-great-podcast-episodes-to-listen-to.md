---
layout: "podcast-or-interview"

mp3_bytes: "57504000"
mp3_duration: "59:53"

guest: "Mubashar Iqbal"
guest_avatar: "mubashar-iqbal"
guest_website: "https://podhunt.app/"
guest_twitter: "mubashariqbal"

category: "podcast"
tags:
  - "laravel"
  - "php"
  - "vue"
  - "digitalocean"
  - "lets-encrypt"
  - "mysql"
  - "nginx"
  - "rds"
  - "redis"
  - "sentry"
  - "slack"
  - "uptime-robot"
  - "webpack"

title: "Pod Hunt Helps You Find Great Podcast Episodes to Listen To"
description:
  Mubs goes over building his podcast episode finding app with Laravel and PHP.
  It's hosted on DigitalOcean using Forge.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a site to find podcast episodes with Laravel and PHP. It's hosted on
DigitalOcean using Forge and has been up and running since mid 2019.

Mubs talks about using a bit of Vue as needed, not upgrading to the latest
Laravel immediately, interesting problems around parsing RSS feeds, how Forge
lets him easily host his site, understanding the nuances of your app's domain
and more.

## Topics Include

- 4:50 -- Motivation for using Laravel and PHP over a bunch of other choices
- 8:20 -- It's using Laravel 6 with VueJS on the front-end for some parts
- 11:30 -- The app will get updated to the TALL stack but not quite yet
- 13:04 -- It's a monolithic app in 1 git repo
- 16:07 -- It's mostly using Blade templates with Vue thrown in where needed
- 19:12 -- MySQL is powering the database which is managed by RDS
- 21:09 -- Reading in RSS feeds in background jobs and processing Open Graph images
- 26:07 -- You need to get approved by Mubs before you can submit episodes
- 28:35 -- Redis is powering the background jobs
- 33:11 -- nginx / Let's Encrypt and it's hosted on DigitalOcean using Forge
- 39:06 -- The deployment process from development to production
- 45:49 -- There's about 3k lines of PHP code and a few hundred lines of JS
- 47:16 -- Secrets are managed through an env file that you put on your server
- 48:41 -- Database backups happen every day and everything else is backed up too
- 51:38 -- Sentry is in charge of exception handling and Uptime Robot for site monitoring
- 55:26 -- Best tips? Understand the nuances of the app you're building
- 56:30 -- Web tech is moving fast, will HTML over the wire be main stream soon?
- 59:06 -- Mubs has his own site at <https://mubs.me> and [he's on Twitter too](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://transistor.fm/>
- <https://twitter.com/taylorotwell> (creator of Laravel)
- <https://twitter.com/calebporzio/> (creator of Livewire)
- <https://twitter.com/jeffrey_way> (creator of Mix / Laracasts)
- <https://forge.laravel.com/>
- <https://podcastindex.org/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/spatie/browsershot>
