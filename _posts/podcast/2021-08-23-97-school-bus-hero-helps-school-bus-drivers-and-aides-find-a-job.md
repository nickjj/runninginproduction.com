---
layout: "podcast-or-interview"

mp3_bytes: "47981184"
mp3_duration: "49:58"

guest: "Dieter Lunn"
guest_avatar: "dieter-lunn"
guest_website: "https://schoolbushero.com/"
guest_twitter: "coder2000"

category: "podcast"
tags:
  - "rails"
  - "ruby"
  - "digitalocean"
  - "elasticsearch"
  - "honeybadger"
  - "mapbox"
  - "postgres"
  - "stimulusjs"
  - "turbo"
  - "webpack"

title: "School Bus Hero Helps School Bus Drivers and Aides Find a Job"

description:
  Dieter Lunn goes over building a job board site for school bus drivers using
  Ruby on Rails. It's hosted on DigitalOcean with HatchBox.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
job board site for school bus drivers and aides using Ruby on Rails. It's
hosted on DigitalOcean with HatchBox.

Dieter talks about using a bit of StimulusJS to add pins to a map, keeping
things simple with a monolithic app, working on the code base with another
developer, upgrading to the latest versions on a regular basis and using
HatchBox to manage the servers.

## Topics Include

- 3:13 -- What the site does and examples of what types of pages it has
- 5:21 -- Motivation for using Ruby on Rails
- 7:02 -- Specific features of Rails and gems being used
- 11:04 -- Using StimulusJS for placing pins on an embedded 2D map
- 14:02 -- One feature lets you get emailed when new positions open at a company
- 15:40 -- It's a server rendered monolithic Rails app with sprinkles of JS
- 19:14 -- Keeping your gems up to date
- 23:15 -- Using Pundit to manage authorization
- 25:27 -- Keeping up with the latest versions and having an [app starter project](https://github.com/coder2000/campestral)
- 27:09 -- It's hosted with HatchBox on DigitalOcean
- 32:02 -- Walking us through developing a feature and deploying it to production
- 38:07 -- Payments are handled outside of the Rails app
- 39:39 -- Automation feels pretty good!
- 43:45 -- Currently Honeybadger sends notifications if the site is down
- 45:47 -- Best tips? Take your time and trust what others have built
- 48:08 -- You can find Dieter [on GitHub](https://github.com/{{ page.guest_twitter }}) and [on Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://gorails.com>
- <https://runninginproduction.com/podcast/12-learn-ruby-on-rails-through-screencast-tutorials-on-gorails>
- <https://github.com/coder2000/campestral> (Rails template starter project)
- <https://www.hatchbox.io/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/ankane/searchkick>
- <https://github.com/heartcombo/devise>
- <https://github.com/alexreisner/geocoder>
- <https://github.com/thoughtbot/administrate>
- <https://github.com/varvet/pundit>
