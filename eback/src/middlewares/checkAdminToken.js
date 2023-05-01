const tk = require("jsonwebtoken");
const { Roles, Users } = require('../models')
module.exports = async (req, res, next) => {
    let token = req.headers["access-token"];
    if (!token) return res.status(401).json({ 'status':'error', error: "Access denied" });
    try {
        let previusUser = tk.verify(token, process.env.JWT_TOKEN_SECRET).user;
        let adminRole = ( await Roles.findOne({ type: "admin" }) )._id;
        let user = await Users.findById(previusUser._id)
        req.user = user
        if(user.role._id.toString() === adminRole.toString()){
            return next();
        }
        return res.status(401).json({ 'status':'error', error: "Access denied" });
    } catch (error) {
        console.error(error)
        return res.status(400).json({ 'status':'error', error: "Token is not valid " });
    }
};