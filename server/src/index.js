import express from 'express';
import logger from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import routes from './routes';

dotenv.config();

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGO_URI,
  { useNewUrlParser: true },
);
mongoose.connection.on('error', () => {
  throw new Error(`unable to connect to database: ${process.env.MONGO_URI}`);
});

const app = express();

if (process.env.NODE_ENV === 'development') {
  mongoose.set('debug', true);
  app.use(logger('dev'));
}
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/api', routes);

app.listen({ port: process.env.PORT }, () => {
  console.log(`🚀  Server ready at http://localhost:${process.env.PORT}`); // eslint-disable-line no-console
});
