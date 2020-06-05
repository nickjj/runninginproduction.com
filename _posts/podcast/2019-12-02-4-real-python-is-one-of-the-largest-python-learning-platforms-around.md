---
layout: "podcast-or-interview"

mp3_bytes: "71497769"
mp3_duration: "1:14:28"

guest: "Dan Bader"
guest_avatar: "dan-bader.jpg"
guest_website: "https://realpython.com/"
guest_twitter: "dbader_org"

category: "podcast"
tags:
  - "django"
  - "python"
  - "circle-ci"
  - "cloudflare"
  - "docker"
  - "freshping"
  - "heroku"
  - "paddle"
  - "papertrail"
  - "postgres"
  - "redis"
  - "s3"
  - "sendgrid"
  - "slack"
  - "vimeo"

title: "Real Python Is One of the Largest Python Learning Platforms Around"
description:
  Dan Bader goes over how he built Real Python from scratch with Django. It
  serves 4 million+ page views a month and is hosted on Heroku.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built [Real Python]({{ page.guest_website }}) from scratch with Django which is
a web framework written in Python. The site gets 4 million+ page views a month
and it's hosted on Heroku which costs about $700 USD / month.

What's really cool about this project is Dan coded the site himself and his
deploy process is very by the books which includes performing 1 person code
reviews which I found to be great. We covered a lot of ground in this episode!
*Spoiler alert: he's using the built-in Django admin*.

## Show Notes

