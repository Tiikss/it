import {db} from '../db.js';

export const updateLesson = (req, res) => {
    const q='UPDATE lesson SET name = ?, content = ? WHERE name = ?';
    
    db.query(q, [req.body.lessonName, req.body.content, req.body.lessonName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};