---
layout: "podcast-or-interview"

mp3_bytes: "76832256"
mp3_duration: "1:20:01"

guest: "Jon Calhoun"
guest_avatar: "jon-calhoun"
guest_website: "https://www.calhoun.io/courses"
guest_twitter: "joncalhoun"

category: "podcast"
tags:
  - "golang"
  - "react"
  - "caddy"
  - "convertkit"
  - "digitalocean"
  - "docker"
  - "gumroad"
  - "logdna"
  - "mailgun"
  - "slack"
  - "sqlite"
  - "systemd"
  - "tailwindcss"
  - "ubuntu"
  - "vimeo"

title: "Creating a Video Course Hosting Platform to Learn Go"
description:
  Jon Calhoun talks about building his video course platform using Golang. It's
  hosted on a single $5 / month DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} talks about building
his video course platform with Golang. It's hosted on a single DigitalOcean
droplet and has been up and running in production since 2016.

Jon covers keeping it simple with a monolithic app that was rewritten a few
times, using SQLite as his main database even with 15,000+ active users and
spending his innovation tokens wisely.

## Topics Include

- 1:28 -- Creating a custom platform lets Jon come up with new blog post / course ideas
- 4:51 -- It has roughly 15,000 active users and he built 2 separate platforms initially
- 11:02 -- Motivation for using Golang and figuring out when to add new features
- 13:17 -- Using Gumroad licenses to handle course access for users
- 15:19 -- It's a monolithic app that was rewritten a few times to be ~15k LOC
- 25:09 -- Sweating over hello world requests per second benchmarks isn't worth it
- 28:24 -- Server rendered templates using Golang's template package + gotchas
- 33:46 -- Using TailwindCSS with PostCSS and Vimeo / YouTube for the videos
- 36:56 -- Using Golang's built in web server and SQLite as a primary database
- 39:00 -- Only tracking stats about users that Jon plans to act on
- 43:01 -- Caddy sits in front of the Golang web server and deals with SSL certificates
- 44:57 -- Docker is being used in the React / PostgreSQL code update
- 49:13 -- Working with DigitalOcean block storage volumes and Spaces (S3-like object store)
- 55:23 -- The single $5 / month server is running Ubuntu 14.04 LTS and was set up manually
- 59:11 -- The deploy process from development to production
- 1:04:25 -- Spend your innovation tokens wisely
- 1:06:22 -- How Jon assembles his courses with data structures in his source code
- 1:12:24 -- Daily backups of the droplet and how Jon deals with logging / errors / email
- 1:18:09 -- Best tips? Start simple and really stick to it
- 1:19:13 -- Jon is on Twitter at [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and check out his site at <https://www.calhoun.io/>

## Links

###### 📄 References

- <https://github.com/heartcombo/devise>
- <https://github.com/gorilla>
- <https://gobuffalo.io/en/>
- <https://mcfunley.com/choose-boring-technology>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/gorilla/mux>
- <https://gorm.io/>
