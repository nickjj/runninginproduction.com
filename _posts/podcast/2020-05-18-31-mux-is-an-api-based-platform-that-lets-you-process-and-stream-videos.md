---
layout: "podcast-or-interview"

mp3_bytes: "77583360"
mp3_duration: "1:20:48"

guest: "Dylan Jhaveri"
guest_avatar: "dylan-jhaveri"
guest_website: "https://mux.com/"
guest_twitter: "dylanjha"

category: "podcast"
tags:
  - "phoenix"
  - "elixir"
  - "golang"
  - "aws"
  - "buildkite"
  - "docker"
  - "fastly"
  - "gcp"
  - "kafka"
  - "kubernetes"
  - "opsgenie"
  - "postgres"
  - "prometheus"
  - "sendgrid"
  - "sentry"
  - "slack"
  - "stackpath"
  - "stripe"

title: "Mux Is an API Based Platform That Lets You Process and Stream Videos"
description:
  Dylan Jhaveri goes over building a video service with Phoenix, Elixir, Go
  and more. It's hosted on both AWS and GCP with Kubernetes.
---

In this episode of Running in Production, {{ page.guest }} talks about building
an API driven video platform called Mux. It uses Phoenix, Elixir and Go to
handle billions of video views a month. It's hosted on AWS and GCP with
Kubernetes and has been up and running since early 2016.

Dylan covers how video streaming works, processing billions of events a month,
taking advantage of Elixir and Phoenix's features, providing a zero downtime
public API, continuously deploying their products, working with massive
databases, metered billing and tons more.

## Show Notes

- 1:14 -- How online streaming video works with HLS and where Mux fits into the picture
- 7:51 -- Mux lets you post a video to their API and they give you an HLS playback URL
- 8:24 -- Mux has been up and running since January 2016 and went through YCombinator
- 8:37 -- Mux Data is another service they offer, it's like New Relic but for video data
- 12:04 -- They process billions of video views per month through Mux Data
- 12:36 -- You could use Mux as a lower level alternative to Vimeo or Wistia
- 13:33 -- Sometimes embedding iframes can be problematic and Mux can help in this area
- 14:35 -- About 45 people work at Mux and half are involved with engineering
- 15:03 -- Motivation for using Phoenix and Elixir, even when they were very new tools
- 16:52 -- Their main public API is an out of the box Phoenix app
- 17:52 -- They have a real-time dashboard that is powered by websockets and channels
- 20:28 -- Some of Mux's customers have millions of concurrent video views through that
- 20:42 -- Will you switch to using Live View? Probably not since they are so API driven
- 21:51 -- A dozen or so Go microservices and Kafka handle processing the videos
- 23:25 -- Go is a great fit for super CPU intensive tasks such as video encoding
- 24:03 -- The video processing infrastructure was very well thought out early on
- 24:50 -- The public API is RESTful and there's ~40-50 endpoints with a few private endpoints
- 26:14 -- Cookie based auth is done in a browser but there's tokens for API access
- 26:47 -- The exq library is used for processing jobs asynchronously in Elixir land
- 27:22 -- exq runs within a supervisor of your app, not a dedicated OS level service 
- 28:21 -- Prometheus is used for metrics but it's not hooked into Elixir Telemetry (yet)
- 29:26 -- Kubernetes and Docker drive their production infrastructure
- 29:47 -- Buildkite is used for their CI / CD pipeline
- 32:08 -- Deployments are very automated, a human only needs to merge to a specific branch
- 32:53 -- The video processing microservices are in 1 mono repo, but there's 2 other repos
- 33:33 -- There's PR approvals in place but all developers can merge to the production branch
- 34:39 -- Code reviews are really important and you need to trust your developers
- 35:41 -- The Elixir app has a PostgreSQL billing DB and also uses ClickHouse (SQL based)
- 37:53 -- ClickHouse lets them store billions of rows and access everything quickly
- 40:58 -- You do write SQL queries with ClickHouse but it doesn't work with Ecto out of the box
- 41:44 -- The Elixir API runs on AWS with an AWS load balancer sitting in front of it all
- 42:20 -- The video infrastructure runs on Google Cloud
- 42:56 -- How many servers do you run in total? Hard to tell really, but it's a lot of compute
- 43:44 -- Despite being on AWS, they are not using Amazon's managed Kubernetes (EKS)
- 44:01 -- All payments go through Stripe, including the metered billing which they hand rolled
- 45:06 -- Instead of billing based on bandwidth, Mux bills by minutes watched
- 46:06 -- SendGrid is used for transactional emails, Sentry for errors and Opsgenie for paging
- 46:48 -- All sorts of CI / CD related information gets sent over to a Slack channel
- 47:08 -- Developers are broken out into 4 cross functional teams
- 48:31 -- There's 2 flavors of SDKs that Mux has (REST API wrappers and video players)
- 50:21 -- They currently have 22 different video players to account for across many platforms
- 50:36 -- Efficiently creating so many different SDKs by having a core library for each language
- 54:20 -- It's sort of like having a core payment library and supporting Stripe, PayPal, etc.
- 54:41 -- The SDK team needs to be aware of many different languages and players
- 55:16 -- Another key metric to track is the video upscale and downscale percentages
- 56:47 -- As of today Mux is focused on supplying service quality metrics
- 58:08 -- There's a lot of data stored but it all gets rolled over after 90 days
- 58:42 -- The API is deployed all the time, but there's zero down time deploys
- 59:45 -- There's been one day in the past there they had to put the API in read-only mode
- 1:00:19 -- The data is backed up, but Dylan isn't sure how often (but it happens, he swears!)
- 1:00:42 -- Video thumbnails can be picked out from any timestamp, even animated GIFs too
- 1:02:21 -- For now you need to supply your own closed captions to Mux
- 1:03:52 -- Captions are downloaded, cached locally until processed and then backed up too
- 1:04:38 -- Smoke tests and various alarms help detect issues in production (they use Flink)
- 1:06:25 -- Uptime is important, Mux has high profile clients where downtime is not an option
- 1:06:52 -- Rate limiting is done at the Elixir level for API calls with the ex_rated library
- 1:07:25 -- It's a reasonable idea to always assume users are out to get you
- 1:07:52 -- For video rate limiting, it's up to the CDN and they use a few different CDNs
- 1:09:33 -- You could build a live streaming service like Twitch with Mux's API
- 1:13:19 -- The Elixir API doesn't get billions of calls a month but it's a still a lot
- 1:16:37 -- Best tips? Video is hard and it keeps getting more and more complicated
- 1:18:15 -- Fortunately the video player SDK's churn isn't too high due to the HTML5 spec
- 1:19:14 -- You can [email Dylan](mailto:dylan@mux.com) or contact him on [Twitter](https://twitter.com/{{ guest.page_twitter }}), also [Mux](https://mux.com/blog/) is hiring too!

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/HTTP_Live_Streaming>
- <https://howvideo.works/>
- <https://www.ycombinator.com/about/>
- <https://bugzilla.mozilla.org/show_bug.cgi?id=356558>
- <https://golang.org/>
- <https://clickhouse.tech/>
- <https://en.wikipedia.org/wiki/Column-oriented_DBMS>
- <https://mux.com/blog/from-russia-with-love-how-clickhouse-saved-our-data/>
- <https://en.wikipedia.org/wiki/WebVTT>
- <https://flink.apache.org/usecases.html>
- <https://www.fastly.com/>
- <https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol>
- <https://obsproject.com/>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/akira/exq>
- <https://github.com/elixir-mint/mint>
- <https://github.com/grempe/ex_rated>
