# Development Guide

This guide consider you have Debian.

## Create development environment

1. Install asdf

        apt install asdf

1. Install node

        asdf plugin add nodejs
        asdf install nodejs 22.6.0
        asdf local node 22.6.0

1. Install Angular CLI

        npm install -g @angular/cli

1. Install node dependencies

        cd runeword-book
        npm install

## Run development server

    cd runeword-book
    ng serve

Then, access to http://localhost:4200

## Create new Angular component

    ng generate component <name>

## Store your secrets

Do it in a password store like keepassxc and the retrieve the password like so:

    keepassxc-cli show <database> <key> -a Password
