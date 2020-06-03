---
layout: "podcast-or-interview"

mp3_bytes: "56312058"
mp3_duration: "58:39"

guest: "Jamie Taylor"
guest_avatar: "jamie-taylor.jpg"
guest_website: "https://discworlddisorganiser.azurewebsites.net"
guest_twitter: "dotnetcoreshow"

category: "podcast"
tags:
  - "dotnet-core"
  - "c-sharp"
  - "sqlite"
  - "azure"
  - "ci"
  - "open-source"

title: "Discworld Disorganizer Is a Discworld Book Series Search Engine"
description:
  Jamie Taylor peels back the details on running a .NET Core web application in
  production. Everything is hosted for free on Azure.
---

In this episode of Running in Production, {{ page.guest }} goes over how he
built [Discworld Disorganizer]({{ page.guest_website }}) which is a Discworld
book series search engine. It's written in .NET Core and hosted for free on
Azure. It's been running in production since 2017.

Jamie developed this app to scratch his own itch to help figure out which books
he already owns. [The API](https://dwcheckapi.azurewebsites.net/) portion of
the app is a separate app that is public and free to use. I learned a lot about
the .NET eco-system and even Discworld in this episode thanks to Jamie!

## Show Notes

- 0:59 -- .NET Core is open source and runs on Windows, MacOS and Linux
- 1:39 -- The front-end is using Angular 2 and the back-end is using ASP .NET Core
- 2:33 -- Differences between ASP .NET Core, .NET Core and picking a programming language
- 3:10 -- .NET lets you write your program in multiple languages (C#, F# and VB.Net)
- 4:49 -- Jamie picked C# primarily due to previous experience using it
- 6:35 -- Jamie learns best by audio / video but also by building real projects
- 7:30 -- Learning by example vs learning by theory
- 8:22 -- Discworld is a series of comic fantasy books
- 9:52 -- The world is a disc held up by 4 elephants standing on a turtle swimming in space
- 10:43 -- Jame's app lets you search for Discworld books, characters and locations
- 11:47 -- He built the app to help him figure out which books he already has
- 12:34 -- The search is handled by a free and [open source RESTful API](https://github.com/GaProgMan/dwCheckApi)
- 13:58 -- [The API uses Swagger](https://dwcheckapi.azurewebsites.net/swagger)
           that uses code as documentation to see example usages
- 14:43 -- ASP .NET Core lets you pick server side templates or an API back-end
- 16:27 -- Jamie wanted to learn a new front-end tool so he went API based with Angular 2
- 17:19 -- The front-end and back-end take a few seconds to warm up due to Azure's free tier
- 18:53 -- That spin up time is similar to Heroku's free tier and also how IIS works
- 20:00 -- SQLite is being used to store the books and everything else on the back-end
- 21:18 -- The API has a delete database endpoint but it's protected by a strong password
- 21:55 -- Entity Framework Core is used as an ORM (Object-relational mapper)
- 23:04 -- Subtle differences between different databases like PostgreSQL and SQLite
- 23:48 -- Maybe dropping EF Core for Dapper which is a light weight ORM
- 24:28 -- Trade offs between using a high powered ORM and writing raw SQL
- 24:48 -- The code itself uses the LINQ library from Microsoft to query the data
- 26:36 -- The code base is 18 months old and it doesn't use Docker, but it might soon
- 28:18 -- Azure's free tier (at the time) gave you free resources but you didn't pick the specs
- 29:14 -- Microsoft is very open about their platform, you can even visit their data centers
- 30:19 -- Infrastructure as a Service (IaaS) vs Platform as a Service (PaaS)
- 32:51 -- You get free SSL certificates with Azure's PaaS offering on their domain
- 33:48 -- You can use a custom domain name with Azure's paid plans
- 35:09 -- Walking through the deploy process from development to production
- 35:49 -- After pushing to GitHub, AppVeyor (CI / CD) takes over and deploys it to Azure
- 37:44 -- AppVeyor was used because Azure Pipelines wasn't really around yet
- 38:14 -- Using a third party CI / CD tool has less vendor lock-in too
- 39:49 -- .NET Core rolls everything up into a single binary file that can be deployed
- 41:02 -- Both the API back-end and Angular front-end have separate binary files
- 41:52 -- Having single binary deployments makes it easier to manage deploys
- 42:29 -- Most folks can run his project as long as you have the .NET Core run-time installed
- 45:05 -- Jamie uses VSCode and JetBrains Rider instead of Visual Studio
- 47:23 -- Dealing with Azure database backups using a real DB server and SQLite
- 48:35 -- There is monitoring that keeps track of delete actions from the back-end API
- 49:52 -- This delete action API endpoint wouldn't be used for client work or a "real" project
- 50:25 -- Jamie still uses his own app today to help keep track of which books he has
- 52:25 -- Best tips? Focus on the data relationships before writing your code
- 53:22 -- Switching the API from Discworld to Stephen King books, it works!
- 56:53 -- You can find Jamie on [GitHub](https://github.com/gaprogman) and
           [@{{ page.guest_twitter }}](https://twitter.com/{{ page.guest_twitter }})
           on Twitter where he posts updates about his [.NET Core Podcast](https://dotnetcore.show/).
           He also has an <https://about.me/thejamietaylor> page

## Links

- <https://docs.microsoft.com/en-us/dotnet/core/>
- <https://angularjs.org/>
- <https://docs.microsoft.com/en-us/aspnet/core/?view=aspnetcore-3.0>
- <https://docs.microsoft.com/en-us/ef/core/>
- <https://en.wikipedia.org/wiki/C_Sharp_(programming_language)>
- <https://en.wikipedia.org/wiki/F_Sharp_(programming_language)>
- <https://en.wikipedia.org/wiki/Visual_Basic_.NET>
- <https://en.wikipedia.org/wiki/Bytecode>
- <https://en.wikipedia.org/wiki/Functional_programming>
- <https://en.wikipedia.org/wiki/The_Art_of_Computer_Programming>
- <https://en.wikipedia.org/wiki/Discworld>
- <https://en.wikipedia.org/wiki/Representational_state_transfer>
- <https://swagger.io/>
- <https://en.wikipedia.org/wiki/Open_API>
- <https://curl.haxx.se/>
- <https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller>
- <https://en.wikipedia.org/wiki/HATEOAS>
- <https://azure.microsoft.com/en-us/>
- [https://digitalocean.com]({{ site.links.digitalocean }})
- <https://en.wikipedia.org/wiki/Internet_Information_Services>
- <https://en.wikipedia.org/wiki/Active_Server_Pages>
- <https://www.sqlite.org/index.html>
- <https://en.wikipedia.org/wiki/Object-relational_mapping>
- <https://github.com/StackExchange/Dapper>
- <https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/linq/>
- <https://docker.com>
- <https://docs.docker.com/compose/>
- <https://azure.microsoft.com/en-us/free/free-account-faq/>
- <https://en.wikipedia.org/wiki/Field-programmable_gate_array>
- <https://en.wikipedia.org/wiki/Ingress_filtering>
- <https://en.wikipedia.org/wiki/Infrastructure_as_a_service>
- <https://en.wikipedia.org/wiki/Platform_as_a_service>
- <https://en.wikipedia.org/wiki/PKCS_12>
- <https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow>
- <https://www.appveyor.com/>
- <https://azure.microsoft.com/en-us/services/devops/pipelines/>
- <https://dotnet.microsoft.com/download>
- <https://code.visualstudio.com/>
- <https://www.jetbrains.com/rider/>
- <https://www.jetbrains.com/resharper/>
- <https://en.wikipedia.org/wiki/Domain-driven_design>
