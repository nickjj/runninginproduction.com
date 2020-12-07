---
layout: "podcast-or-interview"

mp3_bytes: "49056384"
mp3_duration: "51:06"

guest: "Ben Dominguez"
guest_avatar: "ben-dominguez"
guest_website: "https://www.fantasyfootballdatapros.com/"
guest_twitter: "ffdatapros"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "react"
  - "gulp"
  - "heroku"
  - "mailchimp"
  - "postgres"
  - "sqlite"
  - "webpack"

title: "Fantasy Football Data Pros Teaches You Python through Fantasy Football"
description:
  Ben Dominguez goes over building a video course platform to learn Python with
  Flask. It's hosted on Heroku's hobby tier.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
video course platform to learn Python. It's written in Flask and the MVP was
finished in 3 weeks. He gets about 4,000 visitors a month. It's hosted Heroku's
hobby tier.

Ben is the solo developer on the project. He talks about using techs you're
familiar with, keeping deployments simple with Heroku, using PaymentIntents
with Stripe and much more.

## Topics Include

- 7:28 -- Motivation for moving from WordPress to using Flask and Python
- 10:55 -- It's a video course platform to learn Python through Fantasy Football
- 13:08 -- A couple of useful Python / Flask libraries that helped move things along quickly
- 16:07 -- The React front-end and Flask API back-end are in the same repo
- 21:58 -- PostgreSQL (prod) / SQLite (dev) are being used and the app is hosted on Heroku
- 27:56 -- Tech stack recap and how Stripe is implemented with PaymentIntents
- 32:38 -- Sending emails out with Mailchimp and gmail's SMTP servers
- 35:34 -- Everything is running on the hobby tier of Heroku for $7 / month
- 38:27 -- The deployment process from development to production
- 41:04 -- Database backups happen every 24 hours and manually before DB migrations
- 45:36 -- Maybe implementing a custom forum into the platform later
- 48:44 -- Best tips? Use your bread and butter skills to get to market as soon as possible
- 50:16 -- Check out [the platform]({{ page.guest_website }}) or find FFDataPros on [Twitter](https://twitter.com/{{ page.guest_twitter }}) and [GitHub](https://github.com/fantasydatapros)

## Links

###### 📄 References

- <https://learnpythonthehardway.org/>
- <https://jupyter.org/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used
- <https://github.com/python-pillow/Pillow>
- <https://github.com/maxcountryman/flask-login>
- <https://www.sqlalchemy.org/>
- <https://gunicorn.org/>
