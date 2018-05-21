const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    title: {type: String, required:true},
    description: {type: String, required:true},
    author: {type: String, required:true},
    price: {type: String, required:true},
    links: [{type: String, required:true}],
    points: {type: Number, required:true},
    age: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, ref:'User'},
    comments: [{type: Schema.Types.ObjectId, ref:'Comment'}]
});

module.exports = mongoose.model('Book', schema);