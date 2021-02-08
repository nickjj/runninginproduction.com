---
layout: "podcast-or-interview"

mp3_bytes: "41117184"
mp3_duration: "42:49"

guest: "Denis Stepanenko"
guest_avatar: "denis-stepanenko.jpg"
guest_website: "https://www.salemseats.com/"

category: "podcast"
tags:
  - "django"
  - "python"
  - "react"
  - "digitalocean"
  - "lets-encrypt"
  - "nginx"
  - "sqlite"
  - "ubuntu"
  - "webpack"

title: "An Internal Financial Planning Service for Season Ticket Holders" 
description:
  Denis Stepanenko talks about building a financial planning service with
  Django and Python. It's hosted on DigitalOcean.
---

In this episode of Running in Production, {{ page.guest }} talks about building
an internal app to help manage finances around selling season tickets. It's
hosted on DigitalOcean and has been up and running since mid 2020.

Denis covers what the process was like to rebuild an old PHP app with Django,
coding everything with 6 months of experience, using DRF and React, keeping
deployments simple and not being afraid to read other people's source code.

## Topics Include

- 2:59 -- Converting an older PHP app into Django and motivation for picking Django
- 6:13 -- Switching from Django templates to a DRF API back-end with a React front-end
- 10:58 -- Webpack is being used to bundle all of the assets
- 12:34 -- Hosted on DigitalOcean, gunicorn and nginx is being used, plus cron jobs too
- 15:09 -- Switching from PostgreSQL back to SQLite and being productive
- 17:47 -- Useful Python and Django libraries that helped get things going
- 19:56 -- nginx is serving SSL certs created by Let's Encrypt and picking DigitalOcean
- 26:03 -- The server was set up by hand and he also uses WSL on Windows for local testing
- 27:30 -- What it's like to deploy a new feature from development to production
- 32:37 -- Database backups are done manually and also by DigitalOcean's backup feature
- 36:34 -- Database migrations are kind of a pain
- 39:09 -- Best tips? Don't be afraid to read other people's source code
- 42:08 -- You can find Denis on GitHub at <https://github.com/Denis-Step/>

## Links

###### 📄 References

- <https://material-ui.com/>
- <https://nickjanetakis.com/blog/a-recycled-ip-address-caused-me-to-pirate-390000-books-by-accident>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://material-table.com>
- <https://gunicorn.org/>
- <https://github.com/omab/django-social-auth>
- <https://github.com/pennersr/django-allauth>
