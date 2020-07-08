const mongoose = require('mongoose');
const { Schema } = mongoose;

const googleUserSchema = new Schema({
    //model instance
    googleId: String,
    email: String,
    credits: { type: Number, default: 0 },
});

//model class = collection
mongoose.model('users', googleUserSchema);


