---
layout: "podcast-or-interview"

mp3_bytes: "79075200"
mp3_duration: "1:22:22"

guest: "Michael Lynch"
guest_avatar: "michael-lynch.jpg"
guest_website: "https://tinypilotkvm.com"
guest_twitter: "deliberatecoder"

category: "podcast"
tags:
  - "python"
  - "flask"
  - "ansible"
  - "bash"
  - "circle-ci"
  - "nginx"
  - "open-source"

title: "TinyPilotKVM Lets You Remote Control Your Server from Your Browser"

description:
  Michael Lync goes over building a hardware device to remote control your
  server. It's been available since mid 2020.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
hardware device that lets you remote control your server without installing
any software. It's been available since mid-2020.

Michael talks about how it works, using Ansible to provision a Raspberry Pi,
Using Flask with SocketIO, rendering 30 frames per second at 1080p with under
200ms latency, using web components, selling his devices on Shopify, hiring
quality freelance developers and more.

## Topics Include

- 7:13 -- The process to build a custom piece of hardware
- 12:33 -- 3D printing a custom case
- 15:16 -- The assembly process and selling about 150-200ish devices a month
- 16:20 -- Ansible and a Bash script ensure everything gets installed on the device
- 20:16 -- Everything including the OS can run on about 1.5GB of memory
- 22:01 -- Motivation for using Flask and Python
- 25:29 -- Using Python's built in testing library and a few useful 3rd party packages
- 26:47 -- Web components are being used quite heavily
- 31:44 -- Getting started with web components
- 34:34 -- Rendering everything at 30 frames per second at 1080p with SocketIO
- 38:34 -- The differences between the regular and pro version
- 40:57 -- There's no bundling for JS and CSS
- 43:11 -- Docker was considered but wasn't included in the end
- 46:44 -- Purchasing the pro version and ancillary services around the hardware
- 50:52 -- Shopify is used as a store front and they make about 20-30k a month
- 54:26 -- The deploy process and reviewing code from their freelance devs
- 1:00:09 -- Hiring quality developers by making it a great place to work for
- 1:02:05 -- Getting new versions of the code on user's devices
- 1:07:35 -- Is it possible to brick your own device? It hasn't happened yet
- 1:11:40 -- Best tips? Incrementally build and release your product as you go
- 1:16:26 -- How Michael hired a few initial freelance developers
- 1:21:41 -- Check out [TinyPilotKVM]({{ page.guest_website }}), Michael [has a blog](https://mtlynch.io/) and is [on Twitter](https://twitter.com/{{ page.guest_twitter }}) too

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Raspberry_Pi>
- <https://en.wikipedia.org/wiki/Intelligent_Platform_Management_Interface>
- <https://css-tricks.com/an-introduction-to-web-components/>
- <https://www.talkyard.io/use-cases>
- <https://runninginproduction.com/podcast/39-place-card-me-lets-you-create-printable-place-cards-online>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/miguelgrinberg/Flask-SocketIO>
- <https://github.com/wtforms/wtforms>
