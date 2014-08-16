# Flask example

Example project for demoing a [flask](http://flask.pocoo.org/) app using
http://fgrehm.viewdocs.io/devstep.

## Try it out

```sh
# From your machine
git clone https://github.com/fgrehm/devstep-examples.git
cd devstep-examples/hello-flask
devstep hack -r '-p 8080:8080'

# From within the container
python hello.py
```

Then visit `http://localhost:8080` on your browser.
