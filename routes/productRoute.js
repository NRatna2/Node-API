const express = require('express');
const Product = require('../models/productModel')

const router = express.Router();



router.get('/',async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.get('/:id', async(req, res)=>{
    try {
        const{id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.post('/', async (req, res) => {
    try {
      const product = await Product.create(req.body);
      res.status(200).json(product);
    } catch (error) {
      console.log(error.message);
      res.status(500).json({ message: error.message });
    }
  });

  // update a product
  router.put('/:id', async(req, res)=>{
    try{
        const{id} = req.params;
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).jason({message: `cannot find any product with ID ${id}`})
        }
        const updatedProduct = await Product.findById(id);
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
  })

  //delete a product

  router.delete('/:id', async(req, res)=>{
    try{
        const{id} = req.params;
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).jason({message: `cannot find any product with ID ${id}`})
        }
       
        res.status(200).json(product);

    } catch (error) {
        res.status(500).json({message: error.message})
    }
  })

  // DELETE all products
router.delete('/', async (req, res) => {
    try {
      // Use the `deleteMany` method to delete all products
      const result = await Product.deleteMany({});
  
      if (result.deletedCount > 0) {
        res.status(204).send(); // 204 for successful deletion with no content
      } else {
        res.status(404).json({ message: 'No products found to delete' });
      }
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });

  module.exports = router;