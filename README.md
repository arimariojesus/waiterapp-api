![WAITERAPP BANNER](./.docker/banner.png)

<p align="center">
  <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#tecnologies">Tecnologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#run-project">Run Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#license">License</a>
</p>

<p align="center">
  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/arimariojesus/waiterapp-api?style=flat-square" />
  <img alt="GitHub License" src="https://img.shields.io/github/license/arimariojesus/waiterapp-api?style=flat-square" />
</p>

### Project

WaiterApp is a platform for managing and tracking orders in restaurants and bars. The platform consists of a mobile app for the waiter, where it is possible to enter orders per table, a website for managers or assistants where it is possible to control and monitor orders in real time.

| project based on [Mateus Silva's](https://github.com/maateusilva) OPJS week

### Tecnologies

This project was developed with the following technologies:

- [NodeJs](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)
- [Express](https://github.com/expressjs/express)
- [Mongoose](https://mongoosejs.com/)
- [Socket.io](https://socket.io/)
- [Docker and Docker-Compose](https://www.docker.com/)
  - [MongoDB](https://www.mongodb.com/)
- [and other auxiliares...](./package.json#L37)

### Run Project

#### Prerequisites

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en/) >= 16.x
- [Docker and Docker-Compose](https://docs.docker.com/engine/install/)

```bash
# Clone project
$ git clone https://github.com/arimariojesus/waiterapp-api

# Access project folder
$ cd waiterapp-api

# Install the dependencies
$ yarn install

# Turn on server
$ yarn dev:docker
```

Your server will be online on host http://localhost:3333

### License

Distributed under the MIT License. See LICENSE for more informations.

---

<p align="center">
  Made with ❤ by <a href="https://www.linkedin.com/in/arimario-jesus">Ari Jesus</a>
</p>
