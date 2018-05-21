const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    date: {type: String, required:true},
    userDonor: {type: Schema.Types.ObjectId, ref:'User'},
    userReceiver: {type: Schema.Types.ObjectId, ref:'User'},
    book: {type: Schema.Types.ObjectId, ref:'Book'}
});

module.exports = mongoose.model('Wish', schema);