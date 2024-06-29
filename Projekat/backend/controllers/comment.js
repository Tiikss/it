import {db} from "../db.js";

export const postComment= (req, res) => {
    const q='INSERT INTO comment (idlesson, `desc`, `like`) VALUES (?)';
    let lajk;

    if(req.body[2] === 'like') lajk=1;
    else if(req.body[2] === 'dislike') lajk=0;
    else lajk=null;


    console.log(req.body[0], req.body[1], lajk);
    db.query(q, [[req.body[0], req.body[1], lajk]], (err, data) => {
        if(err) return res.status(500).json(err);
        res.status(200).json(data);
    });
};