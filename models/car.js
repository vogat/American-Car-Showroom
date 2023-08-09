const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const carSchema = new Schema({
    make: {
        type: String,
        required: [true, 'Car make is required'],
    },
    model: {
        type: String,
        required: [true, 'Car model is required'],
    },
    year: {
        type: String,
        required: [true, 'Car Year is required'],
    },
    img: {
        type: String,
        required: [true, 'Image is required. If need, upload your photo using a website like Imgur.'],
    }
})

module.exports = mongoose.model('Car', carSchema)