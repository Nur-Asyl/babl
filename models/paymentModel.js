const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User' // Assuming you have a User model
    },
    amount: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
    // Include other fields as necessary
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;