import express, { Request, Response } from 'express';
import { json } from 'body-parser';
import dotenv from 'dotenv';

import connectToDB from './db/connection';
import apiV1 from './routes/index';

dotenv.config();

const port:string = process.env.PORT as string ?? 3000;
const app = express();
app.use(json());

apiV1(app);

app.use((req: Request, res: Response): void => {
  res.status(404).send('Not found');
});

connectToDB().then((connected: boolean) => {
  if (connected) {
    app.listen(port, () => console.log('corriendo en el puerto ' + port));
  } else {
    console.log('Error mongo db');
  }
});
