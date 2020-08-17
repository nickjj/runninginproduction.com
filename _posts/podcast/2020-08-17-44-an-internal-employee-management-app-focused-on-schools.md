---
layout: "podcast-or-interview"

mp3_bytes: "58060800"
mp3_duration: "1:00:28"

guest: "Chris Goodwin"
guest_avatar: "chris-goodwin"
guest_twitter: "hannylicious"

category: "podcast"
tags:
  - "django"
  - "python"
  - "vue"
  - "apache"
  - "bootstrap"
  - "jquery"
  - "mssql"
  - "slack"
  - "windows"

title: "An Internal Employee Management App Focused on Schools"
description:
  Chris Goodwin talks about building a platform with Django to manage 15k+
  students across 29 schools. It's all running on Windows.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a platform with Django to manage 15k+ students and 2.5k+ staff members across
29 locations. It's all hosted on a few on-premises Windows servers and has been
up and running since 2017.

Chris covers evolving a solution from Excel sheets, working with a large
monolithic Django code base, being a Microsoft shop and the importance of tests
and logging.

## Topics Include

- 3:53 -- There's 2 developers and a manager who is also a database guru
- 6:58 -- Motivation for using Django and Python
- 9:52 -- It's a monolithic app using Django templates with a touch of Vue + API endpoints
- 15:51 -- Since it's an internal app, here's an explanation of what it does
- 22:52 -- Celery isn't being used but it's on their list to start using it
- 26:23 -- It's a Microsoft shop using MS SQL as a database and Apache for a web server
- 33:19 -- There's a few beefy on-prem Windows servers and software is configured by hand
- 41:43 -- Walking us through developing a feature in development to deploying it to prod 
- 52:55 -- Getting alerted in Slack if things go astray with the app
- 55:57 -- Best tips? Test and log everything and try to keep up with the updates
- 59:02 -- You can find Chris on [GitHub](https://github.com/{{ page.guest_twitter }}), [Twitter](https://twitter.com/{{ page.guest_twitter }}), [Twitch](https://twitch.tv/{{ page.guest_twitter }}) (dev stream) and [Instagram](https://instagram.com/hannylicious137)

## Links

###### 📄 References

- <https://bitbucket.org/product/features/pipelines>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://github.com/select2/select2>
- <https://github.com/pytest-dev/pytest-django>
