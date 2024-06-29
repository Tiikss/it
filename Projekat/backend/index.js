import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';
import courseRoutes from './routes/courses.js';
import lessonRoutes from './routes/lessons.js';
import questionRoutes from './routes/questions.js';
import commentRoutes from './routes/comments.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/backend/auth', authRoutes);
app.use('/backend/users', userRoutes);
app.use('/backend/courses', courseRoutes);
app.use('/backend/lessons', lessonRoutes);
app.use('/backend/questions', questionRoutes);
app.use('/backend/comments', commentRoutes);

app.listen(8800, () => {
    console.log('Connected!');
})