const Product = require('../models/product');
const { throwError } = require('../utils/helper');


//get all products
exports.getProducts = async (req, res, next) => {
    try {
        const products = await Product.findAll();
        res.json(products);

    } catch (error) {
        next(error)
    }

}

//get single product i.e product details
exports.getProduct = async (req, res, next) => {
    const productId = req.params.productId;

    try {
        const product = await Product.findByPk(productId);
        if(!product){
            throwError({ message: 'product not found', status: 404 })
        }
        res.json(product)

    } catch (error) {
        next(error);
    }
}


//add product
exports.addProduct = async (req, res, next) => {
    //console.log(req.body)
    try {
        const product = await Product.create(req.body);
        res.json(product)

    } catch (error) {
        next(error)
    }
}


//update product
exports.updateProduct = async (req, res, next) => {
    const updateReq = req.body;
    
    try {
        const product = await Product.findByPk(updateReq.productId);
        if(!product){
            throwError({ message: 'product not found', status: 404 })
        }

        //update the product
        product.product_name = updateReq.product_name;
        product.product_description = updateReq.product_description;
        product.product_varieties = updateReq.product_varieties;
        const data = await product.save();

        res.json(data);
        
    } catch (error) {
        next(error)
    }
}


//delete varieties
exports.deleteVariety = async (req, res, next) => {
    const prodId = req.body.prodId;
    const indexToDelete = req.body.varietyIndex
    try {
        const product = await Product.findByPk(prodId);
        if(!product){
            throwError({ message: 'Product not found', status: 404} );
        }
        const newProductVarieties = product.product_varieties.filter((val, index) => index !== indexToDelete);
        product.product_varieties = newProductVarieties;
        const data = await product.save();
        res.json(data)


    } catch (error) {
        next(error);
    }
}

