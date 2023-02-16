const router = require("express").Router();
const {registerForm} = require("../controllers/register.controller");

router.get("/", registerForm);

module.exports = router;
