import express, { Request, Response } from "express";
import { json } from "body-parser";
import apiV1 from "./routes/index";

const port = 5000;
const app = express();
app.use(json());

apiV1(app);

app.use((req: Request, res: Response): void => {
  res.status(404).send("Not found");
});

app.listen(port, () => console.log("corriendo en el puerto" + port));
