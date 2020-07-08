const mongoose = require("mongoose");

const User = mongoose.Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

// export model user with User Schema
module.exports = mongoose.model("user", User);
