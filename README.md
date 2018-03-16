# **Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/jaelsoncarvalho), send an email to jaelsoncarvalhojr@gmail.com, or create a pull request on this project.

---

# tt-music-search

A "music search" web application, using a few named techs, the app let users search for an Artist, then inspect this Artist's Albums and related Tracks.

Actually hosted on: http://tt-music-search.s3-website.us-east-2.amazonaws.com

---

## Index

- [Stack](#stack)
- [Design Goals](#design-goals)
- [API](#api)
- [Avaialable Pages](#available-pages)
- [Getting Started](#getting-started)
- [Local Commands](#local-commands)
    - [Build](#build)
    - [Development](#development)
    - [Production](#production)
    - [JavaScript Lint](#javascript-lint)
- [Docker Build and Run](#docker-build-and-run)
- [Auxiliary Commands](#docker-auxiliary-commands)

---

## Stack

* [Node.js](https://nodejs.org) (8.9.1)
* [npm](https://www.npmjs.com) (5.6.0)
* [React](https://facebook.github.io/react) (16.2.0)
* [React Router DOM](https://reacttraining.com/react-router/) (4.2.2)
* [Flow](https://flow.org/) (0.66.0) for a static type checker for Javascript
* [Spotify Web API JS](https://github.com/JMPerez/spotify-web-api-js/) (0.23.0)
* [Webpack](https://webpack.github.io) (3.8.1) for development and bundling
* [Babel](https://babeljs.io/) (6.26.0) transpiler for ES6 and ES7 magic
* [ESLint](http://eslint.org/) (4.10.0) to maintain a consistent code style
* SCSS as CSS extension language

---

## Design Goals

- Use Cutting-Edge Technologies
- Best Programming Techniques
- Babel 6 with Webpack and Hot Loader
- Fast testing with mocked-out DOM
- Separate [Smart and Dumb](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) components
- Use [Flow](https://flow.org/) to obtain a safe Javascript environment
- Use Spotify Web API JS as lightweight wrapper for the [Spotify Web API](https://developer.spotify.com/web-api/)
- Use only modern native CSS features to style the whole application

---

## API

This application consumes data from the following services:

* [Spotify Web API](https://developer.spotify.com/web-api/)

---

## Available Pages

|    Page    |    URL        |                          Description                        |
|:----------:|:-------------:|:-----------------------------------------------------------:|
|    Home    |     /         |  Main page of application to show the fetched group of artists          |
|   Artist   |     /artists/:artistId |  Page that contains artist's details    |
|   Album    |     /albums/:albumId |  Page that contains album's details    |

---

## Getting Started

Install yarn to a better package management

```sh
$ npm install --global yarn
```

Install application dependencies

```sh
$ yarn install
```

Follow the official [Spotify: API tutorial](https://developer.spotify.com/web-api/tutorial) that shows how to create a application that accesses user-related data through the Spotify Web API.

During the tutorial you need add any Redirect URIs that the Spotify Accounts service could call when authentication process completes. For ```tt-music-search``` in development you must add ```http://localhost:3000/login``` and ```http://<PRODUCTION_URL>/login``` for production environments.

After the tutorial you need to configure the .env file with the Spotify application's client ID.

---

## Local Commands

In this current section you can find all commands to run the application in your machine. All the commands also are  in the `scripts` section of [package.json](package.json).

### Development

```sh
$ yarn start
```

Navigate to **http://localhost:3000/** to view the app.

### Build

```sh
$ yarn build
```

The above command is used to build the production files.

**Input:** `src/index.js` and `public/index.html`

**Output:** `build/`

### JavaScript Lint

```sh
$ yarn lint
```

This above command is used to identifying and reporting on patterns in JavaScript on the specified directory.

### Flow lint

```sh
$ yarn flow
```

This above command is used to identifying and reporting on patterns in Flow on the specified files.

### Test

```sh
$ yarn test
```

This above command is used to identifying and reporting on patterns in JavaScript on the entire project.

---

## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request

---

## Contributors

* Jaelson Carvalho ([jcarva](https://github.com/jcarva))

---

## Style Guide

Some parts of this project follow the style guide from [React Redux Universal Hot Example](https://github.com/erikras/react-redux-universal-hot-example)

---

## License

This project is licensed under the terms of the **GNU GENERAL PUBLIC** license.
>You can check out the full license [here](https://github.com/jcarva/tt-music-search/blob/master/LICENSE)

---
