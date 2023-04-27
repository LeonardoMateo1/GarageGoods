const Product = require('../models/product.model');
const User = require('../models/user.model');

module.exports = {
    createProduct: async (req, res) => {
        try {
            // Create new product and set createdBy field to the user's ID
            const product = await Product.create({
                name: req.body.name,
                color: req.body.color,
                brand: req.body.brand,
                about: req.body.about,
                price: req.body.price,
                image: req.body.image,
                createdBy: req.user.id
            });
        
            // Add product ID to user's list of products
            await User.findOneAndUpdate({ _id: req.user.id }, { $push: { products: product._id } }, { new: true });
        
            // Return newly created product
            res.status(200).json(product);
        } catch (err) {
            res.status(400).json(err);
        }
    },

    getOneProduct: (req, res) => {
        Product.find({ _id: req.params.id })
            .then(product => res.status(200).json(product))
            .catch(err => res.status(500).json(err))
    },

    updateProduct: (req, res) => {
        Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
            .then(product => res.json(product))
            .catch(err => res.json(err))
    },

    deleteProduct: async (req, res) => {
        await User.findOneAndUpdate({ _id: req.user.id }, { $pull: { products: req.params.id } })
        await Product.deleteOne({ _id: req.params.id })
            .then(deletedProduct => res.json(deletedProduct))
            .catch((err) => console.log(err));
    },

    getAllProductsExceptUserCreated: async (req, res) => {
        try {
            // Find the logged-in user
            const user = await User.findOne({ _id: req.user.id });
            
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
        
            // Find all products except those created by the user
            const products = await Product.find({ createdBy: { $ne: user._id } });
        
            res.status(200).json(products);
        } catch (err) {
            res.status(500).json(err);
        }
    }
}