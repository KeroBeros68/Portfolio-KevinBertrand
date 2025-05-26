const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    title : { type: String, required: true},
    description : { type:String, required:true },
    author : { type: String, required: true },
    client: { type: String, required: true},
    url: { type: String, required: true},
    imageCardUrl : { type: String, required: true },
    year: { type: String, required: true },
    stack: { type: String, required: true },
    techStack : [
    {
    language : { type: String, required: true},
    frameworks : { type: String} 
    }
    ],
    
});

module.exports = mongoose.model('Work', workSchema);