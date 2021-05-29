---
layout: "podcast-or-interview"

mp3_bytes: "51253916"
mp3_duration: "53:23"

guest: "Junaid Kabani"
guest_avatar: "junaid-kabani.jpg"
guest_website: "https://www.openship.org/"

category: "podcast"
tags:
  - "koa"
  - "node"
  - "react"
  - "apollo"
  - "prisma"
  - "caprover"
  - "digitalocean"
  - "mysql"
  - "nextjs"
  - "open-source"
  - "postmark"
  - "sentry"
  - "zapier"

title: "Openship Is a Shopify App for Drop Shipping and Order Fulfillment"
description:
  Junaid Kabani goes over his tech choices for building a custom Shopify app.
  It's all hosted on a $20 a month DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built and deploys [Openship]({{ page.guest_website }}) which is a Shopify app
that was written in Koa. The front-end uses React.

We covered a lot of ground in this episode, such as how Prisma, Apollo, Next.js
and React all come together to build an app that uses Shopify's API. There's
also quite a lot of details on the value of testing and how CI helps keep open
source projects well tested.

## Topics Include

- 1:02 -- Junaid was running his own online store before making this app
- 1:38 -- Zapier and Google Sheets worked for a while but it wasn't sustainable
- 2:12 -- Shopify's API has extensive documentation
- 2:47 -- Drop shipping is a great way to test items before holding your own inventory
- 4:24 -- A lot of these services are trying to compete with Amazon's fulfillment service
- 4:37 -- Openship lets you transition from drop shipping to having your own inventory
- 5:24 -- Drop shipping and testing items is almost like pre-selling an app idea
- 5:28 -- Junaid hired a contractor early on to help with anything he gets stuck on
- 5:41 -- He didn't have much luck with StackOverflow early on (I'm not surprised!)
- 6:19 -- He paid about $500 to $1,000 while developing his project and it was worth it
- 7:03 -- Motivation for using Koa and Node
- 8:13 -- Shopify has official packages for Koa
- 8:41 -- Shopify lets you write custom apps in a lot of different web frameworks
- 9:26 -- There's an Apollo server and a React front-end with Prisma handling the data layer
- 9:53 -- The back-end and front-end are in their own separate git repos
- 10:11 -- Trade offs between working with a mono repo and multi-repo set up
- 11:32 -- Going into a bit more details about the back-end / front-end set up
- 12:36 -- Websockets might be used later when an upcoming messaging system is in place
- 12:57 -- The work flow for adding Openship to your Shopify app
- 13:10 -- Dealing with returns is cumbersome with drop shipping
- 15:24 -- High level recap of the work flow as a shop owner
- 15:42 -- End customers who purchase items see the usual Shopify checkout work flow
- 16:39 -- The marketplace aspect of Openship is very powerful and it's competitively priced
- 18:25 -- Private labeling is another feature that's coming soon
- 18:53 -- The marketplace is a separate Shopify shop that uses Shopify's API
- 19:06 -- The Shopify app is hosted on DigitalOcean using CapRover (self hosted PaaS)
- 20:04 -- Prisma runs on its own server which contains the MySQL database
- 20:12 -- The 2nd server hosts the back-end (web server) and front-end (React app)
- 20:32 -- It was all hosted on 1 server initially but it kept crashing
- 21:19 -- Prisma is an open source CMS for a bunch of popular databases
- 22:54 -- You typically use tools like Apollo to limit access to Prisma
- 23:19 -- The Apollo server prevents anyone from accessing your database
- 23:50 -- What exactly is the Apollo server? It's a GraphQL implementation
- 24:34 -- Breaking down the layers of your database, Prisma, Apollo and your client
- 26:22 -- Apollo helps deal with multi-tenancy concerns by letting you isolate users
- 27:06 -- Openship doesn't store any confidential info in their own database
- 27:55 -- Access control between Shopify and Openship is handled with OAuth
- 28:34 -- CapRover handles setting up a reverse proxy and setting up HTTPS
- 29:31 -- Openship isn't running in Docker but Prisma provided its own Dockerfile
- 30:35 -- CapRover has a bunch of 1 click installers, one of which is for Sentry
- 30:54 -- CapRover is only being used in production
- 31:42 -- Postmark is being used to send transactional emails (free tier)
- 32:08 -- Junaid pays about $10 to $20 a month for Zapier
- 32:33 -- Zapier helps you glue together APIs from external services
- 34:28 -- CapRover uses Let's Encrypt under the hood for managing SSL certificates
- 34:37 -- CapRover has a 1 click app on DigitalOcean so it's easy to install
- 35:36 -- DigitalOcean's monitoring / alerts aren't being used at the moment
- 35:59 -- On the horizon Junaid may switch to using now.sh
- 36:20 -- Should you go Serverless or stick with a more traditional app?
- 37:12 -- Dealing with secrets and sensitive values when using CapRover
- 37:58 -- The full break down of how code gets from development to production
- 38:34 -- Running automated tests and the value of CI / CD
- 40:04 -- Get a test suite up and running and then worry about CI
- 40:52 -- TDD vs writing tests after you write your implementation
- 41:40 -- Having a test suite really helps you refactor and improve your code later on
- 42:06 -- The difference between testing locally vs using a continuous integration server
- 44:27 -- The benefits of CI in an open source project for testing pull requests
- 45:14 -- There's no database backups in place because Shopify is the source of truth
- 45:58 -- No health check services are being used but Junaid is using Openship all the time
- 46:42 -- Uptime Robot's free tier is very generous and it pings your site every 5min
- 47:53 -- Best tips? Jump into the code, there's a lot to take in but it's manageable
- 48:25 -- A bad decision beats indecision because you can fix bad decisions
- 49:08 -- Junaid got this far with 1 year's worth of experience which is very impressive
- 52:00 -- Check out [openship.org]({{ page.guest_website }}) and its [open source repo](https://github.com/openshiporg/openship) on GitHub

## Links

###### 📄 References

- <https://www.shopify.com/>
- <https://en.wikipedia.org/wiki/Drop_shipping>
- <https://www.shipbob.com/>
- <https://www.shipmonk.com/>
- <https://en.wikipedia.org/wiki/HMAC>
- <https://github.com/zeit/micro>
- <https://github.com/lerna/lerna>
- <https://en.wikipedia.org/wiki/Third-party_logistics> (3PL)
- <https://github.com/prisma-labs/graphql-yoga>
- <https://ifttt.com/>
- <https://zeit.co/home>
- <https://www.cypress.io/>
- <https://airbnb.io/enzyme/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/Shopify/quilt>
