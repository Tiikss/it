import express from 'express';
import { profilepic } from '../controllers/user.js';
import { getUser } from '../controllers/user.js';
import { getAllUsers } from '../controllers/user.js';

const router = express.Router();

router.put('/profilepic', profilepic);
router.get('/:username', getUser);
router.get('/', getAllUsers);

export default router;