const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const connection = require('../config/database');
const Book = require('../models/book');

let response = {
    status: 200,
    data:[],
    message:null
}

//Insert a book
router.post('/insertBook', (req, res) => {
    let book = new Book({
        title: req.body.title,
        description: req.body.description,
        author: req.body.author,
        price: req.body.price,
        links: req.body.links,
        points: req.body.points,
        age: req.body.age,
        user: req.body.user
    });
    connection( (db) => {
        db.collection('books').insertOne(book, (err, result) => {
            console.log(result);
            res.send(result);
        });
    });

});

//Get all Books
router.get('/getAllBooks', (req,res) => {
    connection( (db) => {
        db.collection('books')
            .find()
            .toArray( (err,result) => {
                res.send(result);
            });
    });
});

module.exports = router;