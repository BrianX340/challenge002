const { validationResult } = require('express-validator')
const { Products } = require('../models')
const fs = require('fs')
const path = require('path')

module.exports = {
    createProduct: async (req, res) => {
        try{
            let { name, price, description, barcode } = req.body
            let errorsOfValidation = validationResult(req)
            if (!errorsOfValidation.isEmpty()) {
                throw new Error(errorsOfValidation.errors.shift().msg)
            }
            let imgPath = req.file ? req.file.filename : null
            if(!imgPath){
                throw new Error('Debe seleccionar una imagen')
            }

            await Products.create({ name, price, description, barcode, imgPath})
            
            return res.status(200).json({ status:'success' })
        }
        catch(e){
            console.error(e)
            return res.json({status: 'error', message: e.message})
        }
    },
    deleteProduct: async (req, res) => {
        try {
            let product = await Products.findOne({ _id: req.params.id })
            const imagePath = path.join(__dirname, `../../public/img/products/${product.imgPath}`);
            fs.unlink(imagePath, (err) => {
                if (err) {
                    console.error(`Error deleting image file: ${product.imgPath} , ${err}`);
                } else {
                    console.log(`Image file ${product.imgPath} deleted successfully.`);
                }
            });
            
            await Products.findOneAndDelete({ _id: req.params.id })
            return res.status(200).send({ 'status': 'success' })
        }
        catch (e) {
            console.error(e)
            return res.send({ 'status': 'error', 'message': e.message })
        }
    },
    modifyProduct: async (req, res) => {
        try{
            let { name, price, description, barcode } = req.body
            let errorsOfValidation = validationResult(req)
            if (!errorsOfValidation.isEmpty()) {
                throw new Error(errorsOfValidation.errors.shift().msg)
            }
            let product = await Products.findById(req.params.id)
            let imgPath = req.file ? req.file.filename : product.imgPath

            if (req.file){
                const imagePath = path.join(__dirname, `../../public/img/products/${product.imgPath}`);
                fs.unlink(imagePath, (err) => {
                    if (err) {
                        console.error(`Error deleting image file: ${product.imgPath} , ${err}`);
                    } else {
                        console.log(`Image file ${product.imgPath} deleted successfully.`);
                    }
                });
            }

            product.name = name
            product.price = price
            product.description = description
            product.imgPath = imgPath
            await product.save()
            
            return res.status(200).json({ status:'success' })
        }
        catch(e){
            console.error(e)
            return res.json({status: 'error', message: e.message})
        }
    }
}