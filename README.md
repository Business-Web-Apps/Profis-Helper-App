Profis Helper Front- & Backend applications. 
This solution is builded with React (UI) and NestJs (Backend).

### Start the entire project in dev mode

Run the following command to start this project in developer mode (User-UI, Admin-UI, Server and DB):

`docker-compose -f docker-compose.dev.yml up --build`

The configs for the production mode are still in progress.

This solution consists of two packages:

### [Server](./server/README.md)

The backend was developped using NestJs and Prisma. The prisma ORM is used here to connect to the Postgres DB and 
provides a easy access of the NestJs backend application to the DB. 

### [Admin UI](./admin-ui/README.md)

The Admin-UI frontend was developped with ReactJs and is based on the [react-admin](https://marmelab.com/react-admin/) and can be used to manage all the business login of our ProfisHelper solution

### [User UI](./user-ui/README.md)

The User-UI frontend was developped with ReactJs and is based on the [Material-UI](https://mui.com/material-ui/getting-started/) and will be used by potential clients and helpers
### Learn more

This project was generated using amplication. You can learn more in the [Amplication documentation](https://docs.amplication.com/guides/getting-started).
