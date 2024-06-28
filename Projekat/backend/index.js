import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';
import courseRoutes from './routes/courses.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use('/backend/auth', authRoutes);
app.use('/backend/users', userRoutes);
app.use('/backend/courses', courseRoutes);

app.listen(8800, () => {
    console.log('Connected!');
})