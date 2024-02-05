import express from 'express'
//import register logic
import { registerLogic } from '../controllers/authControllLogic.js';

//create roter object 
const router = express.Router()


//create rouer path
router.post('/register', registerLogic)


//export
export default router