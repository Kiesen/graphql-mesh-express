# graphql mesh express

This is an example setup showing how [graphql-mesh](https://graphql-mesh.com) can be integrated in an existing express backend.

## Development environment

This section should help you to set up a local development environment with a running instance of the express backend, a fake graphql api service and a seeded database.

### Prerequisites

The environment might run with other LTS or major version releases, but the following versions are recommended to avoid issues.

- `node ^12.16.1`
- `npm ^6.14.3`
- `docker ^20.10.5`

### Installation of project dependencies

If you fulfil the prerequisites you should be able to install the development dependencies by executing the following command:

```bash
npm install
```

The development dependencies are needed to allow easy bootstrap and startup of the individual project packages. It is worth mentioning that we are using [lerna](https://lerna.js.org) to manage multiple independent node projects inside one repository. After a successful installation you should be able to install the package dependencies with the following command:

```bash
npm run bootstrap
```

### Startup and seeding of the needed mysql database

The project requires a running mysql database which later is used by [graphql-mesh](https://graphql-mesh.com) as an input source. To make this as easy as possible you only need to follow the follwing instructions.

1. Copy the `.env.example` file with the following command `$ cp .env.example .env`. Important note: the `.env` file needs to be located in the project root.

2. Start a mysql database with the help of docker. To make this work you just need to execute `$ docker-compose up -d` from project root. The initial startup process will take some secounds. If you are interessted in the current state you can execute `$ docker-compose logs -f --tail=20 `, which prints and follows the latest 20 log output messages. If the database is ready to accept connection you should see the following message: `[Note] mysqld: ready for connections.`

3. Now you can execute the following command `$ npm run db:initialize`, which will migrate and seed the running mysql database.

#### Note

By default docker will use the `.env` file to set the needed database credentials and options.

### Startup of the express backend and the fake graphql api service

After you have succesfully installed all needed depdencies and have a running and seeded database you should be able to start the express backend and the fake graphql api service by simply executing `$ npm run start`. If no error occures you can access the fake graphql api on

- [http://localhost:9002/voyager](http://localhost:9002/voyager) or
- [http://localhost:9002/graphql](http://localhost:9002/graphql)

and the express backend on

- [http://localhost:4848/voyager](http://localhost:4848/voyager) or
- [http://localhost:4848/graphql](http://localhost:4848/graphql)

#### Note

We use [graphql-voyager](https://github.com/APIs-guru/graphql-voyager) to have a better visibility of our graphql schema.

## Authors

- **Frederik Aulich** - _Initial work_ - [Kiesen](https://github.com/Kiesen)
- **Angel Svirkov** - _Initial work_ - [angelsvirkov](https://github.com/angelsvirkov)

## Notes

- To make path aliasing work in `packages/backend` we need to register the `tsconfig-paths` module with `ts-node-dev` as shown [here](https://github.com/wclr/ts-node-dev/issues/95#issuecomment-743435649)

## Example queries

To checkout some example queries please use `packages/backend/example-queries/*` inside the GraphiQL playground at http://localhost:4848/graphql

## License

This project is licensed under the MIT license - for details take a look at [LICENSE.md](LICENSE.md)
