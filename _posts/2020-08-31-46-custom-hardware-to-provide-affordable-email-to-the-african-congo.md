---
layout: "podcast-or-interview"

mp3_bytes: "58280832"
mp3_duration: "1:00:42"

guest: "Clemens Wolff"
guest_avatar: "clemens-wolff"
guest_2: "Shaun Bathgate"
guest_2_avatar: "shaun-bathgate"
guest_website: "https://ascoderu.ca/"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "azure"
  - "cloudflare"
  - "docker"
  - "github-actions"
  - "lets-encrypt"
  - "nginx"
  - "rabbitmq"
  - "sendgrid"
  - "sqlite"
  - "terraform"
  - "ubuntu"

title: "Custom Hardware to Provide Affordable Email to the African Congo"
description:
  Clemens Wolff and Shaun Bathgate go over using Flask and an Orange Pi to
  build a hardware appliance. The server is hosted on Azure.
---

In this episode of Running in Production, {{ page.guest }} and {{ page.guest_2
}} go over building an Orange Pi hardware appliance that uses Flask and various
Linux tools to help rural communities get affordable email. Besides the client
hardware, the server component is hosted on Azure.

Clemens and Shaun talk about the challenges of developing and debugging such a
service, using Terraform to manage 38+ Azure resources, how it all comes
together in about 7,500 lines of Python and linting everything.

## Topics Include

- 1:54 -- Custom hardware appliance with an Orange Pi + USB modem
- 5:03 -- Both the client (hardware) and server (Azure) use Flask
- 7:28 -- Motivation for using Flask and Python
- 11:24 -- What exactly is this hardware device and what software runs on it?
- 14:46 -- The server side runs on 38+ Azure resources on 1 VM, provisioned by Terraform
- 18:23 -- Docker Compose is being used in dev and production (they moved away from K8s)
- 20:00 -- The server is running Ubuntu 18.04 LTS with 16 GB of memory / 4 CPU cores
- 21:37 -- There's SQLite, gunicorn and nginx but there's no client side SSL certs
- 26:39 -- What it's been like working with Terraform to manage the infrastructure
- 29:52 -- The deployment process is interesting to say the least!
- 35:31 -- Everything that can get linted gets linted
- 37:14 -- Accepting payments is not easy as it involves manually topping up SIM cards
- 44:27 -- Debugging and accessing logs gets tricky on the client side
- 47:54 -- Dealing with logs, error tracking and database backups on the server side
- 49:52 -- Using SendGrid for sending emails and Cloudflare to handle DNS
- 53:21 -- Best tips (Clemens)? Soft skills and focusing on making contributing code easy
- 55:36 -- Best tips (Shaun)? Keep your tests easy to follow so you can see how something works
- 59:28 -- If you're interested in contributing, their code base is [open source on GitHub](https://github.com/ascoderu)

## Links

###### 📄 References

- <http://www.orangepi.org/>
- <https://github.com/hadolint/hadolint>
- <https://github.com/koalaman/shellcheck>
- <https://github.com/adrienverge/yamllint>

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://github.com/zalando/connexion>
- <https://github.com/celery/celery>
- <https://gunicorn.org/>
- <https://github.com/PyCQA/flake8>
- <https://github.com/python/mypy>
- <https://github.com/PyCQA/bandit>

