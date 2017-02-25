# Whatoperator.win
> Rainbow Six: Siege operator randomizer

[Whatoperator.win](https://whatoperator.win) will randomize your operator picks when you feel bored and don't know what to pick. It also allows to switch between attacker and defender after rounds.

### Building

A quick introduction of the minimal setup you need to get a hello world up &
running.

```shell
npm install && npm run dev
```

This will install all the sites dependencies and will execute the Gulp + Webpack buildscript to generate the asset files and start the development server.

## Developing

The project is built using the following technologies:

* Angular > 1
* SASS
* Webpack 2
* Gulp 3

It's recommended to atleast make you comfortable with Angular before.

### Deploying / Publishing

If you have the permissions to deploy to my [surge.sh](https://surge.sh) site, you only have to type the followin command 

```shell
npm run deploy
```

If you want to deploy to your own [surge.sh](https://surge.sh) site, you will need to modify the CNAME file first.

## Features

Currently it has the following features
* True randomizing of the operator picks
* Service workers to cache all assets
* Offline mode

TODO:
* Support teams
* Support blacklisting operators 

If you have *any* feature requests, *please* open an issue*

## Licensing

The code in this project is licensed under MIT license.

Copyright (c) 2017 Karl Merkli

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.