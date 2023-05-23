const UserController = require('../controllers/user.controller');
const ProductController = require('../controllers/product.controller');
const CartController = require('../controllers/cart.controller');
const { authenticate } = require('../config/jwt.config');

module.exports = (app) => {

    // User
    app.post("/api/user/register", UserController.register)
    app.post("/api/user/login", UserController.login)
    app.get("/api/user/logout", UserController.logout)

    // Product
    app.post("/api/product/new", authenticate, ProductController.createProduct)
    app.get("/api/user/products", authenticate, UserController.getUserProducts)
    app.get("/api/product/:id", authenticate, ProductController.getOneProduct)
    app.get('/api/products/notuserproducts', authenticate, ProductController.getAllProductsExceptUserCreated)
    app.get('/api/products/', ProductController.getAllProducts)
    app.put("/api/product/:id/update", authenticate, ProductController.updateProduct)
    app.delete("/api/product/:id/delete", authenticate, ProductController.deleteProduct)

    // Cart
    app.post("/api/cart/:productId", authenticate, CartController.addToCart) //
    app.delete("/api/cart/:itemId/delete", authenticate, CartController.removeFromCart) // Need To Fix
    app.get("/api/cart/:itemId", authenticate, CartController.getCartContents)//
    app.get("/api/user/shoppingCart", authenticate, UserController.getUserCart) //
}