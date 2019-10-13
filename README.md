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
git clone https://github.com/nickjj/runninginproduction.git

cd runninginproduction

bundle install

bundle exec jekyll serve --config _config.yml,_config.dev.yml --drafts --livereload
```

Visit the site at: `http://localhost:4000`

*That bundle exec command is pretty gnarly. I get around that with a Bash alias
which you can check out
[in my dotfiles](https://github.com/nickjj/dotfiles/blob/7612c4e0d8fb07c7017e1b3f860903f63599d20d/.aliases#L49).*

#### Submitting pull requests

Please create a `feature-xxx` branch. Once it's been accepted / merged it will
make its way onto the site shortly afterwards.
