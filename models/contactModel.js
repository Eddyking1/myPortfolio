const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// export contact model  with contact Schema
module.exports = mongoose.model('contact', contactSchema)

