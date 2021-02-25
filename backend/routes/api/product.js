const express = require('express')
const asyncHandler = require('express-async-handler');
const { Product } = require("../../db/models")

const router = express.Router();

router.get('/', asyncHandler(async function(req, res) {
    const product = await Product.findAll();
    return res.json(product)
}))

// router.get('/', asyncHandler(async function(req,res){
//     const 
// }))

module.exports = router;