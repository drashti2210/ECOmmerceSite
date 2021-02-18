const mongoose = require('mongoose')

const Product = mongoose.model('Product', {
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        default: false
    },
    image:{
        type: Buffer
    },
    sellBy: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }
})

module.exports = Product