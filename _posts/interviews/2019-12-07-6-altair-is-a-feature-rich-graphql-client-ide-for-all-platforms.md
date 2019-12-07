---
layout: "podcast-or-interview"

guest: "Samuel Imolorhe"
guest_avatar: "samuel-imolorhe.jpg"
guest_title: "Full Stack Developer"
guest_website: "https://altair.sirmuel.design/"
guest_twitter: "imolorhe"

category: "interviews"
tags:
  - "angular"
  - "electron"
  - "firebase"
  - "cdn"
  - "ci"
  - "open-source"

title: "Altair Is a Feature-Rich GraphQL Client IDE for All Platforms"
description:
  Samuel Imolorhe goes over a cross-platform open source project he built and
  deployed using Angular, Electron, Firebase and more.
---

## What's your background and what site are you running in production?

Hey 👋🏾 I'm Samuel, a full stack developer from Nigeria.

I studied Computer Science in school and since I graduated, I have been working
primarily on the front-end side of things for various applications but I've had
the privilege of working on and tackling projects on the back-end whenever the
opportunity arises.

I created and currently maintain the [Altair GraphQL
Client](https://altair.sirmuel.design/) project, which in my (*very unbiased*)
opinion is the best [GraphQL](https://graphql.org/) API debugging tool that
exists.

It's been an interesting experience working on the Altair GraphQL Client so
far. I started working on this in March 2017 as a tool that would help solve
the technical issues I was facing when working on GraphQL APIs.

As of March 2017, there was only
[GraphiQL](https://github.com/graphql/graphiql) as a UI debugging tool, and it
lacked a couple of very necessary features that made it difficult to work with,
especially in regards to setting headers.

As it turns out, this was a much needed feature, and thus Altair became more
useful to other developers in the open source community, and has continued to
be useful to a lot of developers.

**Altair exists on a number of platforms to make it easily accessible to
developers**, and these different platforms have varying amounts of usage:

- Currently there's ~100k downloads of the [desktop
app](https://altair.sirmuel.design/#download) (includes MacOS, Linux and
Windows)
- There are about 23,000 users combined for both the
[Chrome](https://chrome.google.com/webstore/detail/altair-graphql-client/flnheeellpciglgpaodhkhmapeljopja)
and
[Firefox](https://addons.mozilla.org/en-US/firefox/addon/altair-graphql-client/)
extensions
- Linux snap users hover at about 1,500 users
- There's also a [web version](https://altair-gql.sirmuel.design/) but since we
value privacy there's no analytics to track users

[{% image interviews/6/altair-platforms.jpg %}]({{ page.guest_website }})

We always strive to use the latest version of the packages we work with. At
the time of writing this we are using [Angular](https://angularjs.org/) v8.1.2
and [TypeScript](https://www.typescriptlang.org/) v3.4.5 and that will get
updated over time.

## What motivated you to use Angular / TypeScript?

Back in 2017, I was quite familiar with how to use React to build applications
along with a few other frameworks and libraries. However I had never worked
with Angular. I had heard some good and bad parts about Angular from other
developers though.

Around that time, the Angular team released Angular 2, which is very different
from AngularJS. It had a lot of improvements including better security, a
smaller bundle size, improved performance, etc..

That seemed like a good time to pick up Angular. So when I wanted to build
Altair, I decided to also use the opportunity to learn Angular. Working with
Angular, I could see some similarities with how React handles some things but
there were other things that were very different, which also gave me other
useful perspectives and approaches to solving various challenges.

The Angular 2 framework pretty much forces you to code in TypeScript instead
of JavaScript.

Even though it is technically possible to write your Angular application in
JavaScript, it just makes more sense to learn and write it in TypeScript,
considering you would have better community support, clearer information from
the Angular documentation and it would be less likely to be buggy since most
people would also be using TypeScript for their Angular applications.

Having said that, after almost 3 years of working on Altair, I now appreciate
the decision of the Angular team to use TypeScript by default. Considering that
Altair was my first attempt at Angular, I've had to rewrite the app more than
once, making several code refactors leading to several thousand lines of code
changes in the process.

I wouldn't say this refactor would have been impossible with regular JavaScript
, but it was definitely much easier to do and I was more confident with the
decision to refactor the code having used TypeScript.

Since I realized the benefits of TypeScript, I strive to create new projects
with TypeScript, even those written with React and Vue but that does not mean
there are no cons to using TypeScript.

For instance, it requires a bit more code for defining types and interfaces
along with maybe being restrictive with what you can do in your application,
but personally I cherish the benefits and I am willing to bear the brunt of
those cons for *most* of my projects. I say "most" because depending on the
size of the project, it might really not be worth it to set up the project to
use TypeScript.

**If I were rewriting Altair today from scratch, I most likely wouldn't use
Angular**. That is not because I think Angular is terrible. I would most likely
choose React, and the main reason for that is because a lot of the tools and
packages I need to work with are mostly fine-tuned for React applications which
unfortunately is a limiting factor.

I usually end up having to look for Angular alternative which is less battle
tested or I create one of my own. This challenge has helped me work on several
kinds of things for which I'm grateful.

Besides this challenge, I think Angular is still a good option for building my
application. It might not be everyone's favorite framework, but it really is a
good framework to use.

## Is your site a monolith or broken up into microservices?

I guess I would say Altair is a monolith considering the nature of the
application, it doesn't need to interact with a lot of back-end logic to
function. However I can probably answer this with the concept of modularity in
mind as opposed to monolith versus microservices.

The bulk of the functionality currently offered in Altair is done within the
core application itself. However, very recently an infrastructure for using
plugins within Altair has been introduced.

Now you can add extra functionality to Altair via plugins. The plugins are
currently managed as packages within npm, so there is no extra burden on us to
manage the plugins directly.

The project currently contains around 30,000 lines of code based on running:
`git ls-files | egrep '.(js|json|ts|scss|css|yml|less|html|md|sh)$' | xargs wc -l`

This includes the code for the docs site, the core package, and other npm
packages like the Express middleware, Koa middleware, Gatsby plugin, etc..

---

[{% image interviews/6/altair-github.jpg %}](https://github.com/imolorhe/altair)

---

The Altair repo is a mono-repo (managed by
[Lerna](https://github.com/lerna/lerna)) consisting of more than just the core
package. It includes the other packages mentioned earlier which were related to
running the desktop, browser extension and web variant or Altair.

All of these options give developers a lot of great choices in how they would
like to use Altair.

The approach of using a mono-repo to manage all the various packages related to
a project is something I would recommend, as it helps with easily maintaining a
consistent update process for all the packages. However, it's not perfect.

For example, Lerna repos work for npm packages but if you have non-JS packages
those wouldn't benefit from the Lerna mono-repo set up.  But you could write
simple Bash scripts to manage syncing all the packages (JS-based and non-JS
packages) together.

Another useful piece of advice I can give in regards to building your
application for multiple different platforms is keeping your application
modular and perhaps making use of the concept of dependency injection.

This lets you easily swap out dependencies based on where the application would
be running without necessarily changing your application code. Good ol'
`if..else` conditions everywhere would work as well, but it could become tricky
to work with as the application grows in size and complexity. So it would be
better to keep those conditions in a single place.

A few months back I benefited from this when I decided to stop using local
storage for storing data when in the desktop apps, and instead made use of a
more efficient persistent storage functionality that would be able to help
developers backup their data and not lose their data if something unpleasant
happens.

Thankfully the tool I was working with for managing the app data in local
storage also allowed me to provide it with a storage solution that adheres to
the [Storage
interface](https://developer.mozilla.org/en-US/docs/Web/API/Storage) of the Web
Storage API. Because of this, I was easily able to swap out the use of local
storage for another solution when running the desktop application in
[Electron](https://electronjs.org/).

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

Altair is a completely front-end JavaScript web application. This allows Altair
to be flexible enough to exist in various environments as long as there is a
JavaScript run-time (for example as a desktop app with Electron).

The only job of the back-end is to initially serve the front-end HTML and
assets.

As an application, Altair primarily gets input from the user, formulates a
request based on the user's input, sends the request to the given GraphQL
endpoint and renders the results in the best way based for the particular case.

Altair does a lot of heavy lifting on the front-end side. This includes
persisting the latest application state locally so the developer can resume
where they left off after closing the app.

It also generates a searchable index for the schema documentation of the given
endpoint, executes dynamic scripts from the developer at run-time, manages
environment variables specified by the user and manages collections of queries,
history, etc..

As you can tell these functionalities are quite heavy and can easily impact the
overall performance of the application. To tackle these potential performance
issues, I implemented the application slightly differently in some cases.

For instance, persisting data to local storage is usually a synchronous process
(local storage APIs are synchronous), but I created a wrapper around the local
storage `setItem` API which delegates the updating of localStorage to a
callback using the
[`requestIdleCallback`](https://developer.mozilla.org/en-US/docs/Web/API/Window/requestIdleCallback)
API.

This only executes the function when the browser is idle. This works for Altair
since Altair only needs to read the data from the local storage when the
application is started up, and subsequently for a few things, but all the
relevant data is loaded in memory so we don't have to worry about reading stale
data.

Another technical decision I made was to store the collections data using
[indexedDb](https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API) as
opposed to using local storage, considering that local storage has a size limit
and the query collections could potentially become huge.

One other thing I am considering to further improve the performance is to
potentially migrate all UI-blocking heavy functionalities into [web
workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API).

Things like indexing the schema documentation is usually fast
but I can imagine that with a massive GraphQL API with a very large schema
(like the GitHub GraphQL API), it might start to affect performance if we need
to index the schema documentation in the same thread.

Lastly, when implementing something that takes a while to execute, keep in mind
how that might scale as your app grows in popularity. If you write it correctly
initially it could end up being easier to scale later on when there's more
demand.

## What does the rest of your tech stack look like?

[{% image interviews/6/altair-github-pages.jpg
%}](https://github.com/imolorhe/altair/tree/staging/docs)

The docs site is built on top of [Jekyll](https://jekyllrb.com/) and hosted on
[GitHub pages](https://pages.github.com/). This was an easy choice to make
considering the docs live along side the code, so I don't have to worry about
managing a different project just for that or think about hosting for the docs.

Earlier I mentioned that Altair has the concept of plugins. The plugins built
for Altair are based on the [web
component](https://developer.mozilla.org/en-US/docs/Web/Web_Components)
standard, which is what easily allows Altair make use of tools and components
built in other frameworks. Angular has full support for web components, so once
a component can be wrapped into a web component adding it into Altair is a
trivial task.

I currently use [Firebase](https://firebase.google.com/) for hosting the online
web app version of Altair. I chose that since it would be easy to also add
other Firebase functionality in the future when I need it, such as databases,
authentication, storage, etc..

For both online sites (docs and web app), I use
[Cloudflare](https://www.cloudflare.com/) as the CDN to manage and cache the
assets requested from all across the world. So far I can't say I have had any
issues with it. It has been pretty stable for my needs and caches as much as
80% of the requests for static files.

Both online sites are protected by HTTPS. Cloudflare also provides and helps
with managing the SSL certificates for all the domains, so I don't have to deal
with them.

**Some other libraries I use within the app are:**

- [Dexie](https://dexie.org/) for managing the indexedDb storage
- [NgRx](https://ngrx.io/) for state management
- [Ant Design](https://ng.ant.design/) for UI components
- [web-ext](https://www.npmjs.com/package/web-ext) for managing Mozilla add-ons
- ...and [many others](https://github.com/imolorhe/altair/blob/staging/package.json)

As for the desktop apps, those are based on Electron. Electron made sense for
our use case since it is the most widely used tool for building desktop apps
using web technologies.

There are a couple of other options but as far as I can tell they usually
require some other dependencies on the user's system like requiring the user
to have a [Chromium](https://www.chromium.org/Home) instance installed already
which Electron apps don't need since it comes included.

I agree that there are potential gains with using some of these Electron
alternatives, but the convenience of Electron outweighs the benefits for
Altair. I use [electron-store](https://github.com/sindresorhus/electron-store)
to manage persistent data in the Electron apps. This saves the files in a way
that it can be backed up and restored pretty easily.

## Which external SAAS tools does your site depend on?

Altair is translated to a number of languages (around 15 different languages)
and that is possible due to the contributions of members of the open source
community that were kind enough to help out with translating Altair to their
various native languages.

The tool I used for the translations is
[Crowdin](https://crowdin.com/project/altair-gql) which is a crowd sourced
translation tool that works particularly well since Altair is an open source
project and it happens to be free for open source projects.

I previously used [Google Analytics](http://analytics.google.com/) to track
events and errors that could help me define how well the application was
working for developers, and where the potential UX issues were so I could
tackle them.

However I disabled tracking completely within the Altair app in order to
respect the privacy of users. Now users create issues on the repo whenever
there is any issue that needs my attention.

Currently I only use Google Analytics on the landing page and the docs sites to
get insight into what specific content users visit most frequently. This also
helps me identify which part of the app I should prioritize.

I use a number of apps on the repo to manage the repo (updating dependencies,
reviewing pull requests, creating issues, creating pull requests, updating
readme, etc). These include [HoundBot](https://houndci.com/), [contributor
bot](https://github.com/all-contributors/all-contributors-bot), [welcome
bot](https://github.com/apps/the-welcome-bot),
[GreenKeeper](https://github.com/apps/greenkeeper), and a few others.

## Which cloud hosting provider or platform are you using to host everything?

The online web app version of Altair is hosted using
[Firebase](https://firebase.google.com/). This choice is mostly because it's
pretty easy to work with, and there is the added benefit of expanding to make
use of the other services provided by Firebase including authentication,
database, and storage.

The docs site is hosted using [GitHub pages](https://pages.github.com/). The
reason for this choice is because I get versioned docs as a bonus, without
having to hit a deploy button. All I need to do is push a commit to the main
branch and the docs site is automatically updated.

There is also a translation site for Altair where translation contributors can
provide in-context translations. This is currently hosted using
[Surge](https://surge.sh/). I use Surge as it allows hosting static sites for
free and I had previously used it before.

For my use case, it just works and I haven't needed to think twice about that
decision. Also given that [Travis CI](https://travis-ci.org/) has a Surge
deployment provider, it makes using Surge pretty easy and straight forward.

## How many servers does your app run on and how do you manage them?

Given that all the hosting needs are for static content and I make use of
various SaaS providers for my hosting needs, I don't get to directly manage the
servers.

If I were to assume the number of servers required to run each of the hosted
content, I would say 1 server for each hosted instance. However, considering
that all the SaaS providers would be working with distributed systems, it is
possibly hosted on more servers.

The need for multiple servers is further reduced by the use of the Cloudflare
which would serve most of the requests from its CDN's edge locations versus
serving the content from the actual SaaS providers' servers.

## What does your deployment process look like?

For deploying the app, I created a checklist of things to do for myself. This
includes verifying that whatever changes need to be made to the docs have been
made, locally running the tests, then creating the new version and updating all
the necessary files using a simple Bash script.

I then proceed to build the assets for the browser extensions locally. Ideally
I would like to automate this step as well but I haven't seen any good
automated way to build and publish the assets for the various browser
extensions. The only available tool I know only works for the Mozilla add-on.

After building the browser extensions' assets, I verify that the extensions
work properly by manually installing the extensions on each browser and test
them. I do some of this via a script.

If all goes well I create a commit, create a new git tag, and publish a
release for the new version of the application. I use Travis CI as the SaaS
provider for continuous integration and delivery of the application.

[{% image interviews/6/altair-travis-ci.jpg
%}](https://travis-ci.org/imolorhe/altair)

On every commit, there is a build pipeline that is triggered that runs the test
suites and builds the application. If something fails along the way I get a
report that includes the commit that broke it.

On creating a git tag, the pipeline creates all the build assets and publishes
them as part of the released version on GitHub. It also publishes the new
version to [snapcraft](https://snapcraft.io/) for the desktop apps.

The npm packages for the other packages in the mono-repo are also published
from the CI pipeline. The online version of Altair that is hosted on Firebase
as well as the translation in-context version of Altair hosted on Surge are
also updated in the CI pipeline.

Once all the assets have been published from the CI pipeline and that is
successful, I create a pull request merging the changes from staging to the
master branch. Once this pull request is merged, the docs site automatically
gets updated. This is because the docs site is updated whenever there is a
change to the master branch.

Then finally, I manually go to the extension sites for Chrome and Mozilla and
update the browser extensions to the new version.

In terms of managing secrets, Travis CI has a settings section where you can
add secrets that would be available as environment variables during the build
process. The secrets added there are hidden from plain view and can only be
deleted once added. They can't be edited or viewed which keeps the secrets
secure from potential prying eyes.

Once the new version of the desktop apps are published, users would get
notified that there is an update available for the apps they are using and give
them the option to update the apps.

Given that updating the application's version across platforms is done using
the standards defined for each platform, there is no downtime between the
deployment of new versions.

For example browser extensions are updated using the extensions page for each
browser version, Electron handles notifying the user about new updates to the
app and Firebase and Surge manage new deployed versions of the app.

As much as possible, I try to automate the bulk of the work in the deployment
process which usually takes around 30 minutes to complete, but unfortunately it
isn't possible for me to completely automate the process yet. I regularly try
to find tools that can help make the process more automated.

## How have you planned for disasters, unexpected events or malicious users?

So far I haven't really had any major disasters happening. There was one time
in the past (before I added integration tests) when I deployed the app without
testing the flow for new users.

I only tested the flow as a user that already uses the app and already has some
data stored locally. Because of that, there was a bug that was introduced in
that new version and basically no new user could use the app because of that
bug.

Looking at the metrics in GA (I still had GA tracking at the time), I noticed
there was a big drop in the expected number of users at the time that the users
that were actually using the app.

However I only noticed the bug when a user created an issue on GitHub about not
being able to use the app. I had to carry out an emergency deployment of a new
version fixing the bug that was introduced.

When the GA tracking was enabled, I also tracked the JS errors that were thrown
within the app. This was useful in quickly identifying issues in the app since
the number of JS errors would increase significantly, and I was able to set up
alerts for when that metric changed drastically.

However since disabling GA tracking, I tend towards being reactive to issues as
compared to being proactive. I make it easy for users to report issues in the
app by providing direct links from the error messages in the app to new issues
on GitHub, with the issue already pre-populated with the full error message and
error stack. All the user has to do is submit it.

Another reactive source of feedback about bugs is the reviews of the app in the
various extension stores. Most of the time users only write reviews when they
faced a bug in the application.

Most of the crisis management of the sites are handled by Cloudflare, which I
can say based on the dashboard is doing a great job of that (about 300
malicious users are blocked every month by the Cloudflare firewall). Cloudflare
also manages downtime by showing cached content in the event that one of the
other SaaS providers is down.

Given the nature of the Altair application, there is not much need to monitor
any of the server-related infrastructure beyond what Cloudflare provides. If
the hosted sites are down, the users would still be able to use the Altair
application (which works offline by the way).

Only new users trying to download Altair or get access to the docs would be
affected, which again should not be a problem because of Cloudflare.

## What's your advice for others who are running similar stacks in production?

You can always go with a SaaS provider as opposed to managing your own servers.
There are several options available for you to choose from depending on your
hosting needs but the options I would recommend are Firebase hosting, Surge.sh,
and [now.sh](https://zeit.co/home).

Writing tests can be cumbersome but the benefits of writing them are
considerable, especially in regards to identifying regression bugs which can
pop up in the application as you add more features in the future. At the very
least, you should have integration tests covering the critical (most important)
user flows in your application.

Think about the architecture of your application and how it would enable you to
scale better in the future while still supporting your current scope. More
often than not, the scale of your application will grow beyond the scope the
application was initially created for as more useful features are discovered.

I recommend following coding best practices like the [SOLID
principle](https://en.wikipedia.org/wiki/SOLID).

Also, as much as possible, respect the privacy of your users.

## Where can we go to learn more?

- You can visit the site at: <{{ page.guest_website }}>
- GitHub repo: <https://github.com/imolorhe/altair>
- Twitter: <https://twitter.com/AltairGraphQL>

Feel free to reach out to me on my personal Twitter [@{{ page.guest_twitter
}}](https://twitter.com/{{ page.guest_twitter }}) if you would like to ask me
any other questions, or have a chat about Altair, or even chat about what it is
like being a core maintainer of an open source project.

Contributors to the project are always welcome. We have a [contribution
guide](https://altair.sirmuel.design/docs/contributing.html) to help you get
started. I also manage [a blog](https://sirmuel.design/) where I regularly post
updates, useful tips, and recommendations which you can follow as well.

-- {{ page.guest }}, {{ page.guest_title }}
