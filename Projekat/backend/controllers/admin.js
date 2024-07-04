import {db} from '../db.js';

export const updateLesson = (req, res) => {
    const q='UPDATE lesson SET name = ?, content = ? WHERE name = ?';
    
    db.query(q, [req.body.lessonName, req.body.content, req.body.lessonName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const deleteLesson = (req, res) => {
    const q='DELETE FROM lesson WHERE idlesson = ?';
    db.query(q, [req.params.idlesson], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const addLesson = (req, res) => {
    const q='INSERT INTO lesson (name, content, course_name, image) VALUES (?)';
    
    db.query(q, [[req.body.lessonName, req.body.content, req.body.courseName, req.body.img]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const addQuestion = (req, res) => {
    const q='INSERT INTO question (answer, content, idlesson, type_name) VALUES (?)';
    db.query(q, [[req.body.answer, req.body.content, req.body.idlesson, req.body.questionType]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const updateQuestion = (req, res) => {
    const q='UPDATE question SET content = ?, answer = ?, type_name = ? WHERE idlesson = ?';
    
    db.query(q, [req.body.content, req.body.answer, req.body.type, req.body.idlesson], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};