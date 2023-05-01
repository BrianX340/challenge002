const mongoose = require('mongoose');

const Roles = new mongoose.Schema({
    type: String,
    label: String
}, {
    timestamps: true
})

module.exports = mongoose.model('Roles', Roles)