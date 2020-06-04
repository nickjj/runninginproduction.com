---
layout: "podcast-or-interview"
updated_on: "2019-11-24"

guest: "Nick Janetakis"
guest_avatar: "nick-janetakis.jpg"
guest_title: "Full stack developer"
guest_website: "https://nickjanetakis.com"

category: "interviews"
tags:
  - "static-site"
  - "jekyll"
  - "ansible"
  - "digitalocean"
  - "lets-encrypt"
  - "namesilo"
  - "nginx"
  - "ubuntu"
  - "uptime-robot"

title: "100k+ Page Views a Month for $5 with a Self Hosted Static Site"
description:
  Nick Janetakis who is a full stack developer breaks down how he built and
  deploys his personal blog that he's been working on for 5 years.
---

## What's your background and what site are you running in production?

Hi, I'm Nick Janetakis and I've been a self-taught freelance developer for the
last 20ish years.

I split my time between doing [freelance work]({{ site.author.links.website
}}/work-together), creating [online courses]({{ site.author.links.courses }})
for developers and sharing everything I learned along the way [on my blog]({{
site.author.links.website }}/blog/).

As of right now this is a completely solo project. I write, edit, produce and
support everything alone. I guess you could say it's a lifestyle business and
I really enjoy it!

I've been running my blog for ~5 years now and I used
[Jekyll](https://jekyllrb.com/) to create my site. According to Google
Analytics, it gets over 100k+ unique page views a month and has survived being
on the HackerNews front page a few times.

[{% image interviews/1/nick-janetakis-website.jpg %}]({{ site.author.links.website }}/blog)

## What motivated you to use Jekyll?

Before I used Jekyll, I hosted my blog on Tumblr for a while but I wasn't crazy
about the writing experience there. As a developer I felt the most comfortable
in my code editor and having to copy / paste everything between my editor and
Tumblr's web editor was slowing me down.

I think a static site is a perfect match for most blogs. The writing experience
is fantastic, you can version control it, you have total control over
everything, it doesn't take a ton of effort to get going and page load speeds
are very fast because you're just serving static content.

Prior to using Jekyll I had some Ruby experience ([Jekyll is a Ruby based
static site generator](https://en.wikipedia.org/wiki/Jekyll_(software))) but
you don't have to write Ruby to create your site. You'll spend a majority of
your time writing Markdown and working with Liquid -- which is a template
engine that Jekyll uses.

However, if you do want to get into the nitty gritty and write some custom
behavior you can use Jekyll's plugin system which does require writing Ruby
code. There's also a healthy ecosystem of plugins written by other folks and
you can drop them into your site as package dependencies just as you would with
any programming language that has a package manager.

I looked long and hard at a bunch of other static site generators like Hugo,
Pelican, Gatsby and others. Ultimately I felt like Jekyll offered the best
bang for my buck when it came to getting up to speed with it, features and ease
of customization.

With that said, even if I started the blog today instead of ~5 years ago I
would still choose Jekyll.

## Is your site a monolith or broken up into microservices?

It's a monolith since it's just a static site. I can't speak for other static
site generators but Jekyll does a really good job at letting you split things
up which makes upkeep and maintenance pretty straight forward.

Even with 250+ blog posts and a bunch of different pages it's really easy to
keep things organized so that when I want to modify something I know exactly
where to look.

For example, all of the live posts are in their own directory and drafts are in
another. And then there's dedicated directories to keep your layouts, includes,
plugins (optional) and your assets separated. You can also split up all of your
non-blog pages into their own directories too.

The whole site fits in 1 git repository, but that's just the Jekyll bits and
pieces. When it comes to serving the site with nginx, I let Ansible control
nginx's config files -- but more on that later.

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

A blog is a very good example of being a document based site IMO. What I mean
by that is, you're just displaying information. That is the primary focus.

There's no fancy UI requirements like rendering Google Maps or a game.

Since there's no back-end to serve something, this isn't something I even had
to think about. I'm sure you could probably (over) engineer a blog site with a
non-static API driven approach where you split things up but that's not for me.

By the way, I'm not using a specific Jekyll theme. The site is based off of
Bootstrap 3.x and I customized it from there. I just tried to come up with
something minimal and readable.

I'm very happy with my decision to keep things how they are. But, on that note
I am thinking about adding
[Turbolinks](https://github.com/turbolinks/turbolinks) to my site. Turbolinks
makes page transitions feel pretty speedy and only requires adding the JS
dependency and 1 line of code for GET requests.

## What does the rest of your tech stack look like?

Jekyll is the only thing I run in development. I don't even use something like
Webpack because Jekyll has a plugin called
[jekyll-assets](https://github.com/envygeeks/jekyll-assets) which allows you to
bundle up your SASS and Javascript. It also adds md5 hashes to your asset's
file names so you can cache bust them with nginx.

That's part of the appeal of a static site. There's no worrying about keeping
up an app server or fiddling around with databases or cache back-ends.

On the server, when it comes to serving the site all I run is
[nginx](https://www.nginx.com/resources/wiki/start/). nginx takes care of
serving the static files that Jekyll generates. That includes the HTML files,
images, fonts, CSS and Javascript.

Besides serving files, nginx is configured to set various security related
headers, perform server side redirects (such as www to the root domain and http
to https) and serve SSL certificates.

Speaking of SSL certificates, I am using [Let's
Encrypt](https://letsencrypt.org/) to issue them. I'm so happy Let's Encrypt
exists. I think if you host your own blog or any site, it really should be over
HTTPS. It doesn't matter how you do it (mostly) -- just do it up.

Also, I'm using [Namesilo](https://www.namesilo.com/?rid=4404761du) as my
domain registrar along with [DigitalOcean]({{ site.links.digitalocean }}) to
host my DNS records. I think they make a good combo. Namesilo has $9 / year
.com domains and free domain privacy for life. DigitalOcean is where I host my
site so using it for DNS hosting is pretty standard. DO's DNS API comes in
handy for doing DNS based domain validation for Let's Encrypt.

## Which external SAAS tools does your site depend on?

I've chosen to use Google Analytics, Disqus and Sumo. My site would function
without them but they add a few things that I like having around.

I use Google Analytics mainly to get a 10 second overview of how the site is
doing. Is it growing every month? What pages are people mostly visiting? It's
also handy to help make sense of where your traffic is coming from.

{% image interviews/1/nick-janetakis-ga.jpg %}

My page views were a bit higher that month due to a post trending on HN for
half a day.

[Disqus](https://disqus.com) is what I use to handle my comments. There's a few
thousand comments across all of the posts, so comments are definitely something
people like using.  I haven't looked too deep into using an alternative comment
system since Disqus works well enough for now.

Finally there's Sumo, which I'm not crazy about but it was a pretty painless
way to get social sharing icons set up. Truthfully I might ditch it soon
because I don't find it to be that valuable to see the share count, plus some
places don't even support keeping track of that count. Adding plain old icons
would be good enough and when I get some time I will switch over to that.

One less JavaScript dependency is a win in my book, especially since it's an
external resource. I'm all for minimalism and trying to keep my pages loading
quickly.

*Update: I've removed Sumo from my site. The social share icons you see now are
just plain old links with no external service or JavaScript dependencies.*

By the way, in all cases I'm using the free offerings by these services.

## Which cloud hosting provider or platform are you using to host everything?

My site has always been hosted on [DigitalOcean]({{ site.links.digitalocean
}}). I've been using them since they nearly started. They hooked me in with
SSDs, decent hardware specs and a fairly competitive price.

They also have a really good dashboard for seeing high level stats about your
server.

I look at other providers from time to time just to keep a pulse on what's
available and while I'm sure other providers are good, I just haven't seen any
compelling reason to switch -- or even think about switching over.

Especially since DO has been adding more and more services ontop of just
offering a VPS with root SSH access. It's like they are getting better and
better as time goes on.

Although in the case of my blog, I don't use any extra DO services like spaces,
block storage, load balancers, managed databases or Kubernetes. That's a few
services DigitalOcean has available.

I started with and still currently run a $5 / month droplet (server) which
comes with 1 CPU core, 1 GB of memory, a 25 GB SSD and 1 TB of transfer. It
also comes with free email based support.

In terms of outgoing bandwidth, I average about 60 GB per month with a decent
amount of images being served. As part of the $5 / month server you get up to 1
TB of outgoing bandwidth per month before you need to pay extra. If you go
beyond 1 TB it will be 2 cents per 1 GB.

The server currently runs Ubuntu 18.04 but I've used Debian in the past. I tend
to switch between both distros depending on the release cycle and what package
versions are available.

## How do you manage your server?

Even though I'm only using 1 server, I still manage and provision that server
with [Ansible](https://ansible.com).

I spent a long time manually setting up servers in the past which was very
tedious and error prone, so I think it's a very good idea to use some type of
configuration management tool even if you're working with 1 server.

What it boils down to is being able to spin up a server and then run 1 Ansible
command and about 5 minutes later everything is set up. This includes things
like setting up a deploy user, installing and configuring nginx, configuring a
firewall and securing the server.

In fact, I host more than just my personal blog on this server. The landing
pages for all of [my courses]({{ site.author.links.courses }}) and
[runninginproduction.com]({{ site.url }}) all run from the same server as
static sites. With the way I have Ansible set up, adding a new static site only
involves adding a few lines of YAML code and waiting a minute for a single
Ansible command to finish running.

There's no stress because everything is well tested and I'm just running the
same code I've used on other projects. Unless there's a catastrophic outage
with Let's Encrypt I have total confidence things will work after I run
Ansible.

## What does your deployment process look like?

I just run an Ansible command that builds the Jekyll site locally on my dev box
and then uses rsync under the hood to transfer the files from my development
box to the server. It takes ~30 seconds where a majority of the time is waiting
for Jekyll to build the site.

When it comes to down time there is none because nginx doesn't need to restart
or reload to serve new files. It serves them up on the next request. For most
deploys rsync is only transferring over 1 new HTML file for the new blog post
along with an image since I have at least 1 image per post. That part of the
deploy takes about a second.

The reason I'm using rsync and not git pushing to the server is because my site
has hundreds of 1920x1080 images that are included in photo galleries and I
didn't want to include all of those in a git repo. There's hundreds of
megabytes worth of binary files.

If I didn't have all of those images then I would have used Ansible to create
a bare git repo on the server and then set up a Bash alias locally on my dev
box which would build the site locally and git push the code to the server
without needing to run Ansible to do the actual deploy.

This works for me because I'm the only developer working on the site and I'm
perfectly happy with keeping the build and deploy process on my dev box to
keep things as simple as possible.

## How have you planned for disasters or unexpected events?

To be honest, not that much. One of the perks of using a static site is that
you don't need to worry about database backups.

My servers are also stateless for the most part. The exact copy of the site
that gets transferred to the server is the exact copy that's on my dev box.
There's no user uploads or any other files that I don't already have locally.

I keep a local copy of the site backed up onto an external USB based HD.

On the server there's nginx logs but I don't care about backing them up because
I don't mind if they disappear. Especially nowadays with GDPR, you need to be
careful about what you log. For example, I don't include IP addresses in my
logs anymore just to be safe.

The only service related to my site that's running is nginx and it's running
within systemd which has a restart policy attached to it if happens to crash.
In all this time I never had nginx crash. Everything also comes up on its own
if the server happens to get rebooted.

Overall the system purrs like a kitten and system resources barely go above 5%
CPU usage and 25% memory usage when under HackerNews front page load. Under
normal traffic levels the CPU load is at 0.15%'ish with 25%'ish memory usage.

{% image interviews/1/nick-janetakis-digitalocean-metrics.jpg %}

Although I do have DigitalOcean's alert policies configured so that if the
disk space, CPU load or memory consumption gets to dangerous levels I will
get automatically emailed. Fortunately it hasn't gone off yet.

I also use [Uptime Robot](https://uptimerobot.com/) which pings my site every
5 minutes to ensure a configured URL reports back a 200 status code. Their free
plan is very useful. I've been using them for years.

## What's your advice for others who are running similar stacks in production?

I think it's a really good idea to be in control of your own blog's content.

That means hosting it on your own domain and preferably hosting your own server
just so you don't need to worry about the terms of service of other platforms,
or having your site go down because the platform you're using is experiencing
unexpected downtime.

A lot of blogging platforms talk a big game with offering discoverability
but that often only happens after you send your own audience / traffic to the
post and then it gains traction. They are not going to bend over backwards to
drive traffic to your post that has no initial traction.

But on that note, it's not a bad idea to experiment with syndicating
(duplicating) your posts on platforms as long as they set canonical URLs back
to your site. It's very important they set proper canonical URLs so you avoid
duplicate content penalties from search engines. Only do this on sites you
highly trust.

Lastly, it's not that much work to keep things running on your own server once
it's all set up. The only time I ever think about the infrastructure hosting my
site is when I add a new static site which is almost never. This is mostly
thanks to standing on the shoulders of giants. A
[Debian](https://www.debian.org/) based Linux distro and nginx are rock solid.

It wasn't all breezy though. I'm not going to sit here and say it was an easy
path to learn all of this. You're probably a developer like me, so you know
how much time and effort it takes to really learn something and then get a good
amount of experience using it out in the wild before you feel comfy with it.

But with that said, I think it was all worth it in the end. You can think of
hosting a static site as one of the easier types of sites to host. If you end
up deploying a larger dynamic app in the future, you can re-use all of your
knowledge to help get you going. It'll be much easier to reason about.

## Where can we go to learn more?

You can find my site at [nickjanetakis.com]({{ site.author.links.website }}).
I'm also [@{{ site.author.links.twitter }} on Twitter](https://twitter.com/{{
site.author.links.twitter }}) and [{{ site.author.links.github }} on
GitHub](https://github.com/{{ site.author.links.github }}).

If you have any questions, tag me on Twitter. I'll do my best to answer
everything.

-- {{ page.guest }}, {{ page.guest_title }}
