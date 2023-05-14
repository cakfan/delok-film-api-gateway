const express = require('express')
const router = express.Router()
const handler = require('./handler/people')

const verifyToken = require('../middlewares/verify-token')
const can = require('../middlewares/permissions')

/* People API */
router.get('/', handler.get)
router.post('/', verifyToken, can('admin'), handler.create)
router.put('//:slug', verifyToken, can('admin'), handler.update)
router.delete('//:slug', verifyToken, can('admin'), handler.destroy)

module.exports = router
