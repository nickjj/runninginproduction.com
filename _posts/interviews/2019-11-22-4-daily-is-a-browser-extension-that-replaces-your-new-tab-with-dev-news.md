---
layout: "podcast-or-interview"

guest: "Ido Shamun"
guest_avatar: "ido-shamun.jpg"
guest_title: "maker of Daily and a full stack developer"
guest_website: "https://www.dailynow.co/"

category: "interviews"
tags:
  - "koa"
  - "node"
  - "vue"
  - "mysql"
  - "docker"
  - "kubernetes"
  - "gcp"
  - "lets-encrypt"
  - "ci"
  - "open-source"

title: "Daily Is a Browser Extension That Replaces Your New Tab with Dev News"
description:
  Ido Shamun talks about building and deploying an open source browser
  extension using Vue, Node, Docker, GCP and Kubernetes.
---

## What's your background and what site are you running in production?

Hi 👋, I'm Ido Shamun and I've been building software for over 10 years since
high school. I started as a C++ developer and slowly transitioned to modern
languages such as JavaScript, Scala and Go.

I am the Co-Founder and Chief of Algorithm & Cloud at The Elegant Monkeys. We
build an Emotion AI to help people perform better and become healthier.

But, I'm here to share the story of my side project
[Daily](https://www.dailynow.co/). It's a browser extension which replaces your
new tab with the latest trending dev news.

For a long time our core team involved only 2 members (myself included), but
we also had help along the way from other members of the company. Recently
we added 1 more core developer to take care of developer relations.

Daily has been running in production since 2017 🚀.

Since then, it was featured in the Chrome Store and according to the store
statistics, we have ~33k weekly active users.

[{% image interviews/4/daily-chrome-store.jpg %}](
https://chrome.google.com/webstore/detail/daily-20-source-for-busy/jlmpjdjjbgclbocgajdjefcidcncaied?hl=en)

The extension is written in [Vue](https://vuejs.org/) 2.x and most of the
back-end code is powered by Node.

## What motivated you to use Koa / Node?

When we first started the project over two years ago, my go-to framework for
building back-end applications was [Node](https://nodejs.org/en/). I had a lot
of experience with it and built several applications. I knew immediately what
was required and how much time it would take to develop. It was very clear to
me that this should be my choice.

I think the best thing about Node is its community. It's one of the biggest and
most active communities I've ever worked with. For almost any question or
problem you might tackle, you can find an answer on Stack Overflow. There's
also a lot of open source packages to boost your productivity and help you
focus on your business logic.

At the time, I had a [Koa](https://koajs.com/) boilerplate that I really liked
so I used it to start the project. Probably today I would have chosen
[Express](https://expressjs.com/) or [Hapi](https://hapi.dev/) as they are much
more mature and active. Now it's too late for such a migration but for my next
project I will definitely evaluate other frameworks.

I'm not disappointed with my current choice but recently I got to know
[Golang](https://golang.org/) and I find it so easy and straightforward. I love
that it's a strongly-typed language and compiles to tiny binaries. Depending
on the project requirements I might consider it in the future.

## Is your site a monolith or broken up into microservices?

My best piece of advice for any developer is to start with a monolith. When you
just begin the project you know almost nothing about how to design it
correctly, the data structures, the relations between different entities and
you have a lot of questions you need to answer.

The last thing you want is the complexity of a microservices based
architecture. Start lean and tackle problems when they arrive, not before.

Following my advice, I started a single API service that delivers the necessary
data for the extension to consume on the front-end.

**Once this project became massive and hard to tame, I started thinking about
splitting it up to different services. This happened approximately one year
after running in production.**

I first created a redirector service that redirects my custom URLs to original
blog posts. After that it was a monetization service that's in charge of
fetching ads from different providers and a gateway service to handle all the
traffic.

Every service is deployed to our managed [Kubernetes](https://kubernetes.io/)
cluster that provides a network layer for inter-service communication and very
flexible deployment strategies.

I think the biggest struggle to split the monolith is to keep everything alive.
When you are already in production, you have users that are dependent on your
product and you can't just compromise your service's uptime.

You have to think ahead of time how to do the DNS swap, how to migrate data
from database A to database B and many other considerations that might be very
crucial for your service.

Nowadays, we have 9 GitHub repos and 7 of them are code repos (the other are
just docs). Some of the repos contain a few hundreds lines of code and others
contain too much code to count.

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

The most strict requirement of a browser extension is that all the code must
be in one offline artifact. You cannot fetch code from a remote source for
security reasons. Taking this into account, only one choice was actually on the
table, API back-end with a single page application.

The first version of the app was based on
[Polymer](https://www.polymer-project.org/) and [web
components](https://developer.mozilla.org/en-US/docs/Web/Web_Components) but
with all my love for these technologies, I changed my mind pretty soon.

For Daily 2.0, I decided to start from scratch and use Vue instead. Polymer has
great promise but the community is still young and not so active.  On the
contrary Vue is all over the internet and is very easy to start with.

It was very easy to start everything from scratch at the time and there are
lots of tutorials and blog posts out there about Vue. Just like Node, Vue also
has a vast eco-system of open source packages that shorten the time to
production.

## What does the rest of your tech stack look like?

Our architecture consists of two parts, the user-facing services /
applications, and the offline workers. The offline workers are serverless
services powered by [Google Functions](https://cloud.google.com/functions/).
They usually react to a [pub / sub
message](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern) or a
[webhook](https://en.wikipedia.org/wiki/Webhook). They are all written in Node
and they are in charge of crawling new posts, sending notifications and
emails, etc..

The user facing services are a combination of Node and Golang services. I
always wanted to learn Golang and I thought building a few very focused
microservices was the perfect chance for it. As mentioned before, these
services are deployed to a managed Kubernetes cluster.

Communication between the user facing services and the offline workers is done
with [Google Pub / Sub](https://cloud.google.com/pubsub/docs/overview).
There's no direct communication between them. That was done to keep them
decoupled.

I containerize everything I can for the back-end services because it's the
perfect solution for deploying artifacts. I've been a
[Docker](https://www.docker.com/) fan for a long time now and it simply
provides a platform to set up the exact environment your service needs.

The best thing is that you can use it both for your local environment and your
production environment. So for example, if someone wants to contribute to our
front-end repo they don't have to go through the cumbersome process of
installing all of the back-end's dependencies. They just need Docker and they
can run everything they need to get going.

Thanks to the integration between Kubernetes and [Google
Cloud](https://cloud.google.com/), when I deploy a new [ingress
controller](https://kubernetes.io/docs/concepts/services-networking/ingress-controllers/)
in my Kubernetes cluster, it automatically creates a [Google Load
Balancer](https://cloud.google.com/load-balancing/) to handle the traffic with
the correct port, SSL certificate and instance group. We issue our SSL
certificates using Let's Encrypt and [Jetstack's
cert-manager](https://github.com/jetstack/cert-manager) is handling the
rotation.

The last piece of the puzzle is our MySQL database (using [Cloud
SQL](https://cloud.google.com/sql/)). In my opinion, today there is a hot trend
of overlooking data solutions and thinking immediately about NoSQL products.
NoSQL databases are usually DevOps heavy and they aim to solve a specific
problem.

My tip here is pretty much the same as in the monolith vs microservices debate
-- start lean.

A SQL database is a perfect fit for most use cases (not all of them, of
course) and will scale with you along the way. Today I would probably choose
Postgres rather than MySQL but that's already too late for this.

**Here's a diagram of our architecture:**

{% image interviews/4/daily-architecture.jpg %}

## Which external SAAS tools does your site depend on?

The most important SAAS we use is [Superfeedr](https://superfeedr.com/), a
startup company acquired by Medium.

Superfeedr crawls a list of given RSS / Atom feeds and sends a message to a
webhook upon a change. In our architecture, Superfeedr is the first step in the
new content pipeline. It sends a HTTP-based trigger to a Google Function that
starts crawling for more data about the post.

Just recently, we have introduced full text search on our database. Instead of
developing our own search engine, we use [Algolia](https://www.algolia.com/).
It's an amazing product and the best thing is that they have a very generous
plan for open source projects.

We use [SendGrid](https://sendgrid.com/) to send emails and
[OneSignal](https://onesignal.com/) to send push notifications. Our main
criteria here was to reduce cost -- both providers have a free plan which is
exactly what we need and use.

For collecting logs, error reporting, alerts and almost anything related,
we use [Google's Stackdriver](https://cloud.google.com/stackdriver/). It is
integrated into Google's Cloud solution and very easy to use.

## Which cloud hosting provider or platform are you using to host everything?

Google Cloud is our go-to cloud, almost everything we host is there. I knew it
for a long time already and it has never failed me.  It has everything we need
such as: managed Kubernetes, managed MySQL, high-speed load balancer,
[serverless](https://en.wikipedia.org/wiki/Serverless_computing) functions and
what not.

Our Kubernetes cluster consists of only 5 [preemptible
machines](https://cloud.google.com/preemptible-vms/) with a 100GB SSD boot
disk,
[container-optimized](https://cloud.google.com/container-optimized-os/docs/)
OS, 2 vCPUs, and 2 GB memory. They are not fully utilized but it gives the
cluster enough flexibility in case of failure.

The MySQL cluster is highly available with active / passive deployment. Both
machines have 15 GB of SSD disk space, 1 vCPU and 3.75 GB memory.

**The total cost for all this infrastructure on Google Cloud is ~$330 per month
and I believe this setup can handle a much bigger load than we currently
have.**

For hosting our media content, we use [Cloudinary](https://cloudinary.com/). It
helps us optimize the media on-the-go and deliver it blazingly fast. Just in
the last 7 days, we delivered ~72 GB of media content.

{% image interviews/4/daily-cloudinary-stats.jpg %}

## How many servers does your app run on and how do you manage them?

As mentioned before, our Kubernetes cluster consists of 5 preemptible machines.
Usually, we deploy two
[pods](https://kubernetes.io/docs/concepts/workloads/pods/pod/) for each
service but with minimal requirements. For example, our main API service asks
for 128-256 MB of memory and 20-40% of 1 vCPU. This allows us to scale easily
with minimum cost.

We do not use traditional DevOps tools such as Ansible. Docker and managed
Kubernetes eliminates the need for such tools as our artifacts already contain
everything needed for the app to run and the servers themselves are not
something we need to really worry about.

In terms of Kubernetes and MySQL, we use the managed service for both. I just
love the managed services. It's the perfect solution for small teams, or in my
case, a one-man team. Daily is almost a zero-ops project with no downtime and
performance is always at the top. I can truly focus on building the product.

The right tool for our deployments is [Helm](https://helm.sh/), it lets you
manage Kubernetes deployments with YAML files. It takes time to get used to it
but it works like a charm. It's easy to rollback if something goes wrong and
it's easy to automate the deployment and check the status.

## What does your deployment process look like?

Following my zero-ops agenda, everything is automated from running tests on
every commit to automatically deploying master commits to production. The Daily
project has several repositories and some of them are not actively developed as
they just work.

But once in a while, you have to dig in and change something in those legacy
services. If the deployment pipeline is not automated you might forget things
along the way and it can break your system.

For most services, it all starts with a git push that triggers a
[CircleCI](https://circleci.com/) workflow.

The workflow usually starts with running the tests (unit and integration),
followed by building a Docker image and pushing it to [Google Container
Registry](https://cloud.google.com/container-registry/). If the commit is on
the master branch this brand new Docker image will be deployed with no downtime
to our production cluster.

Kuberentes' default deployment strategy is called [Rolling
Update](https://kubernetes.io/docs/tutorials/kubernetes-basics/update/update-intro/).
It creates one pod of the new version, checks that it is healthy and then
removes one pod of the existing version. It follows this process until it
reaches the desired scale for the new service.

CircleCI has a free plan for open source projects and lots of existing
integrations for Docker, Kubernetes and many others. We also get Slack
notifications for every build, so in case a build fails we know right away.

## How have you planned for disasters, unexpected events or malicious users?

Most of my disaster recovery plans rely on the capabilities of the platforms I
use. For example, in terms of a DDoS attack, I count on Google's Load Balancer
to handle and filter out traffic. If a service goes down or fails then
Kubernetes will automatically restart it and make sure it is live once again.

The managed MySQL cluster takes backups every day, this was the default setting
and I have never touched it.

The extension has offline support so in case the server is not responsive it
will take some time for the user to understand something is wrong. Furthermore,
in the case of unexpected events, it's unlikely that all services will be down
at once so part of the system may still function correctly.

I have also set some alerts on Stackdriver to check that the system is healthy.
I monitor the number of messages going through the Pub / Sub, uptime and other
metrics. I get the alerts both in Slack as well as mobile push notification
and email, making sure I won't miss it.

## What's your advice for others who are running similar stacks in production?

I keep repeating this message as I think developers underestimate it, **start
lean**.

Especially if you are a small team, just tackle problems when they come. Don't
try to guess or predict future problems. You will probably lose precious time
going down this path.

As developers, we tend to over-engineer systems, we just have to let this
instinct go and scale as we go. You don't really need this full-blown NoSQL
(Mongo, Elastic, whatever) cluster to handle 100 million records from day 1, so
don't just follow the hype.

Focus on your product, not on building cool technology. If there is an existing
third-party service (for example Cloudinary and Algolia) that can reduce your
development time and you can afford the cost, use it.

Sometimes your product can be as simple as patching together many different
services and that's totally ok as long as your users love it.

## Where can we go to learn more?

[Daily is 100% open source](https://github.com/dailynowco/daily) and a lot is
documented. [I have my own personal blog](https://shamun.dev/) and I'm
@idoshamun on [Twitter](https://twitter.com/idoshamun),
[GitHub](https://github.com/idoshamun) and [dev.to](https://dev.to/idoshamun).

If you have any questions, feel free to reach out on Twitter and I'll do my best.

-- {{ page.guest }}, {{ page.guest_title }}
