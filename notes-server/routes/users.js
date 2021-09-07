const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const cors = require('cors');

const User = require('../models/user.model');

//  https://localhost:5000/users/register

router.post("/register", cors(), (req, res) => {

    if (!req.body.name || !req.body.email || !req.body.password)
        return res.status(400).json({
            "error": "Invalid Register Request"
        });

    User.findOne({
        email: req.body.email
    }).then(
        user => {
            if (user) {
                return res.status(400).json({
                    "email": "Email already exists"
                });
            } else {
                const newUser = new User({
                    "name": req.body.name,
                    "email": req.body.email,
                    "password": req.body.password
                });

                bcrypt.genSalt(10, (err, salt) => {
                    bcrypt.hash(newUser.password, salt, (err, hash) => {
                        if (err) throw err;
                        newUser.password = hash;
                        newUser
                            .save()
                            .then(user => res.json(user))
                            .catch(err => console.log(err));
                    });
                });
            }
        }
    );
});


router.post("/login", cors(), (req, res) => {

    if (!req.body.email || !req.body.password) {
        res.status(400).json({
            "error": "Invalid Login Request"
        });
    }

    const email = req.body.email;
    const password = req.body.password;

    User.findOne({ email }).then(user => {
        if (!user) {
            return res.status(400).json({
                "error": "Email does not belong to any account."
            });
        }

        bcrypt.compare(password, user.password).then(isMatch => {
            if (isMatch) {

                const payload = {
                    "id": user.id,
                    "name": user.name
                };

                jwt.sign(
                    payload,
                    keys.secretOrKey, {
                        "expiresIn": 31556926
                    },
                    (err, token) => {
                        res.json({
                            "token": token
                        });
                    }
                );
            } else {
                return res.status(400).json({
                    "error": "Email and password doesn't seem to match."
                });
            }
        });
    });
});

module.exports = router;