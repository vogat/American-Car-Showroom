const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const orderSchema = new Schema({
	username: {
		type: String,
		required: [true, 'Title is required'],
	},
	price: {
		type: Number,
		required: true,
	},
	isDelivery: {
		type: Boolean,
		default: false,
	},
	isPaid: {
		type: Boolean,
		default: false,
	},
	orderItem: [{
		type: Schema.Types.ObjectId,
		ref: 'OrderItem',
	}],
}, { timestamps: true }
);

module.exports = mongoose.model('Order', orderSchema);