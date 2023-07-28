const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const itemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    description: {
        type: String,
        required: [true, 'Description is required'],
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'Price is required'],
    },
    category: {
        type: String,
        enum: ['Italian', 'Mexican'],
        required: [true, 'Category is required'],
        default: 'Italian',
    },
    img: {
        type: String,
        required: [true, 'Image path is required'],
    },
}, { timestamps: true }
);

module.exports = mongoose.model('Item', itemSchema);