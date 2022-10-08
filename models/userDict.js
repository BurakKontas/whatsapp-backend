const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    _id: { type: String, required: true },
    dict: { type: Array, required: true },
}, {
  timestamps: true,
});

const UserDict = mongoose.model('UserDict', schema);
module.exports = UserDict;