const router = require("express").Router()
const userController = require("../controller/userController")

router.post('/user', userController.userAdd)

module.exports = router