- 1:47 -- The history of Real Python and how Dan ended up taking over
- 3:13 -- Replacing a PHP back-end with a custom Django app from scratch
- 3:48 -- Dan is the sole developer but he wants that to change soon
- 4:11 -- Django has been a happy developer experience and it's very effective
- 4:47 -- Motivation for switching to Django and a break down of Real Python's features
- 5:46 -- Dan tries to keep the code base on the latest stable Django release
- 6:29 -- Real Python has been using Python 3.x from day 1
- 7:06 -- Staying up to date often takes effort, but it saves time in the long run
- 7:53 -- Automated and manual ways to keep your dependencies up to date
- 10:29 -- Real Python is mostly a monolithic application by choice
- 12:28 -- 19,000+ lines of Python code spread across ~23 Django apps
- 13:44 -- A high level break down of the Django apps
- 15:16 -- The challenges of trying to break up your apps too early in the dev process
- 18:30 -- Server side rendered templates is allowing Dan to be quite efficient
- 19:50 -- Django was specifically built to display documents (news articles)
- 20:23 -- Real Python uses the built-in Django admin and it's working great
- 21:48 -- Multiple ways to have an admin back-end without an admin dashboard
- 23:21 -- The site doesn't use Django channels or any type of websockets
- 23:51 -- Docker is being used locally for development but only partially with Docker Compose
- 24:26 -- The Python app is not using Docker mainly due to volume performance issues
- 25:05 -- But all local tests are run inside of Docker (even the Python app)
- 26:00 -- Dan wishes Docker were faster on MacOS, it would be nice for other developers
- 27:00 -- Huey is being used instead of Celery for background tasks
- 28:50 -- Huey even supports running periodic scheduled tasks on an interval
- 29:20 -- You might need custom code to deal with retries and guarantees
- 30:37 -- There's a lot of responsibility to make sure Real Python stays up
- 31:34 -- Dans likes Heroku because it's easy to get notified of availability issues
- 32:33 -- Papertrail provides log access and alerts him over Slack on errors
- 32:48 -- For up time monitoring he's using Freshping
- 32:58 -- All errors and notifications get piped to Slack to keep it easy to glance
- 34:16 -- What happens if Heroku or AWS goes down? You kind of have to deal with it
- 35:12 -- The "up-time value" in building a custom platform / app for your content
- 36:36 -- Payments are handled with a reseller called Paddle, they handle taxes and more
- 38:11 -- They take a few percent more than Stripe but it's worth it for Dan
- 38:56 -- Dealing with taxes is very complicated and soul draining
- 39:23 -- Sometimes these services end up being better on all fronts (even price)
- 40:22 -- Paddle supports credit cards, PayPal and Apple Pay through 1 API provided by Paddle
- 41:58 -- SendGrid is being used to send out all types of email from the platform
- 43:10 -- SendGrid's batch API endpoint lets you send 1,000 emails in 1 API call
- 44:22 -- CloudFlare is being used to convert images to webp (image re-compression)
- 45:20 -- CloudFlare (he's using the paid plan btw) also uses HTTP / 2 in supported browsers
- 45:32 -- It also helps with rate limiting because Real Python has been getting attacked
- 45:56 -- SSL certificates are handled with CloudFlare and Heroku together
- 46:12 -- Real Python is using gunicorn
- 46:25 -- How Heroku deals with running and configuring gunicorn
- 48:01 -- (4) `standard-2x` Dynos and (1) `standard-1x` Worker powers the whole site
- 48:47 -- CloudFlare's CDN helps to offset the dyno's load by serving all of the static files
- 49:32 -- Static files are initially served by WhiteNoise for 1 request then CloudFlare caches it
- 50:59 -- A tiny microservice proxy called RuboCrop resizes images to different sizes
- 52:24 -- Lots of images and articles require alternate ways of organizing things
- 54:07 -- There is a full text search feature built into the site but it might not be enough
- 54:48 -- The Heroku add-ons being used are Postgres, Redis, Scheduler and Papertrail
- 55:31 -- Hosting costs on Heroku is about $700 / month (including a staging environment)
- 56:36 -- It's totally worth it for Dan, the value he gets is massive
- 57:32 -- As a solo developer you need to think about the time vs money vs sanity trade off
- 59:03 -- Walking though a code deploy from development to staging to production
- 1:00:36 -- Heroku's metrics dashboard makes it easy to rollback if things look off
- 1:01:52 -- 1 person code reviews are awesome and it allows for scaling up devs later
- 1:02:30 -- Heroku handles database backups and user uploaded files are sent to S3
- 1:03:45 -- Dan thinks he can rebuild everything very quickly if disaster struck
- 1:04:18 -- Vimeo is being used to host videos and provide the video player
- 1:05:37 -- Best tips? Embrace the golden age of the solo web developer being viable
- 1:07:00 -- It's so easy to initially get caught up in building something super difficult
- 1:08:27 -- One of Dan's biggest mistakes at a previous company was going microservices
- 1:10:26 -- Before it was released Real Python ran on WordPress but Dan decided against it
- 1:11:19 -- Philosophically it kind of sucks to have a big Python site running on PHP
- 1:11:55 -- Building your own tutorial platform helps you come up with tutorial content
- 1:12:34 -- Find Dan on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and his [personal site](https://dbader.org/). You can also find Real Python on [Twitter](https://twitter.com/realpython), [YouTube](https://www.youtube.com/channel/UCI0vQvr9aFn27yR6Ej6n5UA) and [Instagram](https://www.instagram.com/realpython/) as well as [realpython.com]({{ page.guest_website }})

## Links

###### 📄 References

- <https://www.kickstarter.com/projects/721054906/real-python-advanced-web-development-featuring-dja>
- [https://www.amazon.com/Python-Tricks-Buffet-Awesome-Features-ebook/dp/B0785Q7GSY](https://amzn.to/2DoyMNw)
- <https://en.wikipedia.org/wiki/Waterfall_model>
- <https://en.wikipedia.org/wiki/Lawrence_Journal-World>
- <https://realpython.com/python-virtual-environments-a-primer/>
- <https://en.wikipedia.org/wiki/WebP>
- <https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/celery/celery>
- <https://github.com/coleifer/huey>
- <https://gunicorn.org/>
- <https://github.com/evansd/whitenoise>
