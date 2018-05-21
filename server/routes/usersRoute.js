const express = require('express');
const router = express.Router();
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose');
const connection = require('../config/database');
const User = require('../models/user');

let response = {
    status: 200,
    data:[],
    message:null
}


router.post('/registerUser', (req, res) => {
    let user  = new User({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    connection( (db) => {
        db.collection('users').insertOne(user, (err, result) => {
            res.send(result);
        });
    });

});

router.get('/getUser/:email', (req,res) => {
    connection( (db) => {
        db.collection('users')
            .find({email: req.params.email})
            .toArray( (err,result) => {
                res.send(result);
            });
    });
});

router.get('/getAllUsers', (req,res) => {
    connection( (db) => {
        db.collection('users')
            .find()
            .toArray( (err,result) => {
                res.send(result);
            });
    });
});


module.exports = router;