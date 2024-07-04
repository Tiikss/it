import express from 'express';
import { updateLesson } from '../controllers/admin.js';
import { deleteLesson } from '../controllers/admin.js';
import { addLesson } from '../controllers/admin.js';
import { addQuestion } from '../controllers/admin.js';
import { updateQuestion } from '../controllers/admin.js';
import { deleteUser } from '../controllers/admin.js';

const router = express.Router();

router.post('/updateLesson', updateLesson);
router.delete('/deleteLesson/:idlesson', deleteLesson);
router.post('/addLesson', addLesson);
router.post('/addQuestion', addQuestion);
router.post('/updateQuestion', updateQuestion);
router.delete('/deleteUser/:username', deleteUser);

export default router;