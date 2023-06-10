import { Router } from "express";
import { dataDelete, dataGet, dataInsert, dataUpdate } from "../controllers/admin.controller.js";

const router = Router();

router.post('/read', dataGet);

router.post('/reg', dataInsert);

router.put('/updt', dataUpdate);

router.delete('/erase', dataDelete);

export default	router;