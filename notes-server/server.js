const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const passport = require('passport');
const users = require('./routes/users');
const notes = require('./routes/notes');
const defaultRouter = express.Router();

const app = express();

app.use(cors());
app.use(express.json());

const db = require('./config/keys').mongoURI;

mongoose.connect(
    db, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    }
).then(
    () => console.log("Database connected")
).catch(
    err => console.log(err)
);

app.use(passport.initialize());
require('./config/passport')(passport);

app.use('/users', users);
app.use('/notes', notes);
defaultRouter.options("/", cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on ${PORT}`));