import express from 'express';
import { getLessons } from '../controllers/course.js';

const router = express.Router();

router.get('/:courseName', getLessons);

export default router;