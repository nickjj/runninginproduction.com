---
layout: "podcast-or-interview"

mp3_bytes: "75475584"
mp3_duration: "1:18:37"

guest: "Todd Gardner"
guest_avatar: "todd-gardner.jpg"
guest_website: "https://trackjs.com/"
guest_twitter: "toddhgardner"

category: "podcast"
tags:
  - "dotnet"
  - "c-sharp"
  - "react"
  - "jekyll"
  - "ansible"
  - "elasticsearch"
  - "iis"
  - "monitis"
  - "nginx"
  - "ovh"
  - "redis"
  - "slack"
  - "stripe"
  - "teamcity"
  - "ubuntu"
  - "windows"

title: "Easily Find, Reproduce and Track Your JavaScript Errors with TrackJS"
description:
  Todd Gardner talks about building a SAAS app with .NET and how it's hosted on
  dedicated hardware with OVH.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built [TrackJS]({{ page.guest_website }}). It's written in .NET and pulls
together a number of different technologies to get the job done. It's all
hosted on OVH using dedicated hardware and has been running in production since
2013.

Todd talks about how to track JavaScript errors in production, creating a
data pipeline to ingest thousands of errors a minute in ~80 milliseconds, the
benefits of pjax, how dedicated hardware ended up being half the price of
cloud servers and using Ansible to configure all of the servers.

## Topics Include

- 2:06 -- Working nights and weekends until it made enough to replace consulting work
- 3:05 -- Being your own boss changes how you think about writing software
- 4:23 -- Thousands of developers a day use TrackJS resulting in thousands of errors per minute
- 5:45 -- Installing TrackJS is painless, just drop the JS snippet into your site's HTML
- 6:38 -- Debugging client side JavaScript can be difficult for a number of reasons
- 7:43 -- Motivation for using .NET / C#
- 9:05 -- Why it's a good idea to avoid shiny new tech when you're building a new product
- 12:14 -- Why TrackJS is mostly a monolithic application instead of microservices
- 13:23 -- But there are bits that are broken into their own service when it makes sense
- 13:40 -- Creating a pipeline to efficiently capture and process a ton of incoming data
- 15:21 -- Leveraging nginx to quickly create logs for requests that are processed later
- 16:23 -- For data that is more time sensitive they wrote a .NET service that uses Redis
- 18:45 -- If TrackJS gets slammed, it will never effect page load speeds for their customers
- 19:40 -- nginx was configured to write out JSON formatted logs
- 21:46 -- The processor service ingests those log files and figures out what to do next
- 22:38 -- Then there's the web front-end service that developers use to browse their errors
- 23:30 -- Elasticsearch is used to store the errors to create very fine grained reports and filtering
- 24:15 -- A quick recap of the technologies used so far
- 24:39 -- ASP.NET is similar to Rails, it's server rendered templates but they use React too
- 25:52 -- pjax is used to make the app feel very fast even with server rendered templates
- 27:10 -- pjax / Turbolinks is one of the best bangs for your buck to make your site feel fast
- 28:23 -- Making the most of your tech stack with a small team of developers
- 31:12 -- Elasticsearch needs a bit of tuning if you're using it as your primary database
- 32:04 -- Writing their own .NET class to interface with the Redis backed queue
- 33:31 -- IIS (Microsoft's web server) serves the app without nginx sitting in front of it
- 34:17 -- Load balancing is done over DNS with a round-robin strategy across 3 servers
- 36:13 -- All 3 web servers get restarted at once during updates because IIS is great like that
- 37:31 -- Everything is hosted on dedicated hardware with OVHCloud after moving off Azure
- 39:58 -- Poor support and opaque downtime resolutions is why they moved off the cloud
- 41:26 -- After thinking about, using Ansible to set up machines seemed like a good idea
- 42:01 -- They landed on using OVH after doing a bunch of research
- 42:48 -- $180 / month for a high end Xeon 8 CPU core server w/ 64 GB of RAM + 2 TB of SSDs
- 43:28 -- It was more work to set up but it's A LOT faster and costs were dropped in half
- 44:40 -- When something goes wrong, it's obvious on what went wrong when it will be fixed
- 45:47 -- Even while running at 10% capacity, they do capacity planning every quarter
- 46:44 -- $180 / month is an average figure, they have smaller servers doing different things
- 47:19 -- They run about 12x Elasticsearch servers that are pretty beefy ($240 / month)
- 47:49 -- Overall they have about 30 servers that they have to manage
- 48:31 -- Some servers run Ubuntu LTS, and the web servers run Windows Server 2016
- 49:10 -- Managing Windows servers is kind of a pain in the butt
- 51:04 -- Ansible is used to configure both the Windows and Linux servers
- 53:32 -- It takes about 48 hours to get new hardware from OVH, but that's not a problem
- 54:11 -- Using Team City to help get code from development to production
- 55:50 -- The test environment gets real production data synced every hour
- 56:32 -- Their "dev" environment is really a test environment
- 58:20 -- It gets pushed to production manually through a Team City job by choice
- 59:28 -- But every time they git push code, a new test environment is set up automatically
- 59:43 -- They use their own service to help monitor JavaScript errors and it helps
- 1:00:29 -- They built their own back-end monitoring tools too due to lack of choices
- 1:00:55 -- Todd has opinions on back-end monitoring in general
- 1:01:47 -- Real exceptions get sent to their primary Slack chat channel
- 1:03:30 -- Payments are handled using Stripe but it doesn't use SCA
- 1:05:16 -- Monitis is used to monitor their infrastructure load and website up-time 
- 1:07:39 -- They would still use rented hardware but maybe use .NET Core today
- 1:09:10 -- Depending on well tested and mature tools allows you to use them years later
- 1:10:38 -- Best tips? Don't build something in new tech just to use new tech 
- 1:12:36 -- When it comes to billing code, try to deal with it early on (it's tricky)
- 1:15:26 -- It's hard to test webhooks and other external interactions in an automated way
- 1:17:23 -- You can find Todd on Twitter [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }}) and check out his new monitoring service at <https://requestmetrics.com>

## Links

###### 📄 References

- <https://docs.microsoft.com/en-us/dotnet/core/>
- <https://dotnet.microsoft.com/apps/aspnet>
- <https://github.com/turbolinks/turbolinks>
- <https://en.wikipedia.org/wiki/Round-robin_DNS>
- <https://en.wikipedia.org/wiki/Windows_Server_2016>
- <https://www.jetbrains.com/teamcity/>
- <https://www.monitis.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/defunkt/jquery-pjax>
