# Cowsay API

## Install

1. After cloning the repository you need to install all dependencies for the proyect

```sh
npm i
```

2. Add the .env file

3. Then just start the server with

```sh
npm start
```

This starts your server on the default port 3000

If you wish to change the port just modify the .env file with the following variables

| VARIABLE | DESCRIPTION |
|----------|-------------|
| PORT | Server port |


## Docker

If you want to run this server with docker follow the next steps

1. Run the following command to build your new image

```sh
docker build . -t <name>/<name>
```

2. Run the container with the following command

```sh
docker run -p 3001:3001 -d <name>/<name>
```