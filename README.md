# i18n demo repository with Module Federation

This demo cover 2 scenarios:
- static i18n with @angular/localize
- dynamic with ngx-translate

There are on more scenario when content is localized, 
but this is completely under control of application/module developer
and could not be affected by Module Federation.

Keep in mind CORS limitations.

# Helpful resource to start demo locally 

- [Install Docker engine docs](https://docs.docker.com/engine/install/)
- [Docker Compose docs](https://docs.docker.com/compose/)

- [nginx configuration for ng localization](https://angular.io/guide/i18n#configuring-servers)

- [if you have issues with Mint 20 and docker installation](https://forums.docker.com/t/cant-install-docker-on-ubuntu-20-04/93058/2)

# How to start

```bash
yarn
ng build --prod --localize
sudo ./run.sh
```

# Build

To build angular localize version, and then serve it with docker: 
`ng build --prod --localize`
