import express from 'express';
import { getLesson } from '../controllers/lesson.js';
import { getAllLessons } from '../controllers/lesson.js';

const router = express.Router();

router.get('/:courseName/lesson/:lessonName', getLesson);
router.get('/getAll', getAllLessons);

export default router;