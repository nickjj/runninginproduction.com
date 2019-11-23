---
layout: "podcast-or-interview"

guest: "Liyas Thomas"
guest_avatar: "liyas-thomas.jpg"
guest_website: "https://postwoman.io/"

category: "interviews"
tags:
  - "nuxt"
  - "docker"
  - "netlify"
  - "firebase"
  - "digitalocean"
  - "nginx"
  - "lets-encrypt"
  - "centos"
  - "open-source"

title: "Postwoman Is a Free, Fast and Beautiful Alternative to Postman"
description:
  Liyas Thomas goes over an open source project she built and deployed using
  Nuxt, Vue, Netlify, Firebase, Docker and more.
---

## What's your background and what site are you running in production?

I'm Liyas Thomas from Kerala, India and I'm **23 years young**. I graduated
with a Bachelor of Engineering in Computer Science in August 2019. I took a
hefty education loan to go to college which is why after 3 weeks after
graduating I joined in a not-so-popular local IT startup.

I created [Postwoman](https://postwoman.io) in 6 hours on August
26th 2019 and made it [open source](https://github.com/liyasthomas/postwoman)
shortly after.

**I've been doing OSS projects since I'm 15** or something. Some of these
projects include:

- [Marcdown](https://liyasthomas.github.io/marcdown) - Lightweight real-time
  markdown editor (which I'm using to write this interview)
- [mnmlurl.ml](https://mnmlurl.ml) - Modern URL shortener which supports
  aliases and works with GitHub pages
- And dozens [more](https://github.com/liyasthomas)

After pushing Postwoman to production, I got hired by
[BuyMeACoffee.com](https://www.buymeacoffee.com) as a full-stack web developer.
Postwoman is a productivity / developer tool for testing APIs in your browser.

It's a fast, free and beautiful alternative to Postman:

[{% image interviews/5/liyas-thomas-postwoman.jpg %}]({{ page.guest_website }})

You're probably here to learn more about Postwoman's tech stack but if you want
to read more about the story behind Postwoman and the v1.0 launch you can find
that
[here](https://dev.to/liyasthomas/i-created-postwoman-an-online-open-source-api-request-builder-41md)
and
[here](https://dev.to/liyasthomas/postwoman-v1-0-a-free-fast-beautiful-alternative-to-postman-mn0).

Postwoman is now a community driven project. Made by the community, for the
community.

I being the author; maintain, develop and coordinate day-to-day operations of
Postwoman. Almost 95% of Postwoman users are developers like me who interact
with APIs in their daily workflow. Most of them are API developers, testers and
front-end devs for integration.

**Initially I built Postwoman with JavaScript + HTML + CSS, then I migrated to
Vue.js and finally migrated to Nuxt**. We're running the latest stable
versions of every lib we use. Actually, I could've just mentioned their
versions here but I'm lazy af to check that, but you can look at our
[package.json
file](https://github.com/liyasthomas/postwoman/blob/master/package.json) 💁 for
the latest everything.

Here's some stats I Ctrl + C / Ctrl + V'd from my Google Analytics dashboard:

- Total page views till now: 252,686 in 89 days
- 34,941 unique users
- 41,765 session
- 30.13% bounce rate

## What motivated you to use Nuxt / Vue?

Because I didn't know [Vue](https://vuejs.org/) and I wanted to learn it. Even
though I had experience in Angular, [Polymer](https://www.polymer-project.org/)
and other couple of frameworks, I wanted to learn Vue. So that's why Vue. And
later I wanted to learn [Nuxt](https://nuxtjs.org/) too so I migrated to that.

Questions I asked myself:

- What more can I learn if I make this app?
- How could others benefit from this project?

I always ask this first: Is it possible with pure JavaScript only? If yes, I'll
make the MVP with pure JavaScript + HTML + CSS. Then I'll find how this project
could benefit me and others. I had no clue how to use Vue, so I wanted the MVP
to be rebuilt in Vue.

I did that and now I no longer fear Vue ;), and it proved my decision was
not a mistake.

Nuxt has out-of-the box support for [Progressive Web
Apps](https://en.wikipedia.org/wiki/Progressive_web_applications) (PWA) and
it's an important requirement I had in mind while building the project in the
first place.

Along with PWA capabilities, Nuxt also covers Server Side Rendering (SSR) and
a handful of features which helps in SEO and all that. It also has reputable
performance.

Alternatives I might have considered:

- React
- Polymer
- Angular

But if you asked me to rewrite Postwoman from scratch today I would still use
Vue. It has never let me down and it delivered exactly what I wanted.

## Is your site a monolith or broken up into microservices?

Postwoman is a collection of micro-services. It includes REST API testing,
WebSocket testing, [GraphQL](https://graphql.org/) endpoints (beta) testing,
etc..

It's built with the latest web technologies such as PWA, [Service
Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API),
[Push
Notifications](https://developer.mozilla.org/en-US/docs/Web/API/Notifications_API/Using_the_Notifications_API),
[Web Share](https://developer.mozilla.org/en-US/docs/Web/API/Navigator/share),
etc.. It also scores a perfect 100 / 100 on
[Lighthouse](https://developers.google.com/web/tools/lighthouse/v3/scoring) (a
tool to measure app quality).

While making Postwoman the biggest struggle was to store the state of the app
for the next time you use it. This could have been tackled by cloud sync but
later I realized every hardware / system had different testing environments and
thus providing a system wide state storage is better than sync state
management.

Another struggle was `CORS` policies. We got around that with a Nuxt module we
wrote called proxy mode.

Postwoman is a 100% client side app. There's no considerable amount of overhead
to our servers other than the initial render and proxy mode. Proxy mode is
totally optional and the whole site has offline capabilities which makes it
much easier from an architectural point of view.

The development experience has been awesome so far!

{% image interviews/5/postwoman-github-code-stats.jpg %}

There's over 14,000+ lines of code at the moment and the project has devs from
around the world. Overall there's 340+ forks and 10+ repos which are working
concurrently on different feature branches. This includes sub-modules for the
proxy module by [@NBTX](https://github.com/NBTX) and a beta offline installer
that's in the works.

My advice is open source projects take a while to gain traction and that might
not align with our expectations. Most devs often discard their project because
it didn't receive the exposure they expected. I advise them to keep building
the project until everybody notices it.

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

Currently we don't have any SSR modules. This allow users to simply download
the site and use it offline. 🙃

Here's some of the features of Postwoman that relates to this question:

- Real-time push notifications ✔️
- Offline support with Service Workers ✔️
- Progressive Web App (PWA) ✔️
- Multi-platform support ✔️
- Multi-device support ✔️
- Zero server side logging ✔️
- Native build ❌

Choosing to build a PWA rather than a native app was easy. Everybody loves the
use cases of a PWA. It's fast, resilient, easy to modify and easy to maintain.

**Here's a few official [Nuxt
modules](https://nuxtjs.org/guide/modules/#list-of-nuxt-js-modules) that we're
using:**

- Axios for HTTP promise based requests
- PWA for PWA support
- Sitemap for generating sitemaps
- Google Analytics for analytics support
- Google Tag Manager
- Robots.txt
- Toast
- Vuex, etc.

For testing websockets we use JavaScript's native websocket functionality.
Users can establish a full duplex TCP websocket communication channel.

Rather than depend on another npm packge, we could do so much with plain
JavaScript. I'm happy with that.

My advice is to explore the capabilities of vanilla JavaScript and implement
your use cases with that if you can. Then if that fails, move to using a
package.  Don't rush to bring in packages because it's cool.

## What does the rest of your tech stack look like?

Vue, Nuxt, [Netlify](https://www.netlify.com/),
[Firebase](https://firebase.google.com/), Google Analytics, [Google Tag
Manager](https://marketingplatform.google.com/about/tag-manager/),
[Docker](https://docker.com) and [Travis CI](https://travis-ci.org/).

We take code reviews very seriously and have automated tests that run in
Travis. This helps us to have an error free code base. While incorporating
ES2016+ JavaScript in production we make sure all of the latest functionality
is implemented.

As for Docker. I'm a complete noob with it. I'm also excited to share that
there's 750+ pulls of the Postwoman Docker image on the [Docker
Hub](https://hub.docker.com/r/liyasthomas/postwoman). Docker helps make
Postwoman more accessible to developers around the world.

Currently there's no database. And it's the beauty of running a client side
app. Data is stored  client side. We know it's volatile, but that's exactly
what users want in a client side app. Later this year, we've planned to offer
an optional cloud sync feature.

The [Vuex module](https://vuex.vuejs.org/guide/modules.html) handles our [local
storage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API) and
cache / cookie management. It does the job beautifully. States and array
variable are all synced by writing to local storage.

On our server we have [nginx](https://www.nginx.com/) acting as a load balancer
to support proxy mode. This is the only overhead we have on the server.

{% image interviews/5/postwoman-netlify-firebase.jpg %}

For hosting we use Netlify but we also use Firebase too. We have to swap
between them at least once a year for maintenance. <<TODO: why do you need to swap these services exactly?>>.

[Let's Encrypt](https://letsencrypt.org/) provides our SSL certificates. All
connections are served over HTTPS and HTTP requests are automatically
redirected to HTTPS. This redirect is handled with nginx.

For domain registration and DNS hosting we use
[name.com](https://www.name.com/). They're awesome. They have excellent support
and a fully fledged dashboard. The templates for DNS records are my favorite
feature, although in the future we're planning to move our DNS hosting to
Netlify.

## Which external SAAS tools does your site depend on?

We have an email subscription list. This helps to validate real users but it's
also for us to build an internal community of quality devs for future
reference.

We use [MailChimp](https://mailchimp.com/) to handle our email subscriptions.
We also use Netlify and Firebase as other SAAS dependencies but we covered that
earlier.

Recently we switched from Firebase to Netlify for our hosting because our v1.0
launch consumed 1 month's quota within 7 day. Netlify really came to the
rescue.

In all cases we're using the free tier of these services.

We also perform an AWS backup of our Netlify builds, but more on that later.

## How many servers does your app run on and how do you manage them?

We have 2 servers that are running on [DigitalOcean]({{ site.links.digitalocean
}}). They are both running [CentOS](https://en.wikipedia.org/wiki/CentOS) 8.x
and have 8GB of memory. It's the standard server $40 / month plan.

The first server is our main server which handles the nginx proxy and
the other is our secondary server that acts as a backup and remains idle from
traffic.

We're inspired by [Ansible](https://github.com/ansible/ansible) and the way it
handles configuration management.  There's an active development branch for
Ansible integration. It's something we want to use soon.

[Kubernetes](https://kubernetes.io/) is also something we're looking into, but
that's a big work in progress.

## What does your deployment process look like?

The `master` branch is deployed to production on every commit via CI / CD with
Travis CI and Netlify. The master branch is protected with write access only
given to administrators and collaborators.

Every commit to master is done through pull requests and all pull requests
must have at least one review approval before it gets merged into master.

{% image interviews/5/postwoman-travis-ci-pipeline.jpg %}

Deployment happens on Netlify and Firebase simultaneously. Actually, Netlify
builds finish first so that we can have a look at the deploy preview build and
hot fix it if anything goes wrong.

Our tests run in parallel inside of Netlify and Travic CI, but the tests
finish first in Netlify. If everything passes on the Travis side of things we
build new Docker images. That only happens if all tests pass.

Having any type of CI system is 100x better than a manual code review on its
own.

Down time is avoided by having multiple builds. If Travis fails to build then the
last successful Netlify build is served. If the Firebase limit is reached
Netlify hosting is switched in, and if the limit is reached on Netlify then we
switch to Firebase. We switch this over with DNS records.

Since this is an open source project, all of the devs are from different
backgrounds. Some are beginners, some are at an intermediate level and some are
very experienced.

It's important that we practice a very tight code review and have good test
cases that are monitored by the core devs. Pull requests are also reviewed
by intermediate devs and minor bug fixes and improvements can be done by
beginners. There's a place for everyone to contribute.

## How have you planned for disasters, unexpected events or malicious users?

The code is version controlled [in
GitHub](https://github.com/liyasthomas/postwoman) and the production builds are
backed up in Netlify as well as Firebase. The Docker images are also stored on
the Docker Hub.

Every backup is identified with the latest commit hash.

Backups are automated and in the case of a failure the last known good backup
will take priority. These are available because we save the the last successful
production and preview builds in AWS. This helps us rollback if anything goes
wrong and that approach is useful since it's an open source project.

Although we brag about zero down time, there might be some amount of delay in
proxy mode while the server reboots but this does not happen regularly.

We also run the code through [DeepCode AI analysis](https://www.deepcode.ai/),
LGTM security reviews and [Synk security](https://snyk.io/) reviews for both
security issues and overall code health. This gives us both automated and human
level reviews.

Lastly we use <https://statuspage.io> for health checks.

Also, preventing DDoS is something we're currently giving top priority. It's a
fact that we neglected some of the basic security measures at first but we're
catching up.

## What's your advice for others who are running similar stacks in production?

Here's some tips in no special order:

- Always have a backup of your code and deployment builds
- Have really tight code reviews
- Write tests
- Automate everything and use CI / CD
- Choose what you need, not the what's the current "cool tech stack"
- Make decision quickly and don't regret your decisions, learn from them
- When in doubt, ask
- Make your code run for another 10 years from now
- Don't listen to people who you don't trust
- Make mistakes, but not twice
- Push to production on Saturdays, but make sure all tests pass
- I make mistakes all the time, that's what helps me keep learning
- Read "Start with why" by Simon Sinek and do that
- Most important of all, enjoy life

## Where can we go to learn more?

- My site: <https://liyasthomas.web.app>
- GitHub: <https://github.com/liyasthomas>

If you want a heads up on my next projects, or just want to chat about the web
make sure to follow me on Twitter
[@liyasthomas](https://twitter.com/liyasthomas). 💙

-- Liyas Thomas
