# Slim example

Example project for demoing a [Slim](http://www.slimframework.com/) app using
http://fgrehm.viewdocs.io/devstep.

## Try it out

```sh
# From your machine
git clone https://github.com/fgrehm/devstep-examples.git
cd devstep-examples/hello-slim
devstep hack -r '-p 8080:8080'

# From within the container
PORT="8080" vendor/bin/heroku-php-apache2
```

Then visit `http://localhost:8080` on your browser.
