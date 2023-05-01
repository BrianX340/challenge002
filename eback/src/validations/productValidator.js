const { body } = require('express-validator')

module.exports = [

    body('name')
    .custom((value) => {
        let regexName = new RegExp(/^[a-zA-Z ]{2,}$/)
        return regexName.test(value)
    })
    .withMessage("Debe proveer un nombre valido"),

    body('description')
    .notEmpty()
    .withMessage("Debe proveer una descripción."),
    
    body('price')
    .notEmpty()
    .withMessage('Debe proveer un precio.')
    .custom(value => {
        return !isNaN(Number(value.replace(',', '.')))
    })
    .withMessage("Este campo solo admite números."),

    body('barcode')
    .notEmpty()
    .withMessage("Debe proveer una id o codigo de barras."),

]