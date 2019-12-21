# Running in Production

A podcast and interview site where folks talk about running small & large web
apps in production. Topics include tech stacks, success stories, lessons
learned and deployment tips.

This repo is the source code that runs
[runninginproduction.com](https://runninginproduction.com), go check it out.

This site is built with Jekyll and hosted on DigitalOcean.

## Development

#### Requirements

- Ruby 2.5.0 or greater

#### Getting set up locally

```sh
git clone https://github.com/nickjj/runninginproduction.com.git

cd runninginproduction.com

bundle install

bundle exec jekyll serve --config _config.yml,_config.dev.yml --drafts --livereload
```

Visit the site at: <http://localhost:4000>

*That bundle exec command is pretty gnarly. I get around that with a Bash alias
which you can check out
[in my dotfiles](https://github.com/nickjj/dotfiles/blob/7612c4e0d8fb07c7017e1b3f860903f63599d20d/.aliases#L49).*

#### Submitting pull requests

Please create a `feature-xxx` branch. Once it's been accepted / merged it will
make its way onto the site shortly afterwards.

#### Working on the audio player locally

Keep in mind you only need to do this if you plan on working with and testing
the audio player in development.

In Chrome and FireFox the audio player does not work correctly when Jekyll is
serving the site. It has trouble keeping track of the current playback time.
This is only an issue in development.

To get around that, you'll need to do 2 things:

1. In `_config.dev.yml`, replace `http://localhost:4000` with
   `http://localhost` in the entire file.

2. Serve the site locally with nginx (this will be easy with Docker)

There's an `_nginx/local.conf` file in this repo that's already set up and
ready to go. You do not need to edit it. If you're running Docker, you can run
this command to have nginx serve the site locally:

```sh
docker container run --rm -it -p 80:80 -v "${PWD}":/app \
  -v "${PWD}"/_nginx/local.conf:/etc/nginx/conf.d/default.conf nginx
```

Now if you visit the site at <http://localhost> the audio player will work.

Jekyll's live reload will not work but if you make changes to any of the files
and reload your browser manually then the nginx version of the site will update
without having to restart anything.
