---
layout: "podcast-or-interview"

mp3_bytes: "43367424"
mp3_duration: "45:10"

guest: "Saad Malik"
guest_avatar: "saad-malik"
guest_website: "https://www.covertuner.com/"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "app-engine"
  - "gcp"
  - "jquery"
  - "mongodb"

title: "Cover Tuner Uses NLP to Help Improve Your Cover Letters"
description:
  Saad Malik talks about building a free cover letter analysis tool that uses
  NLP with Flask and Python. It's deployed on Google App Engine.
---

In this episode of Running in Production, {{ page.guest }} talks about building
a free cover letter analysis tool with Flask and Python. It uses NLP (Natural
language processing) and has been up and running on Google App Engine since
April 2020.

Saad goes over various Python NLP libraries, processing 400+ cover letters in
his first month after shipping an MVP, using MongoDB as a primary database,
keeping his front-end simple with a bit of jQuery, what it's like to deploy a
Python app using Google App Engine and more.

## Show Notes

- 2:54 -- You can upload your cover letter and get back an analysis without an account
- 3:50 -- Motivation for using Flask and Python
- 4:48 -- Writing the "business logic" in a standalone script before adding a web layer
- 5:48 -- What is NLP (Natural language processing) and what Python libraries exist for it
- 7:01 -- Using an NLP library vs using a full text search database
- 8:14 -- About 1,000 users a month go to the site and 50% of them upload a cover letter
- 9:25 -- Lots of users re-upload new copies of their cover letter after making changes to it
- 10:06 -- Server side rendered templates with Jinja plus a touch of jQuery here and there
- 10:53 -- After submitting a cover letter, an ajax response fills in the info after ~5 seconds
- 11:31 -- Gunicorn is used as the app server for Flask
- 11:46 -- Why Saad chose to use Google App Engine over using Google Compute Engine
- 12:43 -- Motivation for using Google App Engine over Heroku and other PaaS alternatives
- 14:09 -- It's mostly a monolithic application but with a separate script that runs locally
- 14:59 -- The local script helps validate cover letters
- 16:47 -- MongoDB Atlas is used to host MongoDB along with Google Cloud Storage
- 17:51 -- Why did you choose MongoDB over PostgreSQL or another SQL database?
- 18:50 -- MongoDB Compass is a way for you to visually explore your data
- 19:29 -- Docker isn't being used in development but app engine uses it in production
- 20:20 -- nginx isn't needed because app engine handles all of that for you
- 20:57 -- App engine is nice but it does come at a price (it's quite a bit more expensive)
- 22:13 -- App engine costs won't necessarily scale linearly with your traffic
- 23:46 -- A run down on all of the Google Cloud services Saad is using and how they connect
- 25:14 -- Are MongoDB databases really schemaless?
- 26:05 -- PyMongo is used to connect the Python app to MongoDB
- 27:13 -- It only took 4-5 days to turn the standalone script into an MVP Flask app
- 29:13 -- Only the Python NLP libraries are note worthy libs to make this app work
- 29:44 -- There's no user authentication needed because no user accounts are necessary
- 30:14 -- WuFoo is used to accept form submissions using their free tier
- 30:35 -- WTForms is also used to process the cover letter form submissions
- 31:17 -- Google Search Console helped make the site more mobile friendly
- 32:09 -- The site isn't using Bootstrap, it's just plain old hand rolled CSS and JavaScript
- 32:53 -- Both app engine and MongoDB Atlas provide notifications for various events
- 33:26 -- Walking through deploying code from development to production on app engine
- 34:38 -- Saad has tests set up with Pytest
- 35:09 -- What exactly is that YAML file with app engine?
- 35:48 -- Dealing with secret keys
- 37:05 -- Both MongoDB Atlas and Google App Engine have tools for disaster recovery
- 38:17 -- Alerts can be set up to measure resource consumption, including cost limits
- 39:22 -- App engine's price is high, Saad would probably use Google Compute Engine instead
- 40:47 -- Best tips? Be mindful of the SAAS tools you use and how they interact with your app
- 42:11 -- If you crank out code ASAP to ship an MVP, don't forget to go back and refactor
- 43:10 -- Using the Spyder IDE to help develop certain features faster and easier
- 44:28 -- If you want to contact Saad [you can find him on LinkedIn](https://www.linkedin.com/in/saad-mal/)

## Links

- <https://en.wikipedia.org/wiki/Cover_letter>
- <https://en.wikipedia.org/wiki/Natural_language_processing>
- <https://www.mongodb.com/products/compass>
- <https://www.wufoo.com/>
- <https://cloud.google.com/appengine/docs/standard/python/config/appref>
- <https://www.spyder-ide.org/>

## Libraries Used

- <https://www.nltk.org/>
- <https://spacy.io/>
- <https://jquery.com/>
- <https://gunicorn.org/>
- <https://pymongo.readthedocs.io/en/stable/>
- <https://github.com/wtforms/wtforms>
- <https://github.com/pytest-dev/pytest>
