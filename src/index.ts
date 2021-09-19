import "reflect-metadata";
import { createConnection } from 'typeorm';
import * as express from "express";
import * as bodyParser from "body-parser";
import routes from "./routes";

const app = express(); // usar o express na constante "app"
createConnection();

app.use(bodyParser.json()); //pra informar que vou passar os dados via json
app.use(routes); //usar as rotas

app.listen(3333); //porta pra rodar a aplicação

