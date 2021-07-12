---
layout: "podcast-or-interview"

mp3_bytes: "51313536"
mp3_duration: "53:27"

guest: "Maciej Delmanowski"
guest_avatar: "maciej-delmanowski"
guest_website: "https://debops.org/"
guest_twitter: "drybjed"

category: "podcast"
tags:
  - "ansible"
  - "python"
  - "bash"
  - "debian"
  - "lets-encrypt"
  - "open-source"

title: "Managing 40+ Servers in a Data Center at a Medical University"
description:
  Maciej Delmanowski goes over managing 40+ servers and 200+ VMs with Ansible.
  It's been an ongoing project he's worked on since 2007.
---

In this episode of Running in Production, {{ page.guest }} talks about building
out a 40+ server / 200+ VM data center with Ansible. It's hosted on premises,
he's been working on it all since 2007 and started using Ansible in 2013.

Maciej talks about automating everything with Ansible, being a sysadmin for
over a decade, how he picked Debian, splitting up a project into 120+ git repos
and then back to 1, writing 60k+ lines of YAML, using Linux Containers,
maintaining an open source project and more.

## Topics Include

- 2:35 -- There's about 40 physical servers and 200+ virtual machines / containers
- 4:50 -- Transitioning to using Ansible over time
- 7:40 -- A 10+ year friendship stemming from Debian and open source
- 8:23 -- How Ansible's role and inventory abstractions help manage a lot of VMs
- 10:35 -- How DebOps as a name came into existence and its philosophy on being stable
- 14:24 -- Motivation for choosing and staying with Debian
- 15:31 -- Figuring out what new Ansible roles and playbooks to work on
- 19:14 -- Going from a mono repo to 120+ repos and then back to a mono repo
- 24:48 -- 67,000+ lines of YAML and 40,000+ lines of documentation
- 26:28 -- Setting up a brand new server with Ansible and DebOps hands free in 15 minutes
- 28:29 -- Automatically generating random passwords for services
- 31:22 -- Not having to deal with HIPAA compliance laws and handling student emails
- 34:01 -- Let's Encrypt is being used on specific publicly accessible servers
- 34:26 -- Breaking down the process of creating a new role from scratch
- 36:39 -- Using Linux Containers in development and rolling things out to production
- 41:41 -- Using dnsmasq in development for fully qualified domain names
- 43:07 -- Dealing with backing everything up
- 46:02 -- Being a maintainer of an open source project that's extracted from work
- 49:19 -- Best tips? Have 1 role for 1 service and find ways to connect them
- 51:26 -- Check out [DebOps](https://debops.org), it's [on GitHub](https://github.com/debops/debops), #debops on [Libera](https://libera.chat/) and Maciej is [on Twitter](https://twitter.com/{{ page.guest_twitter }})

## Links

###### 📄 References

- <https://en.wikipedia.org/wiki/Orson_Scott_Card_bibliography>
- <https://github.com/nickjj/ansigenome>
- <https://github.com/nickjj/rolespec>
- <https://linuxcontainers.org/>
- <https://en.wikipedia.org/wiki/Dnsmasq>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://www.veeam.com/virtual-machine-backup-solution-free.html>
- <https://rsnapshot.org/>
- <https://libera.chat/> (we're in #debops)
