---
layout: "podcast-or-interview"

mp3_bytes: "78946560"
mp3_duration: "1:22:14"

guest: "Brett Kromkamp"
guest_avatar: "brett-kromkamp"
guest_website: "https://contextualise.dev/"
guest_twitter: "brettkromkamp"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "lets-encrypt"
  - "linode"
  - "nginx"
  - "open-source"
  - "postgres"
  - "ubuntu"

title: "Contextualise Is a Tool That Lets You Easily Organize Information"
description:
  Brett Kromkamp talks about building an open source knowledge management tool
  with Flask. It's deployed on a single server using Linode.
---

In this episode of Running in Production, {{ page.guest }} talks about building
an open source knowledge management tool with Flask and Python. It's running on
a single $10 / month Linode server and has been up and running since
February 2020. It already has 200+ users.

Brett goes over how a graph database model fits perfectly for modeling
knowledge, an open source Topic map library he wrote in Python, the power and
simplicity of Flask, the value of keeping an eye on your external dependencies
and a whole lot more.

## Show Notes

- 1:37 -- Contextualise is a side project that scratches Brett's own itch
- 3:01 -- It uses a Topic map which is a type of graph model to model a lot of things 
- 3:56 -- A Topic map is a perfect fit for modeling any type of knowledge 
- 6:04 -- You can visualize a graph model by thinking about having circles connected by lines
- 6:50 -- Graph databases can help you naturally model very complicated relationships
- 10:15 -- Topic maps very much align with how you likely think about modeling data in real life
- 12:15 -- Brett used a Topic map to build a CMS back in ~2006
- 13:14 -- The current Topic map engine Brett built for this project came about in ~2016
- 14:43 -- Both [Topic DB](https://github.com/brettkromkamp/topic-db) and [Contextualise](https://github.com/brettkromkamp/contextualise) are open source on GitHub
- 15:46 -- Motivation for choosing Flask over Pyramid and Django 
- 21:07 -- Contextualise has been up and running since February 2020
- 22:10 -- Google Analytics is used for very basic traffic metrics, not personalized tracking
- 24:39 -- Handling file uploads using the code supplied in Flask's documentation
- 28:43 -- When files are written to disk, they go into a specific directory
- 29:14 -- The application uses server side rendered Jinja templates with a bit of JavaScript
- 32:13 -- Drawing out the graph map using the vis.js charting library
- 34:15 -- There's a few more visualization features coming to Contextualise soon
- 36:25 -- Motivation for choosing Gunicorn and nginx over other app / web servers
- 38:54 -- Brett doesn't use Docker, but folks have contributed Docker support in his project
- 40:36 -- It's hosted on Linode using Ubuntu 18.04 with PostgreSQL and nginx w/ Let's Encrypt
- 41:10 -- Topic DB is an abstraction on top of PostgreSQL, not a dedicated graph database
- 42:46 -- Topic DB uses the Psycopg2 library to connect to PostgreSQL
- 43:12 -- The biggest problem with Psycopg2 was getting it running on MacOS
- 45:09 -- On Windows you can use WSL, but ideally Docker solves this problem all together
- 45:47 -- Let's Encrypt's Certbot tool was used to configure SSL certificates
- 46:53 -- Everything is running on a single server with 2 GB of memory, 1 CPU core a 50 GB SSD
- 48:15 -- Hearing stories about deploying everything to a single server is great
- 49:19 -- About 200 users are signed up with 80+ active weekly users, the server is fine
- 50:27 -- Linode makes it easy to vertically scale up if needed
- 51:21 -- The server was set up by hand while following a bunch of DigitalOcean guides
- 52:38 -- You can restart Gunicorn in about 500 milliseconds when not using Docker
- 53:18 -- Brett breaks down a custom Python script he uses to deploy things
- 55:23 -- Besides handling SSL certificates, nginx also serves static files
- 56:10 -- Dealing with secrets using an INI file that's not commit to version control
- 57:53 -- An environment file would be pretty similar
- 59:20 -- Flask-Security-Too is used because the original Flask-Security was abandoned 
- 59:20 -- His app sends email out but he uses his ISP's SMTP servers to send it
- 1:04:16 -- Logging is done with Flask's logger, along with periodic manual lookups for errors
- 1:05:43 -- Nick chimes in with a way to get notified by email if a Flask error occurs
- 1:06:57 -- Topic DB is well tested but the Flask app has no tests at the moment
- 1:07:55 -- Backups are handled with Linode's automated server backups 
- 1:09:22 -- Brett really likes Linode
- 1:11:07 -- Linode has alarms you can set up to get notified if your server gets too busy
- 1:11:45 -- There's currently nothing hooked up to do a healthcheck on the site itself
- 1:12:40 -- Best tips? Use tools you can be productive with &amp; be mindful of your dependencies
- 1:15:57 -- There's only a handful of external dependencies in Contextualise
- 1:17:17 -- 21 Python files and about 4,200 lines of code make up the Flask app  
- 1:18:00 -- The Topic DB project has 27 Python files with 3,000+ lines of code 
- 1:18:49 -- Python allows you to write fewer lines of code compared to some other languages
- 1:21:07 -- You can find Brett on [GitHub](https://github.com/brettkromkamp), [Twitter](https://twitter.com/{{ page.guest_twitter }}) and he has [his own site](https://brettkromkamp.com/) too

## Links

###### 📄 References

- <https://cerpus.com> (the company Brett works for)
- <https://en.wikipedia.org/wiki/Database_model#Graph_model>
- <https://en.wikipedia.org/wiki/Topic_map>
- <https://flask.palletsprojects.com/en/1.1.x/patterns/fileuploads/>
- <https://timeline.knightlab.com/>
- <https://www.digitalocean.com/community/tutorials/how-to-serve-flask-applications-with-gunicorn-and-nginx-on-ubuntu-18-04>
- <https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04> 
- <https://www.digitalocean.com/community/tutorials/how-to-set-up-a-firewall-with-ufw-on-ubuntu-18-04>
- <https://www.digitalocean.com/community/tutorials/how-to-install-nginx-on-ubuntu-18-04>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/un33k/python-slugify>
- <https://visjs.org/>
- <https://gunicorn.org/>
- <https://www.psycopg.org/>
- <https://github.com/jwag956/flask-security>
- <https://github.com/sqlalchemy/sqlalchemy>
