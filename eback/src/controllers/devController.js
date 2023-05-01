const { Roles, Users } = require('../models')

module.exports = {
    makeDb: async (req, res) => {
        try {
            await Roles.create({type:'user', label:'Usuario'})
            let adminRole = await Roles.create({type:'admin', label:'Administrador'})
            await Users.create({name:'Administrador', email:'admin@admin.com', password:'Asd123@', role:adminRole._id})
            return res.status(200).send({ 'status': 'success' })
        }
        catch(e){
            console.error(e)
            return res.send({ 'status': 'error', 'message': e.message})
        }
    },
}