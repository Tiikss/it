import {db} from '../db.js';

export const profilepic =  (req, res) => {
    const q='UPDATE users SET img = ? WHERE username = ?';
    db.query(q, [req.body.img, req.body.username], (error, result) => {
        if (error) {
            res.status(400).json({message: 'An error occurred while updating the profile picture.'});
        } else {
            res.status(200).json({message: 'Profile picture updated successfully.'});
        }
    });
}

export const getUser = (req, res) => {
    const q='SELECT * FROM users WHERE username = ?';
    db.query(q, req.params.username, (error, result) => {
        if (error) {
            res.status(400).json({message: 'An error occurred while fetching the user.'});
        } else {
            res.status(200).json(result);
        }
    });
}

export const getAllUsers = (req, res) => {
    const q='SELECT * FROM users';
    db.query(q, (error, result) => {
        if (error) {
            res.status(400).json({message: 'An error occurred while fetching the users.'});
        } else {
            res.status(200).json(result);
        }
    });
}
