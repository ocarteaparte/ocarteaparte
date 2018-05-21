const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    email: {type: String, required: true, unique: true},
    username: {type: String, required:true},
    password: {type: String, required:true},
    books: [{type: Schema.Types.ObjectId, ref:'Book'}]
});

module.exports = mongoose.model('User', schema);