---
layout: "podcast-or-interview"

mp3_bytes: "64610304"
mp3_duration: "1:07:18"

guest: "Nate Rush"
guest_avatar: "nate-rush"
guest_website: "https://trymito.io"

category: "podcast"
tags:
  - "jupyter"
  - "python"
  - "react"
  - "aws"
  - "kubernetes"
  - "webpack"
  - "github-actions"
  - "s3"
  - "route53"
  - "segment"
  - "mixpanel"

title: "Mito Is a JupyterLab Extension to Make Python Data Analysis Easy"
description:
  Nate Rush goes over building a JupyterLab extension with Python. The managed
  Jupyter Lab instances run on a Kubernetes cluster on EKS.
---

In this episode of Running in Production, {{ page.guest }} goes over building a
JupyterLab extension with Python. It runs locally in a Jupyter Notebook but
they also host JupyterHub instances on a Kubernetes cluster running in EKS.
It's been running in production since late 2020.

Nate talks about building a cross platform Python installer, building and
publishing a JupyterLab extension, leveraging Pandas, building the front-end
with React / Typescript, hosting a version of their product on a Kubernetes
cluster, the value in automating the hard stuff and more.

## Topics Include

- 1:15 -- What is a Jupyter Notebook and how do JupyterLab extensions work?
- 3:35 -- 2 developers are currently building it
- 6:50 -- You can run it in an offline notebook or through their hosted service
- 8:48 -- Handling local installations across Windows, macOS and Linux
- 15:58 -- How users launch their Jupyter Notebook locally with this extension
- 17:16 -- How do you create a JupyterLab extension?
- 21:10 -- The back-end is built upon Pandas
- 23:31 -- How do front-end assets make their way into the extension?
- 28:50 -- Webpack is being used to bundle up the front-end assets
- 29:36 -- Using GitHub Actions to handle the deploy process for the JupyterLab extension
- 35:20 -- Front-end packages to help build a spreadsheet driven UI
- 37:37 -- Discovering front-end performance issues and errors through logging
- 45:12 -- Hosting JupyterHub instances on Kubernetes with EKS on AWS
- 47:32 -- The hosted version is free, but it's on its way to being phased out
- 51:57 -- The workflow for deploying the Kubernetes set up and running 3-10 worker nodes
- 54:56 -- Backups of the Kubernetes cluster are handled with Velero
- 56:13 -- Route53 is hosting their DNS records
- 57:29 -- Best tips? They really love Typescript and also automate as much as possible
- 1:00:58 -- Don't hesitate to ask for help and focus on what your users want
- 1:06:34 -- Check out <{{ page.guest_website }}>

## Links

###### 📄 References

- <http://paulgraham.com/ds.html>
- <https://docs.anaconda.com/anaconda/navigator/>
- <https://jupyter.org/hub>
- [The Phoenix Project book](https://amzn.to/3eFDQzr)

###### ⚙️ Tech Stack

{% include services-used.html %}

###### 🛠 Libraries Used

- <https://pandas.pydata.org/>
- <https://github.com/pytest-dev/pytest>
- <https://github.com/DevExpress/testcafe>
- <https://www.ag-grid.com/>
- <https://velero.io/>
