import express, { Router } from 'express';
import { signup, signin, google, signout } from '../controllers/authcontroller.js';

const router = express.Router();

router.post('/signup', signup)
router.post('/signin', signin)
router.post('/google', google)
router.get('/signout', signout)


export default router;