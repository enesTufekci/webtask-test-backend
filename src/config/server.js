import express from 'express';
import { Server } from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';
import routes from '../routes';

const app = express();

app.use(cors());
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(routes);

const server = Server(app);

export const IO = require('socket.io')(server); //eslint-disable-line

export default server;

