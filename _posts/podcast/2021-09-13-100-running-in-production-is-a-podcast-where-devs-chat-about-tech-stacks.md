---
layout: "podcast-or-interview"

mp3_bytes: "53664768"
mp3_duration: "55:54"

guest: "Nick Janetakis"
guest_avatar: "nick-janetakis"
guest_website: "https://runninginproduction.com"
guest_twitter: "nickjanetakis"

category: "podcast"
tags:
  - "jekyll"
  - "ruby"
  - "ansible"
  - "bash"
  - "debian"
  - "lets-encrypt"
  - "nginx"
  - "open-source"
  - "turbolinks"
  - "uptime-robot"

title: "Running in Production Is a Podcast Where Devs Chat about Tech Stacks"

description:
  Nick Janetakis goes over building a podcast site with Jekyll and Ruby. It's
  hosted on DigitalOcean and has been up and running since 2019.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
podcast site with Jekyll and Ruby. It's hosted on a single DigitalOcean server
and has been running in production since October 2019.

Nick talks about what it takes to release an episode, keeping things simple,
developing a custom audio player, hosting a bunch of sites on a single
DigitalOcean server with nginx, using shell scripts to help reduce human errors
and more.

## Topics Include

- 2:03 -- The podcast is not sponsored and it's done in Nick's spare time after hours
- 2:34 -- What's involved end to end to put together an episode
- 8:50 -- Each episode gets about 400 downloads or listens but it's hard to track
- 10:40 -- Motivation for using Jekyll and Ruby
- 13:03 -- A couple of custom Jekyll plugins to help building a podcast site
- 16:55 -- So many static generators to choose from, just pick one
- 18:09 -- Use the tools that you like and don't constantly second guess yourself
- 19:34 -- What is Liquid (Jekyll's templating language)?
- 21:01 -- The custom audio player is the only real amount of JavaScript on the site
- 25:42 -- Jekyll-Assets is being used to MD5 tag static file names for cache busting
- 26:34 -- nginx is serving the site with Let's Encrypt handling the SSL certificates
- 28:12 -- The only SAAS tool being used is Google Analytics but I don't use it for much
- 29:20 -- A few static sites are all hosted on a $5 / month DigitalOcean server
- 32:06 -- The server load is at 2-3% CPU with 60,000+ monthly visitors
- 33:06 -- Debian Bullseye is running on the server
- 34:38 -- Ansible is used to provision the server
- 38:47 -- Deploying a new podcast episode to the site
- 41:59 -- Making sure all tags are properly filled out
- 43:46 -- Another shell script to auto-inject an episode's length and file size in bytes
- 46:55 -- There's no secret management because there's no secrets
- 47:29 -- The code is backed up on GitHub and an external USB HDD
- 49:54 -- DigitalOcean's built in monitoring and alerting as well as Uptime Robot is being used
- 52:34 -- Best tips? Find tools that you're genuinely happy using and stick with them
- 54:39 -- You can find Nick on [his site](https://nickjanetakis.com), [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) on Twitter and [nickjj](https://github.com/nickjj) on GitHub

## Links

###### 📄 References

- [https://buildasaasappwithflask.com](https://buildasaasappwithflask.com/?utm_source=nj&utm_medium=rip&utm_campaign=ep-100)
- [https://diveintodocker.com](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign=ep-100)
- <https://www.youtube.com/c/NickJanetakis>
- <https://www.audacityteam.org/>
- <https://www.blackmagicdesign.com/products/davinciresolve/>
- <https://github.com/nickjj/runninginproduction.com>
- <https://github.com/nickjj/runninginproduction.com/issues/1>
- <https://nickjanetakis.com/blog/displaying-database-results-across-multiple-columns-with-1-line-of-css>
- <https://nickjanetakis.com/blog/using-ffmpeg-to-get-an-mp3s-duration-and-4-ways-to-get-the-file-size>
- <https://nickjanetakis.com/blog/transform-a-toshiba-chromebook-cb35-into-a-linux-development-environment-with-galliumos>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/sparklemotion/nokogiri>
- <https://github.com/envygeeks/jekyll-assets>
- <https://github.com/postmodern/chruby>
- <https://github.com/acmesh-official/acme.sh>
