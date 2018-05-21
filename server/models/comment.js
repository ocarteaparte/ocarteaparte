const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    date: {type: String, required:true},
    message: {type: String, required:true},
    user: {type: Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Comment', schema);