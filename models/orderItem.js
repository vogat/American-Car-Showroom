const mongoose = require('mongoose');
const order = require('./order');

const Schema = mongoose.Schema;

const orderItemSchema = new Schema({
    title: {
        type: String,
        required: [true, 'Title is required'],
    },
    price: {
        type: Number,
        min: 0,
        required: [true, 'Price is required'],
    },
    img: {
        type: String,
        required: [true, 'Image path is required'],
    },
	order: {
		type: Schema.Types.ObjectId,
		ref: 'Order',
	},
}, { timestamps: true }
);

module.exports = mongoose.model('OrderItem', orderItemSchema);