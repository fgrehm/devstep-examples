# Sinatra example

Example project for demoing a [sinatra](http://www.sinatrarb.com/) app using
http://fgrehm.viewdocs.io/devstep.

## Try it out

```sh
# From your machine
git clone https://github.com/fgrehm/devstep-examples.git
cd devstep-examples/hello-sinatra
devstep hack -r '-p 8080:8080'

# From within the container
unicorn
```

Then visit `http://localhost:8080` on your browser.
