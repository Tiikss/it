import express from 'express';
import { postComment } from '../controllers/comment.js';
import { getComments } from '../controllers/comment.js';

const router = express.Router();

router.post('/:courseName/lesson/:lessonName', postComment);
router.get('/lesson/:idlesson', getComments);

export default router;