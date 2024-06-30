import {db} from "../db.js";

export const getQuestion = (req, res) => {
    const q='SELECT * FROM lesson l INNER JOIN question q ON l.idlesson=q.idlesson WHERE q.idquestion = l.idlesson';

    db.query(q, [req.params.questionName, req.params.lessonName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const addLesson = (req, res) => {
    const q='INSERT INTO lesson_user (idlesson, `username`) VALUES (?)';
    console.log(req.body.lessonName, req.body.username);
    db.query(q, [[req.body.lessonName, req.body.username]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json({message: 'Question added successfully.'});
    });
};