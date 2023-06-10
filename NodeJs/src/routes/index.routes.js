import { Router } from "express";
import { select, selectAll } from "../controllers/crud.globalController.js";

const router = Router();

var indexInfo = "";
var userData = "";

router.get('/home', async (req, res) => {
    const result = await selectAll('*', 'hotel');
    indexInfo = JSON.stringify([result, userData]);
    res.json(indexInfo);
});

router.post('/home', async (req, res) => {
    const {tipDoc, numDoc, name} = req.body;
    userData = {
        "name": tipDoc,
        "tipDoc": numDoc,
        "Num_Doc": name
    };
});

export default	router;