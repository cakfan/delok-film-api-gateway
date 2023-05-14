const express = require('express')
const router = express.Router()
const handler = require('./handler/users')

const verifyToken = require('../middlewares/verify-token')

/* GET users listing. */
router.get('/', handler.listUser)

router.get('/:id', handler.getUser)

router.post('/login', handler.login)

router.post('/register', handler.register)

router.post('/logout', verifyToken, handler.logout)

module.exports = router
