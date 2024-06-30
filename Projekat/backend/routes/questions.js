import express from 'express';
import { getQuestion } from '../controllers/question.js';
import { addLesson } from '../controllers/question.js';

const router = express.Router();

router.get('/:courseName/lesson/:lessonName', getQuestion);
router.post('/:lessonName/:username', addLesson);

export default router;