const mongoose = require('mongoose');
const { Schema } = mongoose;

const googleUserSchema = new Schema({
    //model instance
    googleId: String,
    email: String,
});

//model class = collection
mongoose.model('googleUsers', googleUserSchema);


