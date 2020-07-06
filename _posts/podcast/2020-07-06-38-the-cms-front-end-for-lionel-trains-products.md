---
layout: "podcast-or-interview"

mp3_bytes: "58941312"
mp3_duration: "1:01:23"

guest: "Mark Miscavage"
guest_avatar: "mark-miscavage"
guest_website: "https://www.lionel.com/"
guest_twitter: "chick3ndinn3r"

category: "podcast"
tags:
  - "django"
  - "python"
  - "ember"
  - "aws"
  - "cloudfront"
  - "elasticache"
  - "nginx"
  - "postgres"
  - "rds"
  - "redis"
  - "route53"
  - "s3"
  - "sentry"
  - "solr"
  - "ubuntu"
  - "webpack"

title: "The CMS Front End for Lionel Trains' Products"
description:
  Mark Miscavage talks about building a site to display hundreds of thousands
  of searchable products with Django. It's hosted on AWS.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a site to display hundreds of thousands of full text searchable products for
Lionel. The site is powered by Django with a custom open source CMS. It's
been up and running since 2015 and is hosted on AWS.

The agency Mark worked at developed 100+ Django sites, including sites for the
Avatar movie along with Hunger Games.

## Topics Include

- 3:43 -- Building a custom CMS / Django admin and open sourcing the [Scarlet library](https://github.com/markmiscavage/scarlet)
- 9:16 -- Hundreds of thousands of trains, cars and product SKUs are on the CMS driven site
- 13:27 -- Motivation for making a monolithic Django app instead of using Magento
- 16:32 -- Using Solr to full text search through hundreds of thousands of products
- 20:30 -- It's primarily a server rendered app using Django templates and Ember
- 25:04 -- Master / slave PostgreSQL set up using RDS and they use other AWS resources
- 29:42 -- Load balancing, dealing with thousands of visitors and heavily caching responses
- 33:53 -- Writing a custom open source framework called [red-fab-deploy](https://pypi.org/project/red-fab-deploy/0.0.1/) to deploy the app
- 37:59 -- The EC2 web servers are using Ubuntu and have t2.medium'ish specs
- 41:35 -- Rsync'ing files over to the server, the entire deploy process and testing
- 50:16 -- Backing up admin uploaded files and the database, along with using Sentry for errors
- 54:09 -- Dealing with secret keys and code reviews while self hosting BitBucket
- 56:44 -- Best tips? Start with a base application and server architecture to help estimates
- 58:44 -- Also know when to ask for help (such as hiring a contractor or asking questions)
- 1:00:24 -- You can find Mark on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://nvie.com/posts/a-successful-git-branching-model/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/django-haystack/django-haystack>
- <https://gunicorn.org/>
