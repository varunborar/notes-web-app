const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const cors = require('cors');

const Notes = require('../models/note.model');


function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1] || authHeader;

    if (token == null)
        return res.status(401).json({ 'error': "token required" });

    jwt.verify(token, keys.secretOrKey, (err, user) => {
        if (err) {
            return res.status(403).json({ 'error': "token not valid" });
        }

        req.user = user;
        next();
    });
}

router.get('/', cors(), authenticateToken, (req, res) => {
    const notes = Notes.find({
        "user-id": req.user.id
    }, (err, docs) => {
        if (err) return res.status(400).json({ 'error': 'no document found' });

        return res.status(200).json(docs);
    });
});

router.post('/add', authenticateToken, (req, res) => {
    const newNote = new Notes({
        "user-id": req.user.id,
        "title": req.body.title,
        "content": req.body.content,
        "labels": req.body.labels,
        "date": req.body.date
    });
    newNote.save();
    return res.status(200).json(newNote);
});

router.delete('/delete/:id', authenticateToken, (req, res) => {
    Notes.findOneAndRemove({ _id: req.params.id }, (err, docs) => {
        if (err) return res.status(400).json({ 'error': 'no document found' });
        return res.status(200).json(docs);
    })
});

router.put('/update/:id', authenticateToken, (req, res) => {
    Notes.findOneAndUpdate({ _id: req.params.id }, {
        $set: {
            "user-id": req.user.id,
            "title": req.body.title,
            "content": req.body.content,
            "labels": req.body.labels,
            "date": req.body.date
        }
    }).then(result => {
        res.status(200).json({ result });
    }).catch(err => {
        res.status(400).json({ 'error': err });
    })
})


module.exports = router;