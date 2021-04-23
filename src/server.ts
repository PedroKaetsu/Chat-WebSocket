import express, { response } from "express";
import { request } from "node:http";
import "./database";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3333, () => console.log("Server is running in port 3333"));
