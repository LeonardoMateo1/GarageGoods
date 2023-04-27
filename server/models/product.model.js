const { mongoose, Schema } = require('mongoose');

const ProductSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "Please give your product a name"],
        minlength: [1, "Please give your product a name"]
    },

    color: {
        type: String,
    },

    brand: {
        type: String,
    },

    about: {
        type: String,
        required: [true, "About summary is required"]
    },

    price: {
        type: Number,
    },

    image: {
        type: String,
    },
    
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model("Product", ProductSchema)