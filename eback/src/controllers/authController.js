const { validationResult } = require('express-validator')
const { Users } = require('../models')

module.exports = {
    login: async(req, res) => {
        try{
            var { email, password } = req.body;
            email = email.toLowerCase()

            const user = await Users.findOne({email})

            if (!user) {
                return res.send({ 'status': 'error', 'message': 'Ese email no esta registrado.' })
            }

            let userLoged = await user.login(password)
            if (!userLoged) {
                return res.send({ 'status': 'error', 'message': 'Contraseña incorrecta.' })
            }

            return res.status(200).send({
                'status': 'success',
                'user': userLoged.user,
                'token': userLoged.token,
            })
        }
        catch(e){
            return res.send({ 'status': 'error', 'message': e.message })
        }
    },

    register: async (req, res) => {
        try {
            let findedUser;
            let user;
            const { name, email, password} = req.body;
            let errorsOfValidation = validationResult(req)
            if (!errorsOfValidation.isEmpty()) {
                throw new Error(errorsOfValidation.errors.shift().msg)
            }

            findedUser = await Users.findOne({ email:email })
            if (findedUser){
                throw new Error('El email ya existe!')
            }
            user = await Users.create({ name, email, password })
            
            return res.status(200).json({ status: 'success', user });
        } catch (e) {
            console.error(e)
            return res.json({ 'status': 'error', 'message': e.message });
        }
    },
};