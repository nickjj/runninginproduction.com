---
layout: "podcast-or-interview"

mp3_bytes: "34636800"
mp3_duration: "36:04"

guest: "Ben Sassoon"
guest_avatar: "ben-sassoon.jpg"
guest_website: "https://howmuchtoiletpaper.com/"
guest_twitter: "bensassoon"

category: "podcast"
tags:
  - "static-site"
  - "bootstrap"
  - "cloudflare"
  - "github-pages"
  - "namecheap"
  - "weglot"

title: "Determine What Your Toilet Paper Supply Is Based on Your Usage"
description:
  Ben Sassoon talks about building a simple static site. The core of it is
  6 lines of JavaScript and it received 10+ million visitors.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
site that helps you figure out how much toilet paper you have left. It's a
static site using pure HTML. It's been running in production since March 2020
and it's hosted on GitHub Pages.

The site has had over 10 million visitors and was featured on various cable TV
news outlets and talk shows. The MVP was built as a joke for his friends in
about 20 minutes.

## Topics Include

- 6:47 -- A very simple static site let him spin up an MVP in about 20 minutes 
- 8:00 -- GitHub embraced his service, even though he surpassed the GH Pages traffic limit
- 10:26 -- Making the site mobile friendly using BrowserStack and Polypane
- 12:59 -- There's not even a static site generator being used, it's pure HTML
- 14:14 -- Ezoic helped quickly add Google AdSense to the page
- 19:30 -- Getting 300-400 donations and $5,000 / day from ads during its peak
- 22:01 -- The core of the site is about 6 lines of vanilla JavaScript
- 27:32 -- The process of transferring a domain name / site to another person
- 30:23 -- A DNS mystery caused a bit of down time at one point
- 32:37 -- Ben's workflow for pushing code from development to production
- 34:17 -- Going from basically no traffic to millions of visitors in a short period of time
- 35:27 -- You can find Ben on Twitter at [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://education.github.com/pack>
- <https://www.browserstack.com/>
- <https://polypane.app/>
- <https://empireflippers.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.ezoic.com/>
- <https://ko-fi.com/>
- <https://icons8.com/>
