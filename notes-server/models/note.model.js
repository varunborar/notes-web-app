const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NoteSchema = new Schema({

    "user-id": {
        "type": String,
        "required": true
    },
    "title": {
        "type": String,
        "default": "New Note"
    },
    "content": {
        "type": String,
        "default": ""
    },
    "labels": {
        "type": Array,
        "default": ["All Notes"]
    },
    "date": {
        "type": Date,
        "default": Date.now
    }
});

module.exports = Note = mongoose.model("note", NoteSchema);