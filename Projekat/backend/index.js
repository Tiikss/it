import express from 'express';
import authRoutes from './routes/auth.js';
import userRoutes from './routes/users.js';
import cookieParser from 'cookie-parser';
import courseRoutes from './routes/courses.js';
import lessonRoutes from './routes/lessons.js';
import questionRoutes from './routes/questions.js';
import commentRoutes from './routes/comments.js';
import multer from 'multer';
import adminRoutes from './routes/admins.js';

const app = express();

app.use(express.json());
app.use(cookieParser());

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../frontend/public/upload')
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname)
    }
})

const upload = multer({ storage });
app.post('/backend/profile', upload.single('file'), function (req, res) {
    const file = req.file;
    res.status(200).json(file.filename);
})

app.use('/backend/users', userRoutes);
app.use('/backend/auth', authRoutes);
app.use('/backend/courses', courseRoutes);
app.use('/backend/lessons', lessonRoutes);
app.use('/backend/questions', questionRoutes);
app.use('/backend/comments', commentRoutes);
app.use('/backend/admins', adminRoutes);


app.listen(8800, () => {
    console.log('Connected!');
})