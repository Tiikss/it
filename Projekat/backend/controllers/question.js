import {db} from "../db.js";

export const getQuestion = (req, res) => {
    const q='SELECT * FROM lesson l INNER JOIN question q ON l.idlesson=q.idlesson WHERE q.idquestion = l.idlesson';

    db.query(q, [req.params.questionName, req.params.lessonName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const addLesson = (req, res) => {
    const q='INSERT IGNORE INTO lesson_user (idlesson, username) VALUES (?)';
    
    db.query(q, [[req.body.lessonName, req.body.username]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({message: 'Question added successfully.'});
    });
};

export const getDoneLessons = (req, res) => {
    const q='SELECT * FROM lesson_user lu INNER JOIN lesson l ON l.idlesson=lu.idlesson WHERE username= ?';
    
    db.query(q, [req.params.username], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};