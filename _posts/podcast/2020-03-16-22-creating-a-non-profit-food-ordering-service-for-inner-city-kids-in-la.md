---
layout: "podcast-or-interview"

mp3_bytes: "30599424"
mp3_duration: "31:52"

guest: "Francisco Barcena"
guest_avatar: "francisco-barcena"
guest_website: "https://comprafoods.org/"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "digitalocean"
  - "lets-encrypt"
  - "nginx"
  - "postgres"
  - "ubuntu"
  - "websockets"

title: "Creating a Non-profit Food Ordering Service for Inner City Kids In LA"
description:
  Fransico Barcena talks about building a food order processing system with
  Python and Flask. It's hosted on a single DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} goes over building an internal
food order processing system for the city of Los Angeles, CA with Flask and
Python. It's hosted on a single DigitalOcean server and has been up and running
since 2016.

Francisco talks about developing a freelance project for a client as a solo
developer, scraping the USDA's site, working with Flask-SocketIO to create a
real-time ordering service and getting everything up and running on a single
server without using Docker, CI or configuration management tools.

## Topics Include

- 3:15 -- Replacing spreadsheets with a web app as the single dev on this project
- 4:12 -- It was better off making a hand rolled solution instead of using an existing platform
- 5:08 -- Motivation for using Flask instead of Django and other frameworks
- 5:56 -- It's a single monolithic app that was built up in phases / stages
- 6:20 -- The Scrapy library is used to scrape CSV links from the USDA site
- 7:01 -- The app uses server rendered Jinja 2 templates with a few ajax calls
- 8:35 -- Websockets with Flask-SocketIO is used to provide a real time order placing page
- 11:28 -- Caching some of the daily values with Flask-Cache
- 12:48 -- SQLAlchemy with PostgreSQL is used for the database back-end
- 12:59 -- Tracking down database session issues by disabling an accidental DEBUG flag
- 13:59 -- gunicorn is being used as the Flask app server
- 14:21 -- DigitalOcean is being used to host the app
- 15:15 -- Docker isn't being used at the moment since he didn't know about it ~3 years ago
- 17:52 -- The DigitalOcean server has 1 GB of memory and 2 CPU cores
- 19:05 -- Ubuntu 16.04 LTS is the Linux distro being run on the server
- 19:24 -- Configuration of the server was done by hand
- 20:14 -- Process management is done with a "YOLO but call me" strategy 
- 21:21 -- nginx is set up with Let's Encrypt and Certbot to secure the site over HTTPS
- 21:53 -- nginx is also used to serve static files (images, CSS, etc.) directly
- 22:17 -- Flask-Mail is used to send out emails such as password passwords
- 23:06 -- The app itself doesn't handle payments in real time, it takes food orders
- 23:46 -- The deployment process is to push to BitBucket and pull it from the server
- 24:16 -- Secret values aren't in version control
- 24:53 -- There's no automated tests, but things are extensively tested by the few end users
- 26:55 -- The server and data is backed up daily with DigitalOcean's droplet backup feature
- 28:21 -- Best tips? Have automated tests for your code base
- 30:40 -- Find a bunch of info about Francisco on his [personal site](https://losangelescoder.com/) (also built in Flask)

## Links

###### 📄 References

- <https://scrapy.org/>
- <https://www.usda.gov/>
- <https://en.wikipedia.org/wiki/Linear_regression>
- <https://www.postgresql.org/>
- <https://nginx.org/en/>
- <https://github.com/certbot/certbot>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.chartjs.org/>
- <https://github.com/miguelgrinberg/Flask-SocketIO>
- <https://github.com/thadeusb/flask-cache>
- <https://gunicorn.org/>
- <https://www.sqlalchemy.org/>
- <https://github.com/mattupstate/flask-mail>
