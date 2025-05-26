const mongoose = require('mongoose');
require('dotenv').config();

const userSchema = mongoose.Schema({
    email : { 
        type: String,
        required: true,
        unique: true,
    }, //- adresse e-mail de l’utilisateur [unique]
    password : { type: String, required: true } //- mot de passe haché de l’utilisateur
    
}, { toJSON: { getters: true } });

module.exports = mongoose.model('User', userSchema);