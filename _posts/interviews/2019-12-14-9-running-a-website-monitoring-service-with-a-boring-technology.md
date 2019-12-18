---
layout: "podcast-or-interview"

guest: "Jamhur Mustafayev"
guest_avatar: "jamhur-mustafayev.jpg"
guest_title: "Webmaster"
guest_website: "https://tryhexadecimal.com/"

category: "interviews"
tags:
  - "rails"
  - "ruby"
  - "static-site"
  - "postgres"
  - "redis"
  - "netlify"
  - "heroku"
  - "aws"
  - "payments"

title: "Running a Website Monitoring Service with a Boring Technology"
description:
  Jamhur Mustafayev goes over developing an uptime monitoring SaaS app with
  Rails and talks about deploying it to both Heroku and AWS.
---

## What's your background and what site are you running in production?

My name is Jamhur Mustafayev. I run a small bootstrapped company called
[Hexadecimal](https://tryhexadecimal.com/).

Hexadecimal is a *no-nonsense* website monitoring service. When your website
goes down or your SSL / TLS certificates are about to expire, you get notified.

[{% image interviews/9/jamhur-mustafayev-hexadecimal.jpg
%}](https://tryhexadecimal.com/)

It has performed over 2.5 million checks to date and that number is constantly
growing.

I quietly launched Hexadecimal on [September 12,
2019](https://tryhexadecimal.com/changelog#2019-09-12). I was a bit anxious
going into this endeavor, since running an infrastructure business (read: high
availability) as a one-person company is quite a challenge. Even though it is
early to talk about it, the whole thing turned out to be quite stable.

Hexadecimal's architecture in a nutshell is:

- A marketing, blog, docs and changelog site that is a static site
- A web app built with Ruby on Rails 6.x

For privacy and performance reasons, I don't have third-party analytics on my
websites, so I don't know how many people visit them every month. However, I do
have a handful of paying customers and that's what matters to me at the end of
the day.

## What motivated you to use Rails / Ruby?

I was familiar with Python at the time I started working on Hexadecimal, so I
went with [Django](https://www.djangoproject.com/).

However, I found myself fighting too much with Django and (especially)
[Celery](https://github.com/celery/celery) while trying to subjugate them to
my will so I started eyeing alternatives.

I also had some previous experience with
[Flask](https://github.com/pallets/flask/) and liked working with it very much,
but I knew I had to write a lot of boilerplate code so I decided against it.

I heard about [Rails](https://rubyonrails.org/) before but didn't know
much about it, except that it is quick to get up and running and has too much
magic.

I decided to roll with Ruby / Rails and see what happens. Coming from Python
land, I picked up Ruby quickly (Ruby and Python are kind of the same, but they
are different).

Rails is still a decent choice for most
[CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) apps,
although there is a fair number of unmaintained Ruby gems out there because
people have moved on to different languages and frameworks.

For anyone choosing Rails for their project, my only advice would be to not
fight with it too much -- it's opinionated for a reason. Use the default
patterns and tools provided by the framework, be it the template engine or a
testing framework.

## Is your site a monolith or broken up into microservices?

It's a monolith.

I know very little about the microservices pattern, except that if you are
unsure whether it is a right fit for you, you probably shouldn't use it.
Especially if you're a one person company.

To give you a sense of the size of Hexadecimal's codebase, here is the output
from the `rails stats` command which shows details only about the Rails app:

{% image interviews/9/jamhur-mustafayev-hexadecimal-loc.jpg %}

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

Having a JavaScript heavy front-end was never even a consideration for me. It
adds unnecessary complexity for no good reason (in my case, that is). I
certainly didn't want to work on what would feel like two codebases at once.

Again, if you're on the fence whether you need to have a JavaScript framework
on the front-end and an API on the back-end, you probably don't.

Rendering HTML on the server is a perfectly fine approach and to deviate from
that you should have a very compelling reason to do so. Since Hexadecimal is a
simple CRUD app, I see no reason to use a JavaScript framework on the
front-end.

I use [Sprockets](https://github.com/rails/sprockets-rails) to manage assets,
even though I'm on Rails 6 which comes with the [Webpacker
gem](https://github.com/rails/webpacker) by default. Sprockets might not have
all the bells and whistles of a modern asset pipeline, but it gets the job done
and gets out of my way.

I might migrate to Webpacker in the future, although I feel anxious to pull in
hundreds of thousands of lines of JavaScript code.

{% image interviews/9/jamhur-mustafayev-hexadecimal-node-modules.jpg %}

The above is the number of lines of JavaScript inside of the `node_modules`
directory for a new Rails 6.x application using Webpacker. In case you can't
read it, there's 970,597 LOC.

My rule of thumb is to keep things as simple as possible for as long as I can
*get away* with it.

## What does the rest of your tech stack look like?

[Postgres](https://www.postgresql.org/) is my go-to database when I need to
support concurrent writes and reads in a distributed environment. If I didn't
have those requirements, I would have opted for SQLite which is a file-based
database. You can't go wrong with either of them.

[Sidekiq](https://github.com/mperham/sidekiq) which is background processing
framework for Ruby, relies on Redis to store all of its jobs and operational
data. I looked into [AWS Lambda](https://aws.amazon.com/lambda/), but there
were too many limitations for my liking. Lambda also creates a vendor lock-in
for a critical component of my application.
[Double-plus-ungood](https://en.wiktionary.org/wiki/double-plus-ungood).

I use [curl](https://curl.haxx.se/) extensively at Hexadecimal. Whenever I
provision a new server to run Sidekiq, I compile curl and some of its
dependencies (e.g. [nghttp2](https://github.com/nghttp2/nghttp2)) from source.

This allows me to run the latest version of those libraries, which supports the
latest protocol versions for TLS 1.3, IPv6, and HTTP/2 (HTTP/3 is on the
horizon). To talk to curl, I forked a gem called
[ethon](https://github.com/typhoeus/ethon), which is a lightweight Ruby
wrapper. In the future, I will probably write my own thread-safe Ruby wrapper
around curl's easy interface, which I'd love to open source.

Early on, I have decided to keep the marketing site separate from the web app.

The marketing site is a bunch of static HTML files with little-to-no
JavaScript. When gzipped, the average web page weighs a few kilobytes. People
usually ask me what framework / theme / template I used to build
[tryhexadecimal.com](https://tryhexadecimal.com) and the answer is none.

It is all designed and built from scratch. I usually eschew using CSS
frameworks (or themes for that matter) because they tend to get in my way. The
biggest downside of separating the two is a duplication of images and
stylesheets. None of the static site generators I have looked at supports
referencing files from outside of the source directory.

## Which external SAAS tools does your site depend on?

Given that I incorporated my company using [Stripe
Atlas](https://stripe.com/atlas), using Stripe as a payment gateway and a
billing engine was a default choice for me.

Stripe's Billing API isn't as easy as I expected it to be. I started building
my integration when they were preparing for the [Strong Customer
Authentication](https://stripe.com/guides/strong-customer-authentication) (SCA)
regulation in Europe. Half of their docs were pointing to older API primitives
(Charge, Source, Token) and the other half to newer ones (PaymentIntents,
PaymentMethods).

As someone who has never worked on billing logic before, it was quite a
challenge to make sense of it all. They could have handled it better,
especially the documentation part. But to be fair, billing logic is non-trivial
in itself, especially when you factor in all of the edge cases.

The domains and DNS records are handled by
[Cloudflare](https://www.cloudflare.com/). Caveat: once your domain is
administered by their registrar, you can't change your NS records away from
Cloudflare.

I use [SendGrid](https://sendgrid.com/) to send transactional emails. They have
a generous free plan, but I have experienced some problems in the past.

I pipe all my logs to [Papertrail](https://www.papertrail.com/) and use it as a
lightweight error tracker.

Whenever logs match a regex pattern ("fatal" OR "exception" OR "error"), I get
notified immediately. I set up other alerts as well, such as when someone
creates or deletes an account or when someone adds their credit card. As I
mentioned before, I don't use third-party analytics so these alerts are the
only window inside my app to see what's going on.

I share all my [costs](https://tryhexadecimal.com/running-costs) publicly, in
case you're interested.

## Which cloud hosting provider or platform are you using to host everything?

The static site is hosted on [Netlify](https://netlify.com/).

The web app is hosted on [Heroku](https://www.heroku.com/). It is very fast to
get up and running but costs an arm and a leg once you start scaling (not that
I worry about it too much).

However, in the near future I will be migrating off of Heroku. I am working on
a status page feature which necessitates running something like [Caddy
server](https://github.com/caddyserver/caddy) to provision and manage TLS
certificates for my customers.

Workers that perform background jobs (uptime and certificate checks being among
them) are hosted on [AWS EC2](https://aws.amazon.com/ec2/) in 4 different
regions. They are running the latest
[Ubuntu](https://en.wikipedia.org/wiki/Ubuntu) 18.04 LTS on a
[`t3a.micro`](https://aws.amazon.com/ec2/instance-types/t3/) instance with one
Elastic IP per machine.

{% image interviews/9/jamhur-mustafayev-hexadecimal-hosting.jpg %}

I [enabled IPv6 support](https://www.youtube.com/watch?v=j4lyl0UPvmc) so that
workers can connect to IPv6 endpoints as well. As of this writing, I spend
$1.39 / day on 4 AWS EC2 instances (which includes a mysterious *"EC2-Other"*
category). Once Hexadecimal gets to a certain scale, I will likely buy reserved
instances to reduce my costs.

I looked into [AWS ElastiCache](https://aws.amazon.com/elasticache/) (for
managed Redis hosting) but it turned out that the instance could only be
accessed within the VPC it was created, which is a deal-breaker for me.
Technically, it is possible to connect via a proxy NAT instance or an SSH
tunnel but that's too duct tape'y.

Since most of the work for Hexadecimal happens in the background, Redis is a
critical piece of infrastructure. I ended up going with
[RedisCloud](https://redislabs.com/redis-enterprise-cloud/) for Redis hosting.

Postgres is hosted on [AWS RDS](https://aws.amazon.com/rds/) using a
`db.t3.micro` instance in two availability regions (for higher uptime). It
costs me $1.05 / day.

## How many servers does your app run on and how do you manage them?

Currently I'm running a managed Postgres server (in 2 availability zones), a
managed Redis server (with in-memory replication), 1 Heroku dyno for the web
app and 4 EC2 servers for churning through background jobs.

To provision a new server, I run a Bash script over SSH. After the script is
done, I fire multiple [Capistrano](https://capistranorb.com/) tasks to copy
over some configuration files and set them up. It is a semi-manual process, but
I have documented every step of it. In case something goes terribly wrong with
the provision process I nuke that server and start from scratch.

I tried using [Ansible](https://github.com/ansible/ansible) in the past (it's
been a while) but didn't like it because it was too slow and complex. Every
time I wanted to do something off the beaten path I had to resort to duct tape
and bubble gum to make it work.  With a Bash script, I can execute whatever
commands I want.

As I mentioned before, I try to stick with the simplest possible solution for
as long as I can get away with it. I was bitten by (needless) complexity
before, so I have internalized my lesson well.

## What does your deployment process look like?

Deploying the marketing site involves pushing code to the `master` branch of a
git repository on GitHub. Netlify picks it up from there and builds the site.

Deploying the web app is a bit involved since it should happen both for the web
app and background workers in tandem. More importantly, I have to time my
deployments so that there won't be a big delay in uptime checks.

At some point in the deployment process, all Sidekiq queues get silenced,
meaning they can't accept and process new jobs (i.e. some uptime checks might
get delayed). The sweet spot is to deploy ~45 seconds after the last uptime
checks were run. That way I can avoid potential delays.

I use Capistrano to deploy the background workers. It takes some time to
properly set it up, but once you're done it is smooth sailing.

One lesson I learned the hard way was when deploying your code, make sure that
you have the same version of the code running across your entire infrastructure
(web app, background workers, etc.). This is especially true in a distributed
environment. Otherwise you create mental overhead for no good reason.

When it comes to secrets (e.g. API keys), I place them at the top of the
`~/.bashrc` file as environment variables. When I need to change any one of
them, I SSH into every machine and change them by hand. Since it happens so
rarely I can't bring myself to automate that. When it comes to Heroku, I manage
them with Heroku's CLI tool.

## How have you planned for disasters, unexpected events or malicious users?

Database backups are retained for 10 days.

I use Hexadecimal to monitor Hexadecimal's uptime and certificates. Workers
are separated from the rest of the infrastructure so even if the web app goes
down, I will still get notified (workers schedule periodic jobs themselves).
Since workers are located in different parts of the world, it is highly
unlikely that all of them will be knocked down by an unlikely event.

Soon after launching Hexadecimal, I got hit by a botnet attack. Those jerks
were submitting 2 POST requests to /login, followed by 2 POST requests to
/signup and since there were no bot checks in place they were creating many
fake accounts.

Their requests originated from residential IP addresses (probably hacked
[IoT](https://en.wikipedia.org/wiki/Internet_of_things) devices), so banning by
IP address was off the table. The easiest solution could have been sticking a
Google reCAPTCHA on the site, but it annoys the hell out of me and I didn't
want to send any iota of my users' data to Google.

I ended up introducing a [honeypot
field](https://en.wikipedia.org/wiki/Honeypot_(computing)) using the
[invisible_captcha gem](https://github.com/markets/invisible_captcha)
(disclosure: I'm a contributor). It uses multiple heuristics to keep bots at
bay, such as:

- Hidden form field with a *bogus name* which is not meant to be filled out
- Time sensitive submissions (i.e. if it was submitted too quickly, it's likely a bot)
- Every time you load the form page it has a timestamp, if the timestamp is
missing then it is most likely a request submitted by a bot directly to the
POST endpoint

Luckily for me those bots weren't quite sophisticated, so I clamped down on
their activity. They still try to sign up but none of them can bypass the
invisible captcha... yet.

On top of the honeypot field, I rate limit requests with the [rack_attack
gem](https://github.com/kickstarter/rack-attack/).

I don't proxy traffic via Cloudflare's servers but if I ever get hit by a DDoS
attack (it will happen eventually given enough time), I will have no choice but
to put the web app behind it.

Systemd makes sure that the Sidekiq processes come online every time a reboot
happens. Speaking of reboots, the Ubuntu servers come with the
unattended-upgrades package that automatically keeps your system dependencies
up to date (reboots are disabled by default).

I have a Capistrano task that checks if any given machine needs a reboot:

```ruby
desc 'check if reboot is required'
task :reboot_required do
  on roles(:worker) do
    execute :ls, '/var/run/reboot-required', raise_on_non_zero_exit: false
  end
end
```

If it does, I SSH into a machine and reboot it by hand.

All connections coming in and out of the app are encrypted. I have enabled
[HSTS](https://cheatsheetseries.owasp.org/cheatsheets/HTTP_Strict_Transport_Security_Cheat_Sheet.html)
and [preloaded my
domain](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Strict-Transport-Security#Preloading_Strict_Transport_Security)
to prevent man-in-the-middle attacks.

I also have a *strict* [Content Security
Policy](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP) in place. If you
aren't familiar with CSP, it is a way for whitelisting resources that you
want to get loaded on your website. When used correctly, CSP deflects most [XSS
attacks](https://developer.mozilla.org/en-US/docs/Glossary/Cross-site_scripting).
*Obligatory warning sign*: if you have a website with external scripts, fonts,
image or stylesheets and you slap a CSP on without much consideration, it will
most likely break your website since it will prevent those assets from loading.

If you want to go down this route, enable it in report-only mode and observe
warnings as they appear. Keep in mind that you will be getting false positives
from script blockers.

I have a single cookie used by Rails to store a session. It has the following
attributes:

- `HttpOnly` - Can't be tampered with
- `Secure` - Can be loaded only over TLS
- `SameSite: Lax` - Is only sent with safe methods (e.g. HEAD, GET)
- [`__Host-*`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Set-Cookie#Cookie_prefixes) - Is only accessible over TLS and from the same domain it is set on

It is fair to say that if you run a web service on the public internet for long
enough, you will be breached eventually. That's why I err on the side of
collecting as little data as possible and deleting data when it is past its
useful lifetime.

From day 1, folks were able to delete their accounts with a click of a button.
Deleted accounts aren't flagged as soft deletes either. They are really deleted
with a `DELETE FROM accounts WHERE id=$1` type of query. Data is a liability --
the less, the better.

## What's your advice for others who are running similar stacks in production?

- There is nothing wrong with using an old, [boring
technology](http://boringtechnology.club). It feels ridiculous to even state
that, but a lot of people in this industry are practicing HDD or RDD, AKA. Hype
Driven Development or Resume Driven Development. Don't get carried away by the
hype. In fact, ignore most (if not all) of it. When in doubt, avoid complexity.

- Don't pull in too many dependencies. There is a fine line between pulling in
too little and too many. My rule of thumb is if something is very easy and
quick to implement or is a core competency that I want to have full control
over, I build it myself.

- Update your dependencies often. Every day that I work on the codebase, I run
`bundle outdated` to see if any dependencies need to be updated.

- Prefer static sites over dynamic ones. Static sites are *almost* unbreakable.
They are easier to secure, easier to maintain, more performant and have a
higher uptime.

- Limit configuration options inside your app (i.e. user dashboard). Every
option adds a path that needs to be tested and maintained. It's fine to be
opinionated and it's fine to make choices (i.e. reasonable defaults) for your
users. Simplicity is a feature.

- Don't rush to [automate tasks](https://xkcd.com/1205/).

- If you don't have any tests but want to start somewhere, start with
high-level tests (integration or system). Don't worry too much about stubs,
mocks, fixtures vs factories, TDD, CI / CD pipelines and all that jazz. Don't
beat yourself up for not having 100% test coverage. It will get easier once you
start writing them.

- Be mindful of your costs. $29 / month subscriptions here and there might not
seem like much but they can add up fast. Again, there is a fine line between
doing everything yourself or outsourcing every single task you have. Use your
judgment wisely.

- If you don't have much experience running a web application in production,
you will make mistakes. When you screw up, be honest about what went wrong and
how you are going to prevent it from happening again.

## Where can we go to learn more?

You can learn more about me and what I'm up to at [my personal
weblog](https://jmstfv.com), [Twitter](https://twitter.com/jmstfv), or
[GitHub](https://github.com/jmstfv). I love talking to internet strangers, so
feel free to reach out.

From time to time, I will be sharing behind the scenes stories of running a
one person software business on [Hexadecimal's
blog](https://tryhexadecimal.com/journal/).

-- {{ page.guest }}, founder of Hexadecimal. {{ page.guest_title }}. Writer of
code and prose.
