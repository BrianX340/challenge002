const { Products } = require('../models')

module.exports = {
    getProducts: async (req, res) => {
        try {
            let products = await Products.find({})
            return res.status(200).send({ 'status': 'success', products: [...products] })
        }
        catch (e) {
            console.error(e)
            return res.send({ 'status': 'error', 'message': e.message })
        }
    },
    getProduct: async (req, res) => {
        try {
            let product = await Products.findById(req.params.id)
            return res.status(200).send({ 'status': 'success', product })
        }
        catch (e) {
            console.error(e)
            return res.send({ 'status': 'error', 'message': e.message })
        }
    }
}