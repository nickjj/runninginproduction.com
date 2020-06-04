---
layout: "podcast-or-interview"

guest: "Marian Dziubiak"
guest_avatar: "marian-dziubiak.jpg"
guest_title: "Software Engineer / Student"
guest_website: "https://ref.polskaligaquidditcha.pl/"
guest_twitter: "MDziubiak"

category: "interviews"
tags:
  - "dotnet-core"
  - "c-sharp"
  - "cloudflare"
  - "docker"
  - "lets-encrypt"
  - "mysql"
  - "nginx"
  - "open-source"
  - "ubuntu"

title: "A Site Where New Quidditch Referees Can Take a Test to Officiate Games"
description:
  Marian Dziubiak talks about an open source .NET Core site he created in
  his spare time. It's running in production from his home laptop.
---

## What's your background and what site are you running in production?

My name's Marian Dziubiak. I study Computer Science at the University of Warsaw
in Poland.

Right now I'm in the process of getting my master's degree and will finish my
studies next year. Outside of studies I try to make videos for
[Youtube](https://www.youtube.com/user/manio1432), write a [technical
blog](https://www.md-techblog.net.pl/), and I play
[quidditch](https://en.wikipedia.org/wiki/Quidditch_(sport)).

I'm fairly involved in the sport of quidditch from the organizational side and
the [site I created]({{ guest.website }}) is for the referees of the Polish
Quidditch League. What I do for quidditch is unpaid volunteer work -- I'm
passionate about the sport and trying to help it grow.

The site is a small referee portal, where referees can take a test that they
have to pass in order to officiate games. There's also a bunch of articles
linked on static pages, so that referees can learn more about their job than
what's necessary to just pass the test.

We have around 90 registered users out of whom 30 took and passed one of the
tests this year.

{% image interviews/7/marian-dziubiak-quidditch.jpg %}

There's three types of tests because in quidditch there's many different types
of officials for any game. Referees can also obtain international certification
from the International Quidditch Association and request that a given test is
marked as passed in their profile.

I have worked on this site by myself and it's been running in production since
November 2017.

Given a very small user base we have nearly no traffic (at most 10 users at a
time). The site was first written in
[F#](https://en.wikipedia.org/wiki/F_Sharp_(programming_language)) with
[Suave](https://suave.io/), but after experiencing irreproducible errors I
decided to rewrite it in
[C#](https://en.wikipedia.org/wiki/C_Sharp_(programming_language)) with
[ASP.NET
Core](https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.1) 2.0.
It's [open source on GitHub](https://github.com/manio143/PLQRefereeApp) if you
want to take a look.

## What motivated you to use ASP.NET Core / C#?

I'm a huge fan of the .NET platform. I have previously worked on a few sites in
C# and F# so I had the knowledge that allowed me to write the website much
quicker than if I were to use another technology.

This was my first time working with ASP.NET Core rather than with ASP.NET on
the .NET Framework. There are some minor differences like changes in tooling,
but I was able to get through them quickly.

I mainly use Linux and I was really happy I could spin up a
[Docker](https://docker.com) container with my application running on .NET
Core. Thanks to many new features in the .NET run-time and its standard library
the ASP.NET Core application is quite fast.

If I were to consider a different technology (which I didn't at the time), I
would look into either NodeJS or Python. I have used Django in the past,
but to be honest I didn't like it as much as ASP.NET.

It's hard for me to pinpoint why, but I guess I felt there was more boilerplate
code in Django. So even if I were to rewrite the app now, I'd probably stick
with ASP.NET Core, but maybe use something like
[Giraffe](https://github.com/giraffe-fsharp/Giraffe) with F#.

## Is your site a monolith or broken up into microservices?

It's a micro monolith with about:

- 2,500 lines of C#
- 100 lines of SQL
- 250 lines of JavaScript

I went with the classical MVC approach, so my project is dived by the
functionality of classes rather than their domain.

For larger projects I'd advise doing a separation based on the feature /
domain. So in my case I'd have a separate authentication namespace, user
profiles namespace, testing environment namespace and include the given models,
views and controllers in that namespace.

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

For the most part the site gets generated on the back-end using [Razor
templates](https://docs.microsoft.com/en-us/aspnet/core/mvc/views/razor?view=aspnetcore-3.1).
There's not much need for any JS outside of the testing environment. I'm a big
proponent of vanilla JavaScript when it makes sense. In my case it's just
getting a list of questions in JSON from the back-end and then generating the
view by calling the DOM API.

I have done some React work recently and I would definitely think about using
JSX for easier development, but because the DOM doesn't change after being
generated, including a huge library like React would be a waste of resources.
On the other hand, if I were to drop MVC and make my back-end just a data API
then React would be a good choice for all of the front-end.

## What does the rest of your tech stack look like?

I'm running the site with Docker and I use [Docker
Compose](https://docs.docker.com/compose/) to orchestrate multiple containers.

Apart from an ASP.NET container with the app I also have a
[MySQL](https://www.mysql.com/) container serving the database. There's many
controversial opinions on having the database in a container but for my scale
it doesn't have any issues and is very practical to have everything set up in
one directory. For managing the database I have
[phpMyAdmin](https://www.phpmyadmin.net/) in a Docker container as well.

I use [Entity Framework](https://docs.microsoft.com/en-us/ef/) (an ORM) to
generate SQL queries when talking to the database. I did however create the
initialization SQL scripts by hand.

Those three containers are enclosed in a [virtual
network](https://en.wikipedia.org/wiki/Network_virtualization), and the app is
also part of a proxy network. There I have [nginx](https://www.nginx.com/)
facing the outside world and proxying all the requests back to my ASP.NET
container. I use [Let's Encrypt](https://letsencrypt.org/) to get my SSL
certificates which I plug into nginx. Currently I renew them manually, but it
takes so little time I don't care.

**I'm running all this off of an old laptop that's my home server**. Because I
don't have a public IPv4 address, but do have an IPv6 address I have set up a
[Cloudflare](https://www.cloudflare.com/) proxy to allow everyone to access my
site. I keep all my DNS records on Cloudflare.

## Which external SAAS tools does your site depend on?

I used to use [Papertrail](https://www.papertrail.com/) to store my logs, but
that was before I decided to self-host the app, and it was because my previous
cloud provider ([Sloppy](https://sloppy.io/en/)) did not offer viewing
container logs.

Now since I self-host everything from my laptop, I do not depend on any other
third party services besides what was listed earlier.

## Which cloud hosting provider or platform are you using to host everything?

From the start I knew I wanted to use Docker.

In the beginning I was using Sloppy to host my containers (one of cheapest
options at the time), but then I decided to set up a home server to reduce
costs.

I had an old laptop with a broken hinge, so I decided to convert it into a
server. I installed [Ubuntu](https://en.wikipedia.org/wiki/Ubuntu) 18.04 LTS
Server on it, fiddled a bit to connect to WiFi and now it's running all the
time.

{% image interviews/7/marian-dziubiak-laptop-server.jpg %}

It has a Core 2 Duo 2GHz processor, 4GB of RAM and a 200GB HDD. It's not a
very fast machine but because I don't have much traffic it works fine. And it's
cheaper than hosting in the cloud.

I've set up the server to only take connections on ports 80, 443 and 22. That's
HTTP + HTTPS for nginx and 22 for SSH. If I want to manage the database I
create an [SSH tunnel](https://www.ssh.com/ssh/tunneling/) to access the hidden
ports.

## What does your deployment process look like?

I'm using the [Docker Hub](https://hub.docker.com/) to store the Docker images.

I'm not using any CI / CD environment. I have a script that builds and deploys
the image to the hub. I tag the image with the SHA of the commit along with
`latest` and if I have tested it then `stable` too. Then I have to login to my
server and do a `docker-compose pull` to get the latest version and then
restart the containers with `docker-compose up -d`.

I have a test environment (running on the same server but in a separate virtual
network) that allows me to test changes, and a production environment where I
only deploy the stable images.

The downtime during deployment is minimal but I do make sure that no one is
currently taking a test, because restarting the container wipes out session
data.

I should probably automate it, but since there's not much active development
I'm not very motivated. It works, and if there's an issue I can usually fix it
within an hour but that's rare.

## How have you planned for disasters, unexpected events or malicious users?

I haven't planned much. The services come up when the server boots up, so as
long as it's not completely off it's fine. Otherwise I need to manually press
the power button. Should the service become unavailable and someone wants to
use it, they know me and will send me a message on Facebook. I don't have any
other kinds of alarms or health checks.

I backup the database manually every year. I know I should set up automatic
backups. If the data were to be lost I have a general idea of who passed what
tests. The users might have to retake the tests, but to be honest it would be
good for them to make sure their knowledge is up to date.

When I first started self-hosting I noticed a lot of strange activity in the
nginx logs. That provoked me to get a list of known malicious IP addresses from
the internet to help filter them out.

I'm using new technologies with all the security features so I'm not that
afraid of generic attacks on my server. If I were to be DDoSed I think
Cloudflare has some protection on their side and I'm safe behind their proxy.

## What's your advice for others who are running similar stacks in production?

Set up automation for everything from the start, otherwise it might be hard
to do that later. Logs are very important and information about errors should
be presented to you in a fashion that allows you to take action.

I had an issue with one user who during registering had only half of the data
inserted into the database and that caused exceptions in a somewhat unrelated
place. Had I known about the erroneous state I could have fixed it sooner.

I'm generally satisfied with the technologies and services I chose. Most of the
issues came from my mistakes or lack of knowledge ahead of time. If something
goes wrong then I have to find out what, why, how to fix it, and then I
discover that it's rather simple after I gained that knowledge.

## Where can we go to learn more?

You can see the code on GitHub at
[PLQRefereeApp](https://github.com/manio143/PLQRefereeApp) (there's some
screenshots as well).

The content of the site is in Polish and it's meant for the Polish quidditch
referees. I have also a few blog posts on my adventures with the server [MD
Tech Blog: Server tag](https://www.md-techblog.net.pl/tags/Server/), but it's
also in Polish.

If you want to know more you can tweet at me (or send me a DM) [@{{
page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}). I realize
that it's not very often you work on a small site sitting on your home server,
but I have learned plenty that I can share with you if you have a project of
similar scale.

-- {{ page.guest }}, {{ page.guest_title }}
