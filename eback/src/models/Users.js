const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Roles = require('./Roles');

const Users = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: true,
        required: true,
    },
    password: String,
    role: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Roles"
    }
}, {
    timestamps: true
})

function autoPopulateUser(next){
    this.populate('role');
    next();
};

Users.pre('find', autoPopulateUser)
Users.pre('findById', autoPopulateUser)
Users.pre('findOne', autoPopulateUser)

Users.pre('save', async function (next) {
    try{
        let user = this;
        if (!user.isModified("password")) {
            return next();
        }
        const salt = await bcrypt.genSalt(10);
        let encryptedPass =  await bcrypt.hash(user.password, salt);
        let role = (await Roles.findOne({type: 'user'}))._id;

        user.email = user.email.toLowerCase();
        user.password = encryptedPass;
        user.role = user.role ? user.role : role;
        next();
    }
    catch(e){
        console.error(e);
        return e;
    }
})

Users.methods.login = async function(candidatePassword) {
    try{
        let user = this;
        let isValid = await bcrypt.compare(candidatePassword, user.password)
        if(!isValid){
            return false;
        }
        user = {
            _id: user._id,
            name: user.name,
            email: user.email,
            role: {
                type: user.role.type,
                label: user.role.label
            }
        }
        const token = jwt.sign({
            id: user._id,
            user,
        },process.env.JWT_TOKEN_SECRET)
        return { user, token }
    }
    catch(e){
        console.error(e)
        return false
    }
};

module.exports = mongoose.model('Users', Users)