const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: { type: String, required: true },
    name: { type: String, required: true },
    avatar: { type: String, required: true },
    status: { type: String, required: true },
    dict: { type: Object, required:true}
}, {
  timestamps: true,
});

const User = mongoose.model('User', userSchema);
module.exports = User;