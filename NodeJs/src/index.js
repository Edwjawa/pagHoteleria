import express from "express";
import login from "./routes/user.routes.js"
import index from "../src/routes/index.routes.js"
import admin from "../src/routes/admin.routes.js"
import cors from 'cors';
import { config } from "./cors.js";


const app = express();

app.use(cors(
    config.application.cors.server
  ));
app.use(express.json());

app.use(index);
app.use(login);
app.use(admin);

app.use((req, res) =>{
    res.status(404).json({
        message: "Error 404. Verifique que haya escrito bien la dirección."
    });
});

app.listen(3000);