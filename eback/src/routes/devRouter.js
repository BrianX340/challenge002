const router = require("express").Router();
const { makeDb } = require("../controllers/devController");

router.post('/makeDb', makeDb);

module.exports = router;