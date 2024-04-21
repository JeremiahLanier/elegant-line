// backend/routes/productRoutes.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// Get all products with optional filtering and sorting
router.get('/products', async (req, res) => {
    try {
        const { category, sort } = req.query;
        let query = Product.find();
        if (category) {
            query = query.where('category').equals(category);
        }
        if (sort) {
            const sortParams = sort === 'price-low-high' ? { price: 1 } : { price: -1 };
            query = query.sort(sortParams);
        }
        const products = await query.exec();
        res.json(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

module.exports = router;
