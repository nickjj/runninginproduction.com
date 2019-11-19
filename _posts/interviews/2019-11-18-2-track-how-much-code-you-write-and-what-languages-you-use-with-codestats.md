---
layout: "podcast-or-interview"

guest: "Mikko \"Nicd\" Ahlroth"
guest_avatar: "mikko-nicd-ahlroth.jpg"
guest_title: "Elixir enthusiast / Code::Stats lead developer"
guest_website: "https://codestats.net/"
guest_twitter: "AmNicd"

category: "interviews"
tags:
  - "phoenix"
  - "elixir"
  - "postgres"
  - "nginx"
  - "lets-encrypt"
  - "hetzner"
  - "gitlab"
  - "open-source"

title: "Track How Much Code You Write & What Languages You Use with CodeStats"
description:
  Mikko Ahlroth goes over how he uses Phoenix and Elixir to run a programming
  stats service. It's free to use and it's been up since 2016.
---

## What's your background and what site are you running in production?

My name is Mikko Ahlroth, and I'm a software developer working at [Vincit
Oyj](https://www.vincit.fi/en/), mainly with Python and JavaScript based
projects. I've also been working with Elixir in my free time since version 0.10
which was released in 2013.

[Code::Stats](https://codestats.net/) is a statistics service for programmers
that I've been working on in my free time.

It records what languages you're using and it does this using a plugin that you
would add to your code editor. It supports VSCode, JetBrains, Sublime Text,
Vim, Atom [and more](https://codestats.net/plugins).

This data is visualized in different ways on the website. For example, here's
my profile:

[{% image interviews/2/mikko-ahlroth-code-stats-profile.jpg
%}](https://codestats.net/users/Nicd)

I'm the lead developer and administrator of the service. I've made about 80%
of the commits but there are also other contributors -- especially around
adding support for editor plugins.

The website along with the code editor plugins are open source. You can find
the repos at <https://gitlab.com/code-stats>.

The project has been live since May 2016. During work days we have around **60
to 120 API write calls per minute**. On a monthly scale this means around 2.1
million API hits. So this is the view of a small'ish Elixir service. We are
currently running on [Elixir](https://elixir-lang.org/) 1.9 and
[Phoenix](https://hexdocs.pm/phoenix/overview.html) 1.4.

## What motivated you to use Phoenix / Elixir?

The first modules of Code::Stats were written during a hackaton event at my
company.

I started with Phoenix because I was (and still am) very excited to use Elixir
and Phoenix. Phoenix is Elixir's most popular web framework. The Phoenix
channel system for real-time updates was also a factor, as it allows for
updating the user profiles and other parts of the user interface right as data
comes in.

For example, if you visit the [home page](https://codestats.net/), each dot
that appears on the map is pushed out in real time over a Phoenix channel.

The choice of Phoenix has worked out very well for the project. There is plenty
of help material around and the guides are generally very good. It's also very
featureful, covering most aspects of typical web services, and has many support
libraries from the community.

Before working on Code::Stats, I had written a blog engine in Phoenix, so it
wasn't completely foreign to me. As for Elixir, I had been working with it on
and off since 2013.

## Is your site a monolith or broken up into microservices?

Code::Stats is a monolithic service. All the code is contained in a single
project and the build artifact is a single release that gets run.

The release starts multiple app specific Elixir processes such as:

- Request process pool
- [Ecto](https://hexdocs.pm/ecto/Ecto.html) (Elixir's main data mapping library) process pool
- Channel processes
- Various processes that cache data
- Periodic tasks on a timed interval

If we wanted to, we could have strict microservice-style boundaries between the
different parts, but the service is still simple enough to not warrant the
effort required for that.

Currently the back-end code base is around 5,200 lines of Elixir and Embedded
Elixir ([EEx](https://hexdocs.pm/eex/EEx.html)) templates, in around 120 files.

Keeping the project as a monolith and inside of one Git repository helps keep
the development overhead low. In my opinion starting with microservices and
multiple repos from the beginning is a waste of effort for little gain and much
hassle.

You can get very far with a monolith, and as long as you keep it internally
organized, you can split parts out later. Prematurely going for microservices
may lead to a *distributed monolith*, where you get the flexibility of a
monolith, but with distributed problems added into the mix heh.

As for Git, if a mono repo works for a project as big as the [Linux
kernel](https://github.com/torvalds/linux), it surely works for any site I
might envision making!

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

The service uses mostly plain old server rendered templates. Most of the pages
need very few interactions and EEx templates are easy to reason about.

There's also no extra thinking about SEO since pages can be crawled by bots.
For the pages that do have interactive elements,
[RE:DOM](https://redom.js.org/) is used. Some pages only have a bit of it and
others like the profile page render the whole content area using JavaScript.

This was yet again both a choice of pragmatism and learning. The pragmatic
aspect comes from the history of Code::Stats.

The front-end used to be written in [Elm](https://elm-lang.org/). It was a new
and fancy language and I was really excited about functional programming. What
became an issue was the low speed of development I had due to the Elm way being
quite foreign to me.

So I made a choice to drop Elm in a refactor and write JS, which I knew very
well. At the same time I picked up a new (to me) framework called RE:DOM,
because it was very minimal and didn't get in my way. I took a look at
[Angular](https://angularjs.org/), [React](https://reactjs.org/),
[Riot](https://riot.js.org/), and even
[BuckleScript](https://bucklescript.github.io/) before going with RE:DOM
because I felt it was close to plain JS but abstracted the most painful points
of the DOM, and I've been quite happy with it.

As mentioned, the front page of the website and the individual user profiles
use Phoenix channels for live updates. The RE:DOM code hooks into Phoenix's
channel events and delegates updates to the various components on the
front-end. That part has worked out extremely well.

{% image interviews/2/code-stats-home-page-events.jpg %}

On each API call we fire a broadcast to the user's channel (for those viewing
their profile) and the front page's channel. If there's no one listening to a
channel, it's (nearly) just a no-op, so we don't need to worry about wasting
compute cycles or bandwidth.

I'm happy with our technology choices so far, though I've been planning on
rewriting the JS parts in strict [TypeScript](https://www.typescriptlang.org/)
for better reliability and IDE support. Additionally the Chart.js library is
sometimes quite clunky to work with and fills most of the size of our JS
bundle, so its replacement is being planned sometime in the future.

As for advice for others, think about balancing the popularity of a tech with
its fanciness. I've made many choices to learn the newest, coolest, bleeding
edgest frameworks and tools (and even wrote some of my own), just to learn the
pain of not having proper support.

Phoenix and Elixir have great support resources even though they are smaller in
popularity.

But in the front-end world you can end up in a really small niche and end up
shouting into empty chat rooms for help.  And that's never fun when you want to
get stuff done.

## What does the rest of your tech stack look like?

The rest of the tech stack is very standard for the most part. Everything runs
on Linux, which is a no-brainer as a choice.
[PostgreSQL](https://www.postgresql.org/) offers best-in-class database
features and is well supported in Ecto which comes included by default in
Phoenix apps.

Then there's [nginx](https://www.nginx.com/) which terminates TLS, serves
static files and acts as a proxy for the Phoenix application. I've always been
very impressed with nginx and it's my default choice for any web serving needs
nowadays.

For SSL certificate registration I'm using
[acme.sh](https://github.com/Neilpang/acme.sh). I picked acme.sh for its
simplicity and Unix philosophy. I configure it to fetch the certificate and put
it in a certain directory and handle the rest (like reloading it into nginx)
myself. It has no dependencies other than Bash, which is nice.

Caching is done both inside of Elixir using
[ETS](https://elixir-lang.org/getting-started/mix-otp/ets.html) (Erlang Term
Storage) and in the database. On startup, a couple of processes boot and read
data from the database to store in ETS.

When API calls from users arrive they also update the data in ETS. ETS is then
used for example to render the front page very quickly. Each user additionally
has a cache in the database as a
[JSONB](https://www.postgresql.org/docs/current/functions-json.html) column,
which can easily be extended to add new datasets. It keeps track of aggregate
data that would be too expensive to calculate on each page refresh.

Using JSONB columns as needed inside of PostgreSQL is a nice way to get the
benefits of a flexible NoSQL database while still being able to use PostgreSQL.

## Which external SAAS tools does your site depend on?

We are using two SaaS providers: [Mailgun](https://www.mailgun.com/) and
[AppSignal](https://appsignal.com/).

**Mailgun** provides us with transactional email sending. It's currently only
used for password reset emails, but there is mass mailing capability written
into the code. For example, from the server I can open a shell into the running
instance to send a one-off email to all users but I've yet to use that feature.
Mailgun was chosen for its simplicity and free tier that is completely enough
for us.

**AppSignal** offers us monitoring and error logging tools for the service. Any
crashes and abnormal operations are logged and notifications are sent to me via
email. I can also inspect historical data about the server's performance.

{% image interviews/2/app-signal-example-dashboard.jpg %}

It's a very useful service and they are providing it to us free of charge. I'm
very grateful for that, and it has helped manage the service considerably.
Because I know it alerts me of issues, I can sleep more soundly. :D

## Which cloud hosting provider or platform are you using to host everything?

Code::Stats runs on a very traditional setup of a single VPS. We used to have a
dedicated server from online.net, but its disk I/O proved to be slow due to
having just a regular HDD.

To alleviate the issues, we moved to a VPS from
[Hetzner](https://www.hetzner.com/) that has access to SSD storage. It has 4
virtual cores and 16GB of RAM. Due to being a small service and the efficiency
of Elixir, this serves us very well and there's lots of room for growth. The
cost for this is around 24 € per month.

The current server is running [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu)
Server 18.04 LTS. It's a pragmatic choice in that it has a lot of support and
is quite stable. The original server ran [Arch
Linux](https://www.archlinux.org) but lately I haven't had time to keep
upgrading it constantly; Ubuntu is a bit more relaxed in that sense. :)

## How many servers does your app run on and how do you manage them?

Everything is done on the same server. PostgreSQL, nginx and the Elixir release
of the service all run on the same machine. Code::Stats uses around 200 to 300
MB of RAM. That leaves a lot of memory to be dedicated to PostgreSQL for
greater in-memory caching.

There is also a separate similar server for the beta instance but both
production and the beta server each run on their own single and separate
server.

A VPS was chosen because I've been running Linux servers for years. Setting it
up is quite routine so I have not bothered with a deployment / configuration
tool such as Ansible, or containers.

## What does your deployment process look like?

There are two different deploy processes for Code::Stats, one for the beta
instance and one for production. The beta instance is automated and production
is currently done manually.

Whenever a commit is pushed to the master branch, [GitLab
CI](https://about.gitlab.com/product/continuous-integration/) builds the
project, runs tests, and updates the documentation. It also pushes the version
to the beta server where a GitLab CI process installs the dependencies, builds
a release, migrates the database, and finally restarts the instance with the
new release.

The whole process takes a few minutes.

{% image interviews/2/gitlab-ci.png %}

This was automated because manually doing that for all commits in master would
be unwieldy. There is the overhead of maintaining the CI process though, which
may break due to changes in the project structure or installation procedures.

**For production**, this is not necessary due to releases being somewhat rare.
When it's time to make a new release, it is built in a
[Vagrant](https://www.vagrantup.com/) box that mimics the production server.
The built release is transferred with `scp` and extracted over the old one.
Database migrations are run and then the
[systemd](https://en.wikipedia.org/wiki/Systemd) service is restarted. This
works well when the procedure is as simple as this.

Each production deploy results in about 10 seconds of downtime, or more if
there are database migrations that need the old instance to be shut down first.
This is fast enough for such a non-time-critical service in my opinion, so I
haven't spent effort in faster deploys or hot code reloading.

## How have you planned for disasters, unexpected events or malicious users?

Hetzner handles performing an automatic backup of the machine every night.

There is a script on the server that dumps the database every night to a file
so that the backup process can take a copy of that file instead of the raw
PostgreSQL data files. The script also deletes backup files that are older than
a set date. The service has no user generated content outside of the database,
so only that needs to be backed up.

The server has been configured to restart the service if it goes down. This is
done using systemd's restart policies. In case of issues with that, I will get
a notification from AppSignal that the service is not sending data. There are
also other notifications in AppSignal that alert me of different things with
the service, e.g. all crashes are reported.

Otherwise the server is protected as much as I know how to. The SSH and HTTPS
configurations have been hardened with modern settings, such as only SSH key
based logins are permitted.

## What's your advice for others who are running similar sites in production?

One thing that comes to mind is not to let the modern web development world
overwhelm you. There are a lot of tools and complexity that you feel you "have
to use" to run a service. [Docker](https://www.docker.com/),
[Kubernetes](https://kubernetes.io/), microservices, single-page apps, and so
on. All this can discourage you from starting.

Yet there is nothing wrong with a simple single-node service that serves
server-rendered HTML like Code::Stats for example. With Elixir, you can use
the resources of a single server more efficiently and go quite far before
thinking about more complex setups.

What I wish I had thought more when writing Code::Stats was grouping up the
modules a bit better. Phoenix nowadays has good guides for that with
[contexts](https://hexdocs.pm/phoenix/contexts.html), but when I started using
it, I was totally new and some controllers are still quite messy from that.

Good code organization will help you a lot down the line. With Elixir it's
quite different from other languages in some parts, but the more you write the
better you get at it.

I'm not an avid reader of programming books, so the way I got into Elixir was
that I read through the getting started guide on the website and just started
hacking away at it. That worked well for me, but from what I've heard, the
books [Programming Elixir](https://amzn.to/353peDI) by Dave Thomas, and [Elixir
in Action](https://amzn.to/2CL9xow) by Saša Jurić are highly recommended.

Note that due to the fast moving nature of the language, there are outdated
editions of many books, so you have to check to get an updated one.

The Elixir community is a very friendly one. I myself frequent the
`#elixir-lang` IRC channel on [Freenode](https://freenode.net/) as "Nicd".
There's also the [Elixir Forum](https://elixirforum.com/), a [Discord
server](https://discord.gg/elixir) and a [Slack
channel](https://elixir-slackin.herokuapp.com/).

## Where can we go to learn more?

If you want to discuss anything related to Code::Stats, please join our Discord
server at <https://discord.gg/gyzRfjc>.

You can also send a tweet to [@code_stats](https://twitter.com/code_stats). I
myself can be found at [@{{ page.guest_twitter}}](https://twitter.com/{{
page.guest_twitter }}) and I'm happy to talk about all things Elixir. :)

-- {{ page.guest}}, {{ page.guest_title }}
