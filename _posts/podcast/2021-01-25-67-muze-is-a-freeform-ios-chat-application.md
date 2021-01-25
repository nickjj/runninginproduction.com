---
layout: "podcast-or-interview"

mp3_bytes: "59598720"
mp3_duration: "1:02:04"

guest: "Dash Winterson"
guest_avatar: "dash-winterson.jpg"
guest_website: "https://www.muze.chat/"
guest_twitter: "dashdanw"

category: "podcast"
tags:
  - "django"
  - "python"
  - "swift"
  - "aws"
  - "circle-ci"
  - "docker"
  - "elasticache"
  - "nginx"
  - "rabbitmq"
  - "rds"
  - "redis"
  - "route53"
  - "sentry"
  - "slack"
  - "terraform"


title: "Muze Is a Freeform iOS Chat Application" 
description:
  Dash Winterson talks about building a new type of iOS chat app using Django
  and Python on the back-end. It's hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a new type of chat app for iOS using Django and Python on the back-end. It's
hosted on AWS using Elastic Beanstalk and has been up and running since mid
2020.

Dash covers creating async compatible code in Django, developing a monolithic
back-end that a few developers develop against, investing in the AWS ecosystem,
end to end message encryption and the Zen of Python.

## Topics Include

- 3:05 -- Rewriting an existing Django app into a new Django app with 90%+ test coverage
- 8:49 -- Async features in Django and not using Celery
- 12:07 -- A breakdown of gRPG and Protobuff
- 15:13 -- The platform has about 300 daily active users, dead locks and monitoring
- 17:47 -- A monolithic Dockerized app with 4 developers working on the project
- 20:05 -- There's only an API back-end in Django, the front-end is a native iOS app
- 22:51 -- The SimpleJWT and Redis / ARedis libraries were very helpful in Python
- 27:04 -- The phonenumbers library showed to be very useful too
- 30:02 -- Using Docker Compose in development with a multi-stage Dockerfile
- 32:22 -- Using Elastic Beanstalk in production and a number of other tech choices
- 38:06 -- There's no configuration management tools being used, but that's next
- 42:09 -- Most AWS instance types they are using are medium size
- 44:00 -- The process to deploy code from development to production
- 49:20 -- Dealing with backing up user generated data and encrypting messages
- 54:06 -- Getting alerted of errors through Slack and email
- 58:01 -- Best tips? When in doubt stick to the Zen of Python
- 1:00:53 -- You can find Dash on [GitHub](https://github.com/dashdanw) and [Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Protocol_Buffers>
- <https://www.elastic.co/observability>
- <https://python-poetry.org/>
- <https://www.python.org/dev/peps/pep-0020/> (The Zen of Python)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/encode/django-rest-framework>
- <https://grpc.io/docs/languages/python/basics/>
- <https://developer.apple.com/metal/>
- <https://github.com/SimpleJWT/django-rest-framework-simplejwt>
- <https://github.com/andymccurdy/redis-py>
- <https://github.com/NoneGG/aredis>
- <https://github.com/daviddrysdale/python-phonenumbers>
- <https://github.com/theskumar/python-dotenv>
