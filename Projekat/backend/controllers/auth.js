import {db} from '../db.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = (req, res) => {
    const q="SELECT * FROM users WHERE username = ? OR email = ?"
    
    db.query(q, [req.body.username, req.body.email], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length) return res.status(409).json({message: "Korisnik sa ovim korisničkim imenom već postoji!"});

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);

        const q = "INSERT INTO users(username, email, password, is_admin, name, surname) VALUES(?)";
        const values = [
            req.body.username, 
            req.body.email, 
            hash, 
            0,
            req.body.name, 
            req.body.surname
        ];

        const token=jwt.sign({id: req.body.username}, "jwtkey");
        const {password, confirme, ...other}=req.body;

        db.query(q, [values], (err, data) => {
            if(err) return res.status(500).json(err);
            res.cookie("access_token", token, {
                httpOnly: true,
            }).status(200).json(other);
        })
    })
};

export const login = (req, res) => {
    const q="SELECT * FROM users WHERE username = ?"
    
    db.query(q, [req.body.username], (err, data) => {
        if(err) return res.status(500).json(err);
        if(data.length === 0) return res.status(404).json({message: "Korisnik nije pronađen!"});

        const isPasswordCorrect=bcrypt.compareSync(req.body.password, data[0].password); 

        if(!isPasswordCorrect) return res.status(400).json({message: "Pogrešna lozinka!"});

        const token=jwt.sign({id: data[0].id}, "jwtkey");
        const {password, ...other}=data[0];

        res.cookie("access_token", token, {
            httpOnly: true,
        }).status(200).json(other)
    });
};

export const logout = (req, res) => {
    res.clearCookie("access_token", {
        sameSite: "none",
        secure: true,
    }).status(200).json({message: "Logged out"});
};