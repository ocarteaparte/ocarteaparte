const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const http = require('http');
const app = express();
const mongoose = require('mongoose');

//API file for interacting with MongoDB
const users = require('./routes/usersRoute');
const books = require('./routes/booksRoute');
const comments = require('./routes/commentsRoute');
const wishes = require('./routes/wishesRoute');

//Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

//API location
app.use('/usersRoute', users);
app.use('/booksRoute', books);
app.use('/commentsRoute', comments);
app.use('/wishesRoute', wishes);

//Set port
const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);

server.listen(port, () => console.log(`Running on localhost: ${port}`));