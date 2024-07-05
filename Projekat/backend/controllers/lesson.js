import e from "express";
import {db} from "../db.js";

export const getLesson = (req, res) => {
    const q='SELECT * FROM lesson WHERE course_name = ? and idlesson = ?';
    
    db.query(q, [req.params.courseName, req.params.lessonName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const getAllLessons = (req, res) => {
    const q='SELECT * FROM lesson';
    
    db.query(q, (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
}

export const getLessonsSearch = (req, res) => {
    const search = '%' + req.query.search + '%';
    const courseName = req.query.course;
    const q='SELECT * FROM lesson WHERE name LIKE ? AND course_name = ?';

    if (search == '%%') {
        return res.status(200).json([]);
    }
    
    db.query(q, [search, courseName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
}