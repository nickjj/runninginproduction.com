---
layout: "podcast-or-interview"

mp3_bytes: "48884506"
mp3_duration: "50:55"

guest: "Gabriel \"OvermindDL1\" Robertson"
guest_avatar: "gabriel-robertson.jpg"
guest_website: "http://overminddl1.com/"
guest_twitter: "overminddl1"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "docker"
  - "lets-encrypt"
  - "nginx"
  - "oracle"
  - "postgres"
  - "redhat"
  - "systemd"
  - "vsphere"

title: "Serving Medical University Employees, Health Officials and Students"
description:
  Gabriel Robertson talks about using Phoenix and Elixir to build and deploy
  an internal web app that's being used at a medical University.
---

In this episode of Running in Production, Gabriel Robertson talks about how he
uses Phoenix and Elixir to build and deploy an ever changing internal web
application that medical University employees, health officials and students
use to access various systems and resources.

The application has a number of interesting security, up-time and browser
compatibility requirements. It's been running in production since 2017.

## Show Notes

- 2:28 -- Motivation for using Elixir and Phoenix
- 5:39 -- Would you use Phoenix again if you rewrote your app today?
- 7:49 -- Replacing Excel sheets and paper with a medical app that accesses an Oracle database
- 9:50 -- Building an extensive security and permission system
- 10:24 -- Supporting terminal browsers with server side templates and progressive JavaScript
- 11:18 -- Employees, health officials and students use the app, it gets ~80 concurrent users
- 13:21 -- Progressive enhancements with Drab (an Elixir library that competes with Live View)
- 16:51 -- Using the BEAM and Cachex for caching data without using Redis
- 18:26 -- Average page response times are in micro-seconds
- 18:39 -- Docker is being used in development and production without Kubernetes or Swarm
- 20:45 -- Using nginx as a reverse proxy, mainly for handling SSL certificates
- 21:52 -- Assets are bundled with npm itself but Gabriel recommends using Webpack today
- 23:09 -- Handling email transactions, error reporting, logging and metrics
- 25:48 -- Everything is hosted on premises mainly for security reasons
- 27:50 -- Running RedHat since it was installed before he got hired, but recommends Debian
- 28:56 -- The Phoenix app runs on a VM with 40GB of storage, 8GB of memory and 6 CPU cores
- 29:19 -- The primary server has 12TB of storage, 128GB of memory and 128 CPU cores
- 30:11 -- The Phoenix app has 17,500+ lines of Elixir code spread across 150+ files
- 31:53 -- It's a pleasure to navigate, maintain and update the code base
- 34:04 -- Configuration management is done with a VMware vSphere related tool
- 34:56 -- Walking through a code deploy with Docker, Distillery and custom shell scripts
- 39:54 -- 2 seconds of down time per deploy without a complex load balancer or orchestrator
- 41:03 -- Handling disaster recovery by backing up the code and data every day
- 42:38 -- Gabriel tried to bring down the app with a massive spike of traffic but it stayed up
- 44:37 -- Best tips and advice? Love / learn Docker and use static typing when you can
- 48:19 -- Separate your concerns and keep your functions short and simple
- 49:42 -- You can find Gabriel on [his site]({{ page.guest_website }}), [GitHub](https://github.com/{{ page.guest_twitter }}), [Twitter](https://twitter.com/{{ page.guest_twitter }}) and on IRC at freenode #elixir-lang

## Links

- <http://yaws.hyber.org/>
- <http://nitrogenproject.com/>
- <https://lynx.browser.org/>
- <https://elixirforum.com/t/potentially-removing-brunch-from-the-phoenix-new-template-generator/2454>
- <https://soundcloud.com/elixirtalk/episode-157-feat-chris-mccord-liveviewphoenix-part-deux>
- <https://elixirforum.com/t/pidfile-create-and-manage-a-pid-file-from-the-beam-process/7620>
- <https://concourse-ci.org/>
- <https://drone.io/>
- <https://github.com/wg/wrk>
- <https://github.com/JoeDog/siege>

## Libraries Used

- <https://github.com/josefs/Gradualizer>
- <https://github.com/OvermindDL1/gradualixir>
- <https://github.com/jeremyjh/dialyxir>
- <https://github.com/grych/drab>
- <https://github.com/philss/floki>
- <https://github.com/whitfin/cachex>
- <https://github.com/bitwalker/distillery>
