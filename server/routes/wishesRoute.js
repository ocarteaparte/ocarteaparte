const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const connection = require('../config/database');
const Wish = require('../models/wish');

let response = {
    status: 200,
    data:[],
    message:null
}


router.post('/insertWish', (req, res) => {
    let wish  = new Wish({
        date: req.body.date,
        userDonor: req.body.userDonor,
        userReceiver: req.body.userReceiver,
        book: req.body.book
    });
    connection( (db) => {
        db.collection('wishes').insertOne(wish, (err, result) => {
            res.send(result);
        });
    });

});


router.get('/getAllWishes', (req,res) => {
    connection( (db) => {
        db.collection('wishes')
            .find()
            .toArray( (err,result) => {
                res.send(result);
            });
    });
});


module.exports = router;