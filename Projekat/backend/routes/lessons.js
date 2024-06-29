import express from 'express';
import { getLesson } from '../controllers/lesson.js';

const router = express.Router();

router.get('/:courseName/lesson/:lessonName', getLesson);

export default router;