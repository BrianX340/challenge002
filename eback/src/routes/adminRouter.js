const router = require("express").Router();
let uploadImage = require('../middlewares/uploadImage')
const checkAdminToken = require("../middlewares/checkAdminToken");
const { createProduct, deleteProduct, modifyProduct } = require("../controllers/adminController");
const productValidator = require('../validations/productValidator')

router.post("/products/create", uploadImage.single("image"), productValidator, checkAdminToken, createProduct);
router.delete('/products/delete/:id', checkAdminToken, deleteProduct);
router.put('/products/modify/:id', uploadImage.single("image"), checkAdminToken, modifyProduct);

module.exports = router;