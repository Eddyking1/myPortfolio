const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    //model instance
    googleId: String,
    credits: { type: Number, default: 0 },
    email: String
});

//model class = collection
mongoose.model('users', userSchema);
