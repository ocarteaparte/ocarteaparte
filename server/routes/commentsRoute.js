const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const connection = require('../config/database');
const Comment = require('../models/comment');

let response = {
    status: 200,
    data:[],
    message:null
}

//Insert Comment
router.post('/insertComment', (req, res) => {
    let comment = new Comment({
        date: req.body.date,
        message: req.body.message,
        user: req.body.user
    });
    connection( (db) => {
        db.collection('comments').insertOne(comment, (err, result) => {
            console.log(result);
            res.send(result);
        });
    });

});


//Get all Comments
router.get('/getAllComments', (req,res) => {
    connection( (db) => {
        db.collection('comments')
            .find()
            .toArray( (err,result) => {
                res.send(result);
            });
    });
});

module.exports = router;