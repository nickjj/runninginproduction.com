---
layout: "podcast-or-interview"

mp3_bytes: "40461696"
mp3_duration: "42:08"

guest: "Ty Cooper"
guest_avatar: "ty-cooper"
guest_website: "https://www.strmline.co/"
guest_twitter: "tycooperaow"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "vue"
  - "firebase"
  - "python-anywhere"
  - "stripe"
  - "twilio"

title: "A Cryptocurrency Powered E-commerce Store Called Strmline"
description:
  Ty Cooper talks about building an e-commerce shop with Flask and goes over
  how it's hosted with Firebase and PythonAnywhere.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
cryptocurrency powered e-commerce store with Flask and Python. It's hosted on
Firebase along with PythonAnywhere and has been up and running since October
2019.

Ty talks about the challenges of accepting cryptocurrency (specifically
Ethereum), how he hosts the site using Firebase and PythonAnywhere, why he
chose those services, the value of end to end tests using Selenium, the
benefits of working with someone else instead of trying to do everything alone
and more.

## Show Notes

- 1:02 -- Switching gears and making a different site after running into a road block
- 2:36 -- Motivation for using Flask over Django and other frameworks
- 4:27 -- Flask makes it easy to get into without needing to open multiple cans of worms
- 4:54 -- Would you use Flask again today if you had to re-write the site from scratch?
- 6:42 -- Flask manipulates data but the database and storage is hosted on Firebase
- 8:00 -- Flask-JWT-Extended helps deal with token based auth for his Flask API back-end
- 8:41 -- The app is API based with a VueJS back-end because Ty likes JavaScript and VueJS
- 10:21 -- Challenges for trying to sell products with cryptocurrency
- 11:25 -- The web3.py library helps interact with the Ethereum blockchain
- 11:51 -- Building an email newsletter sender with Flask-Mail
- 14:23 -- PythonAnywhere is used to host the Flask app and comes with logging
- 15:07 -- Twilio's API is used to send Ty text messages if errors occur
- 15:46 -- What Firebase is and how it helps run a few things in development and production
- 17:28 -- Why use Firebase and PythonAnywhere vs using Heroku or hosting your own server?
- 18:21 -- About $12 / month to host 3 different apps on PythonAnywhere
- 19:02 -- You configure your CNAME DNS records to point to PythonAnywhere
- 19:29 -- Firebase directly hosts all of the front-end files such as JavaScript and CSS
- 20:22 -- PythonAnywhere gives you free SSL certificates
- 20:28 -- Ty hosts 50+ sites through PythonAnywhere and gets 10k+ monthly visitors
- 22:15 -- Learning to deploy your own apps is rewarding but there's a lot to learn
- 23:38 -- What it looks like to deploy code from development to production
- 25:14 -- Automated end to end testing with Selenium
- 26:50 -- Getting banned on Tinder for using Selenium to make too many automated requests
- 27:04 -- Mozzarella cheese
- 28:16 -- Dealing with secret keys through environment variables using PythonAnywhere
- 29:18 -- Database backups are done once a month
- 30:59 -- Product images are uploaded directly from the front-end to Firebase
- 32:48 -- Placeholders are used to help show graceful errors if something goes down
- 34:54 -- Firebase and PythonAnywhere will notify Ty automatically if the site goes down
- 35:40 -- Best tips? Learn by doing and don't worry about making mistakes
- 37:30 -- One mistake Ty made was developing the project alone, a 2nd set of eyes is helpful
- 39:28 -- Having someone else around really helps with keeping you on track
- 41:01 -- Find Ty on [Instagram](https://www.instagram.com/tycoo_aow/) along
  with [Twitter](https://twitter.com/{{ page.guest_twitter }}),
  [Reddit](https://www.reddit.com/user/tycooperaow) and
  [Youtube](https://www.youtube.com/channel/UCLxaPajGVw9K-gH9O69a0nw)

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Cryptocurrency>
- <https://www.youtube.com/channel/UC-QDfvrRIDB6F0bIO4I4HkQ> (Pretty Printed)
- <https://ethereum.org/>
- <https://www.twilio.com/>
- <https://github.com/SeleniumHQ/selenium>
- <https://en.wikipedia.org/wiki/WebP>

###### ⚙️ Services Used

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://flask-jwt-extended.readthedocs.io/en/stable/>
- <https://github.com/axios/axios>
- <https://github.com/ethereum/web3.py>
- <https://github.com/mattupstate/flask-mail>
