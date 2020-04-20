---
layout: "podcast-or-interview"

mp3_bytes: "40461312"
mp3_duration: "42:08"

guest: "Peter Kazarinoff"
guest_avatar: "peter-kazarinoff"
guest_website: "https://github.com/jupyterhub/jupyterhub"
guest_twitter: "pkazarinoff"

category: "podcast"
tags:
  - "python"
  - "sqlite"
  - "nginx"
  - "lets-encrypt"
  - "digitalocean"
  - "ubuntu"
  - "ansible"
  - "open-source"

title: "A College Professor Self Hosts Jupyter Hub for His Students"
description:
  Peter Kazarinoff goes over deploying Jupyter Hub on DigitalOcean with Ansible
  and open sourced all of his work.
---

In this episode of Running in Production, {{ page.guest }}  goes over deploying
Jupyter Hub on DigitalOcean with Ansible. It's running on a single $40 / month
DigitalOcean server for his 24 students. He's been doing this since summer
2018.

Peter talks us through what Jupyter notebooks are and what Jupyter Hub does,
the process of learning DevOps related tasks to deploy a project he didn't
write, his journey of automating the process with Ansible and how it's ok to
make mistakes along the way.

## Show Notes

- 1:07 -- What exactly is Jupyter and Jupyter Hub?
- 2:12 -- Students can access a fully working Python environment from their browser
- 2:58 -- Setting up a fully working local development environment can be tricky
- 4:35 -- 24 students (the size of the class) access the Jupyter Hub server
- 5:20 -- Comparing Jupyter Hub to other alternative tools and services
- 6:43 -- There's a number of ways to do student authentication (oauth2) with Jupyter Hub
- 8:30 -- Peter has been using this set up since the summer of 2018
- 9:08 -- With Covid-19, now is a good time to be able to do remote work
- 9:49 -- You don't need to know much about how Jupyter Hub works to deploy it
- 10:59 -- Sometimes your task is to deploy a code base you didn't write
- 11:32 -- Why you might want to self host things like Jupyter Hub and GitLab
- 12:22 -- Initially Peter tried to code up his own solution but then found Jupyter Hub
- 13:39 -- You need a Linux server, some type of auth, Python and a database to get going
- 14:42 -- The server is hosted on a $40 / month DigitalOcean droplet
- 17:22 -- You need a pretty beefy server even with relatively few users for Jupyter Hub
- 17:59 -- There's nginx acting as a reverse proxy in front of a Tornado web server 
- 18:44 -- Configuring nginx was Peter's biggest pain point since he teaches Python not DevOps
- 19:25 -- It was important to set up SSL certificates, he used Let's Encrypt with Certbot
- 20:12 -- From teaching Python to becoming Mr. DevOps (deployment is hard)
- 21:15 -- The server is using Ubuntu 18.04 LTS and Peter connects using PuTTY on Windows
- 22:12 -- Peter will try the next Ubuntu LTS in fall's semester
- 22:42 -- The server is running Python 3.7 to keep it compatible with Jupyter Hub
- 23:32 -- Each quarter gets a brand new server that's set up from scratch
- 23:54 -- From manually configuring everything to Bash scripts to using Ansible for automation
- 25:25 -- The Ansible set up has been used once so far
- 26:03 -- Students never directly SSH into the server but it's good to keep it locked down
- 27:05 -- Peter can log into the server and check out his student's work
- 27:38 -- The next step for Peter's automation project is to scale up the server's size
- 29:25 -- Other professors are using and planning to use this Jupyter Hub set up
- 30:24 -- Peter usually updates the server's packages when he turns it off to upgrade it
- 31:59 -- Most instructors are using the college's built in learning management system
- 33:04 -- Jupyter Hub takes care of presenting logs and errors in its admin dashboard
- 34:05 -- The college's LMS is still the source of truth for looking at a student's work
- 34:54 -- Backups are done manually but Peter isn't too worried about losing the data
- 35:47 -- The Jupyter Hub is accessible on the public internet but no downtime alerts are used
- 37:13 -- Best tips? Deployment is tough but it's ok to make mistakes as you go
- 38:13 -- Peter learned from many mistakes such as pushing SSH keys to GitHub and more
- 40:18 -- After all is said and done, despite it being tough, it works well for his Students
- 41:16 -- You can find Peter on [GitHub](https://github.com/ProfessorKazarinoff), [Twitter](https://twitter.com/{{ site.guest_twitter }}) and [his blog](https://pythonforundergradengineers.com/), he also has [an open source book](https://problemsolvingwithpython.com/)

## Links

- <https://github.com/jupyterhub/jupyterhub>
- <https://www.python.org/>
- <https://jupyter.org/>
- <https://en.wikipedia.org/wiki/OAuth#OAuth_2.0>
- <https://numfocus.org/>
- <https://www.sqlite.org/index.html>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://nginx.org/en/>
- <https://github.com/tornadoweb/tornado>
- <https://letsencrypt.org/>
- <https://github.com/certbot/certbot>
- <https://en.wikipedia.org/wiki/Ubuntu>
- <https://www.putty.org/>
- <https://github.com/ansible/ansible>
- <https://professorkazarinoff.github.io/jupyterhub-ENGR114-2019Q4/>
- <https://github.com/ProfessorKazarinoff/jupyterhub-ENGR114-2020Q1>


## Shameless Plugs

- Nick:
  - Want to learn Flask? Join thousands of others in my
    [Build a SAAS App with Flask](https://buildasaasappwithflask.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
    course
  - Want to learn Docker? Join thousands of others in my
    [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
    course
