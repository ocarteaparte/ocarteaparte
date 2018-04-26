const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

//Connection
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/ocarteaparte', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
}

let response = {
    status: 200,
    data:[],
    message:null
}

//Get books
router.get('/books', (req,res) => {
    connection((db) => {
        db.collection('books')
            .find()
            .toArray()
            .then((books) => {
                response.data = books;
                res.json(response);
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

module.exports = router;