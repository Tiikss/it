import {db} from "../db.js";

export const getLessons = (req, res) => {
    const q='SELECT * FROM lesson WHERE course_name = ?';
    db.query(q, [req.params.courseName], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};