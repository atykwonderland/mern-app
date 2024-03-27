const { Signup, Login } = require("../../controllers/auth_controller");
const { userVerification } = require("../../middlewares/auth_middleware")
const router = require("express").Router();

router.post('/signup', Signup)
router.post('/login', Login)
router.post('/', userVerification)

module.exports = router