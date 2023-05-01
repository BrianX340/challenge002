const router = require("express").Router();
const { getProducts, getProduct } = require("../controllers/apiController");

router.get('/products/get', getProducts);
router.get('/products/get/:id', getProduct);

module.exports = router;