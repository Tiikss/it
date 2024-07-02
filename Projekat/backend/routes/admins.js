import express from 'express';
import { updateLesson } from '../controllers/admin.js';

const router = express.Router();

router.post('/updateLesson', updateLesson);

export default router;