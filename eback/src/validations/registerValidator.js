const { body } = require('express-validator')

module.exports = [

    body('name')
    .custom((value) => {
        let regexName = new RegExp(/^[a-zA-Z ]{2,}$/)
        return regexName.test(value)
    })
    .withMessage("Debe proveer un nombre valido"),
    
    body('email')
    .custom(value => {
        let regExEmail = new RegExp(/^(([^<>()\[\]\\.,:\s@"]+(\.[^<>()\[\]\\.,:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
        if (regExEmail.test(value)) {
            return true
        } else {
            return Promise.reject('Debe proveer un email valido')
        }
    }),

    body('password')
    .custom((value) => {
        let regexPassword = new RegExp(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/);
        return regexPassword.test(value)
    })
    .withMessage("Debe proveer una contraseña valida.")

]