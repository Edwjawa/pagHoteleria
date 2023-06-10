import { Router } from "express";

import {userGet,userPost,userPut,userDelete} from "../controllers/user.controllers.js";

const router = Router();

router.post('/login', userGet);

router.post('/register', userPost);

router.put('/put', userPut);

router.delete('/delete', userDelete);



export default	router;