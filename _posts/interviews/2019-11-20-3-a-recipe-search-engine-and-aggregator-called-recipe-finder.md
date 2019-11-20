---
layout: "podcast-or-interview"

guest: "Bruno Oliveira"
guest_avatar: "bruno-oliveira.jpg"
guest_title: "Software Developer"
guest_website: "https://hidden-reaches-53473.herokuapp.com/"

category: "interviews"
tags:
  - "flask"
  - "python"
  - "sqlite"
  - "heroku"

title: "A Recipe Search Engine and Aggregator Called Recipe Finder"
description:
  Bruno Oliveira talks about one of his projects that he built and deployed
  using Flask and Heroku. It's been up since late 2019.
---

## What's your background and what site are you running in production?

Hello, my name is Bruno Oliveira. I'm currently working as a web developer with
Java, as I have for the past 3 and a half years which is almost my whole
professional career.

I studied Civil Engineering before switching to Computer Science, and since
then I never looked back. I attended algorithm competitions during university
where I improved my skills a lot, and since graduation I've worked in Portugal,
Lisbon (where I grew up), Antwerp in Belgium working on healthcare focused web
applications and now in Amsterdam, where I work at [Software Improvement
Group](https://www.softwareimprovementgroup.com/) -- a company focused on
software quality and its assurance.

I started working on a recipe search engine and aggregator called [Recipe
Finder]({{ page.guest_website }}) in October 2019. I am the sole developer of
the whole project including handling the deployment to
[Heroku](https://www.heroku.com/). I plan to keep on developing it over the
next few months.

[{% image interviews/3/bruno-oliveira-recipe-finder.jpg %}]({{
page.guest_website }})

From the business side of things, let's say I am a foodie, so working on a
recipe search and aggregator was something I'd be keen to work on, so it's easy
to keep myself motivated!

My main motivation to start this project was to learn more about Python for web
development, and I chose [Flask](https://www.palletsprojects.com/p/flask/)
since it's a framework I had heard about a while back, and it seemed to have
the right amount of functionality built-in to allow me to get up to speed
quickly.

## What motivated you to use Flask / Python?

On my daily job, I use Java and its eco-system so I know it quite well.

From my experience, it always introduces large configuration overhead, and
I was not aware at the time of any way to deploy a Java web application on
Heroku. I was aware of [NodeJS](https://nodejs.org/en/)' possibilities for
deployment, but I wanted to use a different language for the back-end as a
learning experience. Since I had used Python in the past, it was a natural
choice.

I chose Flask for my app (as opposed to other popular frameworks, say
[Django](https://www.djangoproject.com/)), because Flask is very
un-opinionated, it starts up an embedded server with little to no additional
configuration out of the box, so I felt that this was the best way to move
forward since I wouldn't be too tied into any particular constraints that would
block me completely.

I also knew that Flask can work well for writing [RESTful
applications](https://en.wikipedia.org/wiki/Representational_state_transfer),
which is something I wanted to try and do (even if not perfectly from the
technical side to begin with).

I think in the future if I'd ever re-write it, I'd still use Flask and Heroku
but I'd try to make it even better from an architectural point of view. Such
as structuring my endpoints better and organizing the server-side code in a
more logical way.

## Is your site a monolith or broken up into microservices?

My app uses a combination of a monolithic architecture with what could be seen
as microservices, as I leverage an external API service to lend me some
functionality.

For example, to get recipes I pull down this information from the external API
(more on this later) and then feed it into
[Jinja](https://www.palletsprojects.com/p/jinja/) which is Flask's default
template language. This is done server side.

I also have the database classes and models saved on the server for things
like Ingredients, Recipes, Suggestions, etc., and they all live under the same
file in the same project, so it's monolithic in that regard.

So far the experience has been good with the current architecture and since
it's a small-sized code base, it's still possible for me to deliver what I feel
is **quite a lot of interactivity and functionality in under 300 lines of
server code** which is very nice in my opinion.

My advice for others is what I said to myself when I started this: no matter
what, it will always be a great learning experience. So focus on delivering
small increments of functionality, have a clear goal and architecture in mind,
and work towards it with what you know.

Don't let design conventions or best practices, or even *other people* tell you
how you need to do something. I have learned with this project that if you
are focused, have a clear vision in mind and the will to learn, you can do
anything!

## Are you using server rendered templates with sprinkles of JavaScript or is there an API based back-end with a JavaScript heavy front-end?

My web app falls into the first category, I use Jinja, and since my web app is
mostly presenting data with little client-side interaction, rendering the
templates server-side works quite well for me.

I don't have real requirements for my app per se, except that I want users to
get to the recipes they search for as efficiently as possible. So with
server-side rendering it works great.

For example, after a user searches for an ingredient, I call an external API to
get the results in JSON format and pass this into the Jinja template. It seems
quite intuitive to me, and it has allowed me to extend my app quite easily up
until this point.

I think if your web application will be data based in the sense of having to
show lots of data to users, going with Flask + Jinja and using server-side
rendering is a great way to architecture your application. But remember, adapt
and choose what works best for you and the rest will follow.

## What does the rest of your tech stack look like?

This is something I found interesting while working on this project all the way
from an empty folder to deploying it.

To deploy even such a simple app as the one I am working on, there are a lot of
moving pieces:

- There's Python and Flask for the back-end with extensions like
  [Flask-Login](https://flask-login.readthedocs.io/en/latest/) to handle user
  logins and [WTForms](https://flask-wtf.readthedocs.io/en/stable/) for form
  validation.

- Next up, there's SQLite as a simple database. It's easy to use locally, and in
  production on Heroku it runs in memory which means it does get wiped from
  time to time which is a downside but for short-lived things such as
  displaying recent search results and showing ingredients in the UI it's great.
  I will be upgrading to PostgreSQL on Heroku soon though.

- On the front-end, I'm using [Bootstrap](https://getbootstrap.com/) for
  responsiveness and styling along with JavaScript and
  [jQuery](https://jquery.com/) to handle some interactivity and communicating
  with the back-end.

## Which external SAAS tools does your site depend on?

Currently I am using two external services to help power my app in its current
state:

- The [Spoonacular recipe API](https://spoonacular.com/food-api) to provide
  me with some recipes. I chose it because I had read about it a while back
  and always wanted to explore it more in depth.

- For sending transactional emails I use [SendGrid](https://sendgrid.com/)
  mainly because I have used it before, it's easy to setup, very robust and
  reliable. It works great overall. Their free usage rates are pretty good too.

## Which cloud hosting provider or platform are you using to host everything?

I am using Heroku to host my app because again I am familiar with it and the
free tier and solutions they offer overall are really good for these kinds of
side projects.

[{% image interviews/3/heroku-sign-up.jpg %}](https://signup.heroku.com/)

I have the app running on one [free
dyno](https://devcenter.heroku.com/articles/free-dyno-hours) with 512mb of RAM
using the complete [Heroku-18
Stack](https://devcenter.heroku.com/articles/heroku-18-stack) which is based on
[Ubuntu](https://en.wikipedia.org/wiki/Ubuntu) 18.04 LTS.

Heroku uses [Gunicorn](https://gunicorn.org/) to allow deployed Python apps to
run concurrently, so I configured that as well. Gunicorn forks multiple system
processes within each dyno to allow a Python app to support multiple concurrent
requests without requiring them to be thread-safe.

In Gunicorn terminology, these are referred to as worker processes (not to be
confused with [Heroku worker
processes](https://devcenter.heroku.com/articles/background-jobs-queueing),
which run in their own dynos).

I am not paying anything per month due to low traffic and using the free tier
of Heroku.

## What does your deployment process look like?

To deploy, I decided to go real simple and I enabled Heroku to allow two
things:

1. Integration with my private GitHub repository
2. Allow for automatic deploys

Both of these things can be setup on Heroku's dashboard and for my current
situation they work quite well. That's because I know exactly which code ends
up in production and how it gets there. It's simply the master branch of my
GitHub repository.

To initiate a deploy, thanks to GitHub's integration with Heroku I can push
code to master, then Heroku will trigger a re-build, and my app will be live
within minutes of my push. The code goes straight from my dev box into
production, which is nice for this kind of side project.

There's only a tiny bit of down time for the Heroku dyno to restart but that's
only because I'm on the free tier with 1 dyno. If I had multiple dynos then
there could be zero down time.

I like how this works for me. I use localhost to perform most of the testing
and debugging which I can do fully thanks to using SQLite as my database. When
I am confident things are fine tuned I push it to GitHub and then it ends up
live on my site shortly after.

## How have you planned for disasters, unexpected events or malicious users?

Not a lot has been done on this front since I am not expecting a lot of traffic
at the moment.

Future plans will most likely include to do standard stuff like sanitizing user
input, provide good user feedback, and avoid disasters by using as much
security around my endpoints as possible.

All the while handling things nicely when we fall off the happy path. All of
this has been a learning experience and a work in progress for me.

## What's your advice for others who are running similar stacks in production?

My main advice is to definitely use GitHub or any other source control
versioning system / platform.

Also, it should go without saying but people can really mess the basics up. Use
automatic deploys if using Heroku since they allow you to move very fast!

Regarding Flask and Python specifically, I recommend going to
[RealPython](https://realpython.com/) and of course the [official
Python](https://docs.python.org/3/) and Flask docs as needed. These have helped
me a lot.

## Where can we go to learn more?

My [GitHub](https://github.com/bruno-oliveira) is a good place to start. If
you want to ask me a question drop me a line at <olivbruno8@gmail.com>. Also
I'm happy to discuss anything tech related with you.

-- {{ page.guest}}, {{ page.guest_title }}
