const MongoClient = require('mongodb').MongoClient;

const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/ocarteaparte', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
}

module.exports = connection;