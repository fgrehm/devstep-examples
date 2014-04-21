FROM fgrehm/devstep:standalone

# Rebuild project based on this Dockerfile
ONBUILD ADD . /workspace
ONBUILD WORKDIR /workspace
ONBUILD RUN CLEANUP=1 /.devstep/bin/build-project /workspace
