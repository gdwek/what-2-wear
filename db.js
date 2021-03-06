//1st DRAFT DATA MODEL
//require('dotenv').config(); 
const mongoose = require('mongoose');
// users
// * our site requires authentication...
// * so users have a username and password
// * they also can have 0 or more outfits
// * users have a location for accurate weather
const User = new mongoose.Schema({
    username: {type: String, required: true},
    password: {type: String, required: true},
    outfits: [{type: mongoose.Schema.Types.ObjectId, ref: 'Outfit'}],
    zipcode: {type: String, required: true},
});

// outfits
// * each oufit references a user
// * an outfit includes various clothing items
// * some are strings and some are booleans
// * also has a temperature in which the outfit was worn
const Outfit = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    top: {type: String, required: true},
    bottom: {type: String, required: true},
    jacket: {type: Boolean, required: true},
    scarf_gloves: {type: Boolean, required: true},
    temp: {type: Number, required: true},
});



mongoose.model('User', User);
mongoose.model('Outfit', Outfit);



