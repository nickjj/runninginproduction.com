---
layout: "podcast-or-interview"

mp3_bytes: "33564288"
mp3_duration: "34:57"

guest: "Paul Cappaert"
guest_avatar: "paul-cappaert"
guest_website: "https://museum-tracker-api.herokuapp.com/leaderboard-scores"

category: "podcast"
tags:
  - "django"
  - "python"
  - "docker"
  - "heroku"
  - "postgres"
  - "redis"
  - "sendgrid"
  - "sqlite"

title: "Tracking Games Played on a Flight Simulator"
description:
  Paul Cappaert talks about building a leaderboard for flight simulators with
  Django and Python. It's all hosted on a single Heroku dyno.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a leader board for a [flight simulator]({{ site.url }}{% asset_path
podcast/50/simulator.jpg %}){:target="_blank"} that he developed at University.
It's built with Django and Python and runs on the Heroku free tier. It was in
development for most of the 2019 school year.

Paul goes over using QR codes as a login mechanism and what it was like
building an API back-end so that the game server (Unity) running the simulator
can report back stats.

## Topics Include

- 3:36 -- Motivation for using Django and Python
- 5:26 -- It's broken up into a few Django apps across a few thousand lines of code
- 6:31 -- Using QR codes to identity users from the simulator (it uses Unity)
- 11:32 -- Using Django REST Framework to accept requests from the game server
- 15:58 -- Using SQLite locally but PostgreSQL on Heroku, Docker + Redis too
- 18:32 -- Reasons for picking Heroku over the alternatives
- 22:46 -- The process to develop and deploy the application
- 24:58 -- Secrets are saved outside of GitHub
- 26:43 -- Django templates power the front-end for the website
- 31:09 -- Best tips? Don't worry about not knowing everything from the get go
- 32:19 -- Also don't forget to read the manual, aka documentation
- 34:11 -- Paul is on GitHub at <https://github.com/paulcappaert>

## Links

###### 📄 References

- <https://unity.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/lincolnloop/python-qrcode>
- <https://github.com/python-pillow/Pillow>
- <https://github.com/encode/django-rest-framework>
- <https://github.com/django/daphne>
