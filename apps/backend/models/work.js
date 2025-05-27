const mongoose = require('mongoose');

const workSchema = mongoose.Schema({
    title : { type: String, required: true},
    description : { type:String, required:true },
    client: { type: String, required: true},
    url: { type: String, required: true},
    gitHub: { type: String, required: true},
    logo : { type: String, required: true },
    date: { type: String, required: true },
    stack: { type: String, required: true },
    techStack : [
    {
    language : { type: String, required: true},
    frameworks : { type: String} 
    }
    ],
    
});

module.exports = mongoose.model('Work', workSchema);