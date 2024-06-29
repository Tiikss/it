import express from 'express';
import { postComment } from '../controllers/comment.js';

const router = express.Router();

router.post('/:courseName/lesson/:lessonName', postComment);

export default router;