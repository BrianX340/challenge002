const router = require("express").Router();
const { login, register } = require("../controllers/authController");
const registerValidator = require('../validations/registerValidator')

router.post("/login", login);
router.post("/register", registerValidator, register);

module.exports = router;