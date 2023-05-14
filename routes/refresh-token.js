const express = require('express')
const router = express.Router()
const handler = require('./handler/token')

const verifyToken = require('../middlewares/verify-token')

/* GET users listing. */
router.get('/', handler.get)

router.post('/', handler.create)

module.exports = router
