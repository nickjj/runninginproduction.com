---
layout: "podcast-or-interview"

mp3_bytes: "41365632"
mp3_duration: "43:05"

guest: "Amit Jain"
guest_avatar: "amit-jain"
guest_website: "https://www.traderev.com/en-us/"
guest_twitter: "ml_amit"

category: "podcast"
tags:
  - "flask"
  - "python"
  - "docker"
  - "mysql"
  - "dynamodb"
  - "aws"
  - "ci"
  - "payments"

title: "TradeRev Is a Machine Learning Vehicle Appraisal / Auctioning System"
description:
  Amit Jain goes over building an auctioning service that uses deep learning
  with Flask and Python. It's hosted on AWS Fargate.
---

In this episode of Running in Production, [{{ page.guest
}}](https://www.linkedin.com/in/jaamit/) goes over building an auctioning
system that uses machine / deep learning and is powered by Flask and Python.
It's all hosted on AWS and has been up and running since mid 2011.

Amit goes over a few machine learning libraries, refactoring a 100k+ line
monolith into microservices without any automated tests, the importance of
machine learning accuracy, using a bunch of AWS services to deploy a large
site, treating your infrastructure as code and more.

## Show Notes

- 3:58 -- About 10 engineers make up the team responsible for the site
- 4:33 -- Roughly 1,000 cars a day are being traded with 8-10k auctions / bids per day
- 5:15 -- Motivation for using Flask and Python
- 6:55 -- Scikit-Learn and TensorFlow for machine / deep learning 
- 7:39 -- Did things start off with multiple microservices or was it a monolith early on?
- 9:41 -- There's about 80,000 to 120,000 lines of code across 200-300+ Python files
- 10:14 -- The huge refactor to microservices was done without automated tests initially
- 11:11 -- After the refactor now there's 86% test coverage which is enough to be confident
- 12:24 -- Flask-Restplus is the main library used to build their RESTful APIs
- 12:43 -- Other notable libraries were gunicorn and boto3 (AWS SDK for Python)
- 13:05 -- Locust is an open source load / performance testing tool
- 13:40 -- With machine learning, speed is important but accuracy is even more important
- 15:30 -- gunicorn is very compact, performant and easy to configure
- 16:28 -- Most caches were in memory and they used Amazon DynamoDB
- 17:09 -- The primary database is MySQL running on Amazon RDS
- 18:04 -- SQLAlchemy is used on the Python side as an ORM
- 19:29 -- Docker is sort of being used in development
- 21:02 -- The platform runs on AWS with Lambda, API Gateway and AWS Fargate with ECS
- 22:24 -- What is AWS Fargate and what does it allow you to do?
- 23:48 -- Scaling with Fargate while using auto scaling policies and configuration
- 26:28 -- Taking advantage of the cloud and setting up load balancing with configuration
- 28:04 -- How do you deal with secrets when using Fargate / ECS?
- 30:02 -- What about logging and metrics? Are you exclusively using all of AWS' services?
- 31:12 -- What about error reporting, such as getting notified if an error happens
- 31:34 -- The deploy process from development to production (includes CI / CD with Jenkins)
- 33:26 -- A Walk through of how the different AWS services come together
- 36:54 -- Terraform is being used to manage the infrastructure as code (valuable tool)
- 40:04 -- Database backups were performed by the DevOps team
- 40:41 -- Best tips? Start slow and expect failures, also don't chase perfection
- 42:14 -- You can find Amit on Twitter at [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter}}) and on [LinkedIn](https://www.linkedin.com/in/jaamit/)

## Links

- <https://github.com/pallets/flask>
- <https://www.python.org/>
- <https://en.wikipedia.org/wiki/Machine_learning>
- <https://en.wikipedia.org/wiki/Deep_learning>
- <https://en.wikipedia.org/wiki/Natural_language_processing>
- <https://scikit-learn.org/stable/>
- <https://www.tensorflow.org/>
- <https://en.wikipedia.org/wiki/Convolutional_neural_network> (CNN)
- <https://en.wikipedia.org/wiki/Smoke_testing_(software)>
- <https://github.com/noirbizarre/flask-restplus>
- <https://gunicorn.org/>
- <https://github.com/boto/boto3>
- <https://locust.io/>
- <https://www.docker.com/>
- <https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)>
- <https://aws.amazon.com/dynamodb/>
- <https://aws.amazon.com/rds/>
- <https://github.com/sqlalchemy/sqlalchemy>
- <https://aws.amazon.com/lambda/>
- <https://aws.amazon.com/api-gateway/>
- <https://aws.amazon.com/fargate/>
- <https://aws.amazon.com/ecs/>
- <https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_definitions.html>
- <https://aws.amazon.com/cloudwatch/>
- <https://www.pagerduty.com/>
- <https://www.jenkins.io/>
- <https://aws.amazon.com/ecr/>
- <https://www.terraform.io/>

## Shameless Plugs

- Nick:
  - Want to learn Flask? Join thousands of others in my
    [Build a SAAS App with Flask](https://buildasaasappwithflask.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
    course
  - Want to learn Docker? Join thousands of others in my
    [Dive into Docker](https://diveintodocker.com/?utm_source=nj&utm_medium=rip&utm_campaign={{ page.url }})
    course
