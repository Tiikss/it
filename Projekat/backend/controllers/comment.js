import {db} from "../db.js";

export const postComment= (req, res) => {
    const q='INSERT INTO comment (idlesson, `desc`, `like`) VALUES (?)';
    let lajk;

    if(req.body[2] === 'like') lajk=1;
    else if(req.body[2] === 'dislike') lajk=0;
    else lajk=null;

    db.query(q, [[req.body[0], req.body[1], lajk]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};

export const getComments= (req, res) => {
    const q='SELECT * FROM comment WHERE idlesson = ?';

    db.query(q, req.params.idlesson, (err, data) => {
        if(err) return res.status(500).json(err);
        console.log(data);
        res.status(200).json(data);
    });
};