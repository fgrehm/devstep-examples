# Express example

Example project for demoing an [express](http://expressjs.com/) app using
https://github.com/fgrehm/devstep.

## Try it out

```sh
# From your machine
git clone https://github.com/fgrehm/devstep-examples.git
cd devstep-examples/hello-express
devstep hack -r '-p 8080:8080'

# From within the container
node app.js
```

Then visit `http://localhost:8080` on your browser.
