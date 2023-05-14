const express = require('express')
const router = express.Router()
const handler = require('./handler/media')

const verifyToken = require('../middlewares/verify-token')
const can = require('../middlewares/permissions')

router.get('/', handler.getMedia)

router.post('/', verifyToken, can('admin'), handler.createMedia)

router.delete('/:id', verifyToken, can('admin'), handler.removeMedia)

module.exports = router
