const User = require('../models/user.model');
const Product = require('../models/product.model');

module.exports = {
    addToCart: async (req, res) => {
        try {
            // Find the logged-in user
            const user = await User.findOne({ _id: req.user.id });
            console.log(user);
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
            // Check if product exists
            const product = await Product.findOne({ _id: req.params.productId });
            console.log(product);
            if (!product) {
                return res.status(404).json({ message: 'Product not found' });
            }
            // Check if product is already in cart
            if (user.shoppingCart.some(item => item.equals(req.params.productId))) {
                return res.status(400).json({ message: 'Product already in cart' });
            }
            console.log(user, product)
            
            // Add product to cart without triggering validation
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user.id },
                { $push: { shoppingCart: req.params.productId } },
                { new: true, useFindAndModify: false }
            );
    
            res.status(200).json({ message: 'Product added to cart', user: updatedUser });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    removeFromCart: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.user.id });
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            // Find the index of the product ID in the shoppingCart array
            const itemIndex = user.shoppingCart.findIndex(item => item.equals(req.params.itemId));
            console.log("passed")
            if (itemIndex === -1) {
                return res.status(404).json({ message: 'Item not found in cart' });
            }
            console.log("Passed1")
    
            // Remove the product ID from the shoppingCart array using findOneAndUpdate with $pull
            const updatedUser = await User.findOneAndUpdate(
                { _id: req.user.id },
                { $pull: { shoppingCart: req.params.itemId } },
                { new: true, useFindAndModify: false }
            );
            console.log("Pass2")
    
            res.json({ message: 'Item removed from cart', user: updatedUser });
        } catch (err) {
            res.status(500).json(err);
        }
    },

    getCartContents: async (req, res) => {
        try {
            const user = await User.findOne({ _id: req.user.id })
                .populate({
                    path: 'shoppingCart',
                    select: 'name price',
                    match: { _id: req.params.itemId }
                });
    
            if (!user) {
                return res.status(404).json({ message: 'User not found' });
            }
    
            // Filter the populated shoppingCart array to get the specific item
            const item = user.shoppingCart.find(item => item._id.toString() === req.params.itemId);
    
            if (!item) {
                return res.status(404).json({ message: 'Item not found in cart' });
            }
    
            res.json({ item: item });
        } catch (err) {
            res.status(500).json(err);
        }
    }
};
