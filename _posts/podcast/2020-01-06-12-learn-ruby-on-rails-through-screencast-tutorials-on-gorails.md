---
layout: "podcast-or-interview"

mp3_bytes: "71115648"
mp3_duration: "1:14:04"

guest: "Chris Oliver"
guest_avatar: "chris-oliver.jpg"
guest_website: "https://gorails.com/"
guest_twitter: "excid3"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "postgres"
  - "redis"
  - "nginx"
  - "digitalocean"
  - "lets-encrypt"
  - "ubuntu"
  - "cdn"
  - "payments"

title: "Learn Ruby on Rails through Screencast Tutorials on GoRails"
description:
  Chris Oliver goes over how he built his video platform using Ruby on Rails.
  It's hosted on a single $20 / month DigitalOcean server.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
builds and deploys his screencast tutorial platform called [GoRails]({{
page.guest_website }}). The site handles about 2 million page views a year on a
single $20 / month DigitalOcean server. GoRails has been up and running since
2014.

There's a lot of useful nuggets of information in this episode around keeping a
pulse on similar communities that you're in. For example, Chris took a lot of
inspiration from Laravel when it came to implementing the billing code for
GoRails. *Spoiler alert: Rails does scale*.

## Show Notes

- 1:42 -- Avoiding burn out by having a 2nd project to work on
- 3:11 -- Scratching your own business needs is a healthy way to drive a project
- 4:13 -- GoRails gets 2 million page views a year (~500k unique visitors)
- 4:36 -- Looking at Laravel for inspiration when it comes to batteries included
- 7:12 -- Talking a bit about Bootstrap vs Tailwind CSS
- 9:47 -- Being aware of developer driven vs user driven features
- 10:24 -- GoRails uses server side templates with Turbolinks
- 13:11 -- Using Turbolinks has been good but there are gotchas
- 14:16 -- Flatpickr is a really nice datetime picker with minimal dependencies
- 14:43 -- Websockets and Action Cable aren't used in GoRails but it is with Hatchbox
- 17:03 -- Introducing just enough JavaScript complexity as needed, but no more
- 18:54 -- Trying to avoid heavy client side JS for performance issues on low end devices
- 20:09 -- GoRails is using Rails 6.x with Webpacker but it's not using Sidekiq
- 22:31 -- Docker isn't being used in development or production to keep complexity low
- 23:40 -- PostgreSQL is used as a primary database along with Redis for caching
- 25:13 -- Using the strong migrations gem to help make production migrations less scary
- 28:23 -- Hopefully more advanced database related features make its way into Rails
- 29:31 -- The entire GoRails site is hosted on a single $20 / month DigitalOcean server
- 30:24 -- Making extensive use of multi-level caching helps a lot for performance
- 31:57 -- Passenger is being used as the web server (it's an nginx module)
- 34:15 -- Let's Encrypt is still being used on the server for end to end encryption
- 36:28 -- Errbit is being used for catching errors which gets emailed back to him
- 37:47 -- Keeping tracking in house with Ahoy to keep costs down and help against fraud
- 40:35 -- Wistia is used for hosting / streaming videos and it has useful built in metrics
- 43:04 -- Manually transcoding video is hard and expensive (Wistia does the dirty work here)
- 44:02 -- Both Stripe and BrainTree are being used as payment gateways
- 45:49 -- Inspired by Laravel, Chris wrote a Rails Engine called Pay
- 46:50 -- It took 3 months to get payments to work with Stripe's new SCA APIs
- 48:12 -- Accepting payments went from being simple to outrageously complex
- 50:24 -- You should deal with SCA now in the US to future proof yourself later
- 52:06 -- Even the database is hosted on that single $20 server (2 CPU cores / 4 GB of memory)
- 52:36 -- Honestly the database for GoRails is pretty tiny but it's heavily backed up
- 55:39 -- Walking through the deployment process from development to production
- 57:57 -- GoRails isn't using Hatchbox yet, but it will be eventually
- 58:13 -- Upgrading Ubuntu LTS releases gets tricky without a 2nd web server
- 59:46 -- Having a managed database would help with upgrading servers with minimal risk
- 1:00:41 -- There's a few seconds of down time for each deploy at the moment
- 1:01:30 -- Passenger isn't just for Ruby apps, it works with Python and Node too
- 1:02:34 -- Everything will come up automatically after a system reboot
- 1:05:25 -- Environment variables are protected with Rails' encrypted credentials
- 1:07:39 -- Best tips? Things are more changeable than you think, keep it simple initially
- 1:08-20 -- Always keep your master branch deployable with automated tests
- 1:10:12 -- Open sourcing and writing about the tools you've built helps everyone
- 1:13:08 -- Chris is on twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}), also check out [GoRails]({{ page.guest_website }}), [Hatchbox.io](https://www.hatchbox.io/) and [Jumpstart](https://jumpstartrails.com/)

## Links

- <https://rubyonrails.org/>
- <https://www.ruby-lang.org/en/>
- <https://www.hatchbox.io/>
- <https://jumpstartrails.com/>
- <http://railscasts.com/>
- <https://twitter.com/dhh>
- <https://www.intercom.com/>
- <https://laravel.com/>
- <https://laravel.com/docs/5.8/billing>
- <https://www.youtube.com/watch?v=Gzj723LkRJY> (famous 15 minute blog in Rails)
- <https://basecamp.com/>
- <https://crystal-lang.org/>
- <https://amberframework.org/>
- <https://tailwindcss.com/>
- <https://twitter.com/adamwathan>
- <https://getbootstrap.com/>
- <https://www.figma.com/>
- <https://github.com/turbolinks/turbolinks>
- <https://github.com/stimulusjs/stimulus>
- <https://wistia.com/>
- <https://github.com/flatpickr/flatpickr>
- [https://buildasaasappwithflask.com/](https://buildasaasappwithflask.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
- <https://guides.rubyonrails.org/action_cable_overview.html>
- <https://redis.io/>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://vuejs.org/>
- <https://sidekiq.org/>
- <https://github.com/rails/webpacker>
- <https://github.com/brandonhilkert/sucker_punch>
- <https://www.ansible.com/>
- <https://www.postgresql.org/>
- <https://docker.com>
- <https://en.wikipedia.org/wiki/Ubuntu>
- <https://github.com/capistrano/capistrano>
- <https://www.postgresql.org/docs/9.3/libpq-notify.html>
- <https://www.postgresql.org/docs/9.4/datatype-json.html>
- <https://github.com/ankane/strong_migrations>
- <https://twitter.com/andrewkane>
- <https://github.com/ankane/production_rails>
- <https://github.com/ankane/secure_rails>
- <https://www.cloudflare.com/>
- <https://github.com/phusion/passenger>
- <https://www.nginx.com/>
- <https://github.com/puma/puma>
- <https://en.wikipedia.org/wiki/Systemd>
- <https://letsencrypt.org/>
- <https://github.com/errbit/errbit>
- <https://github.com/ankane/ahoy>
- <https://egghead.io/>
- <http://vimeo.com/>
- <https://aws.amazon.com/s3/>
- <https://www.digitalocean.com/products/spaces/>
- <https://stripe.com/>
- <https://www.braintreepayments.com/>
- <https://www.paypal.com/us/home>
- <https://stripe.com/docs/strong-customer-authentication>
- <https://github.com/pay-rails/pay>
- <https://github.com/backup/backup>
- <https://edgeguides.rubyonrails.org/security.html#environmental-security>
- <https://github.com/features/actions>

## Shameless Plugs

- Nick: Want to learn Docker? Join thousands of others in my
  [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
  video course
