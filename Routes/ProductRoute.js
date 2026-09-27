const express = require('express');
const router = express.Router(); //

//import the product controller
const productController = require('../Controllers/ProductController');


//define the routes 
router.post('/createproduct', productController.createProduct);

router.put('/updateproduct:id', productController.updateProduct);

router.get('/getallproducts', productController.getAllProducts);

router.get('/getproductbyid/:id', productController.getProductById);

router.delete('/deleteproduct/:id', productController.deleteProduct);

//export the router to be used in other files
module.exports = router;

