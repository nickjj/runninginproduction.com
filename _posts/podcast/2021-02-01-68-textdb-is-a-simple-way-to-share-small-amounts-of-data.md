---
layout: "podcast-or-interview"

mp3_bytes: "36759168"
mp3_duration: "38:17"

guest: "Ian Davidson"
guest_avatar: "ian-davidson"
guest_website: "https://textdb.dev/"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "digitalocean"
  - "dnsimple"
  - "lets-encrypt"
  - "nginx"
  - "open-source"
  - "postgres"
  - "ubuntu"

title: "TextDB Is a Simple Way to Share Small Amounts of Data" 
description:
  Ian Davidson goes over building a data sharing service with Phoenix and
  Elixir using Live View. It's hosted on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
data sharing service using Phoenix and Elixir. It's using Live View too. At its
peak the site received a spike of 10k+ requests in a day and it's hosted on a
$20 / month DigitalOcean server.

Ian talks about quickly building the app, reacting quickly to add user
requested features, using DigitalOcean for the first time, some pitfalls of
using Live View / websockets when it comes to configuring nginx and more.

## Topics Include

- 1:35 -- Motivation for using Phoenix, Elixir and Live View
- 4:14 -- How the site works, it saves data to a combination of PostgreSQL and the file system
- 5:48 -- The experience of developing the app with Phoenix Live View
- 8:40 -- Adding features quickly based on user feedback
- 11:13 -- It's an open source monolithic code base [sitting in 1 git repo](https://github.com/bontaq/textdb) on GitHub
- 14:43 -- nginx is sitting in front of the cowboy server and terminals SSL
- 16:57 -- It's hosted on DigitalOcean for $20 / month (2 vCPUs and 4 GB of RAM)
- 17:56 -- The OS is Ubuntu 20.04 LTS and DigitalOcean's automated backups are on
- 20:17 -- The server was set up and configured manually without using Elixir releases too
- 22:36 -- The deployment process from development to production
- 26:41 -- The BEAM takes about 5 seconds to restart which is a bit of down time
- 27:57 -- DigitalOcean's Cloud Firewall is being used along with their monitoring tools
- 32:00 -- nginx is taking care of basic rate limiting by IP address
- 34:19 -- Best tips? Phoenix is a great choice for side projects but beware of websockets
- 36:11 -- Not having end to end tests before launching was kind of a mistake
- 37:34 -- Check out the site at <{{ page.guest_website }}>

## Links

###### 📄 References

- <https://news.ycombinator.com/item?id=23948234>
- <https://www.youtube.com/watch?v=MZvmYaFkNJI> (Real-time Twitter clone Live View demo)
- <https://applitools.com/wp-content/uploads/2019/05/pasted-image-0.png>
- <https://en.wikipedia.org/wiki/BEAM_(Erlang_virtual_machine)>
- <https://github.com/artilleryio/artillery>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/phoenixframework/phoenix_live_view>
