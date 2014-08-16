# Martini example

Example project for demoing a [martini](http://martini.codegangsta.io/) app using
http://fgrehm.viewdocs.io/devstep.

## Try it out

```sh
# From your machine
git clone https://github.com/fgrehm/devstep-examples.git
cd devstep-examples/hello-martini
devstep hack -r '-p 8080:8080'

# From within the container
go run main.go
```

Then visit `http://localhost:8080` on your browser.
