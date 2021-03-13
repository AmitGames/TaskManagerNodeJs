const mongoose = require('mongoose');

const ListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _ownerUserId: {
        type: mongoose.Types.ObjectId,
        required: true
    }
})

const List = mongoose.model('List', ListSchema);

module.exports = { List }