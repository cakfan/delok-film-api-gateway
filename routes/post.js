const express = require('express')
const router = express.Router()
const handler = require('./handler/post')

const verifyToken = require('../middlewares/verify-token')
const can = require('../middlewares/permissions')

/* Drama API */
router.get('/drama', handler.drama.get)
router.post('/drama', verifyToken, can('admin'), handler.drama.create)
router.put('/drama/:slug', verifyToken, can('admin'), handler.drama.update)
router.delete('/drama/:slug', verifyToken, can('admin'), handler.drama.destroy)

/* Movie API */
router.get('/movie', handler.movie.get)
router.post('/movie', verifyToken, can('admin'), handler.movie.create)
router.put('/movie/:slug', verifyToken, can('admin'), handler.movie.update)
router.delete('/movie/:slug', verifyToken, can('admin'), handler.movie.destroy)

/* Category API */
router.get('/category', handler.category.get)
router.post('/category', verifyToken, can('admin'), handler.category.create)
router.put('/category/:slug', verifyToken, can('admin'), handler.category.update)
router.delete('/category/:slug', verifyToken, can('admin'), handler.category.destroy)

/* Cast API */
router.get('/cast', handler.cast.get)
router.post('/cast', verifyToken, can('admin'), handler.cast.create)
router.put('/cast/:slug', verifyToken, can('admin'), handler.cast.update)
router.delete('/cast/:slug', verifyToken, can('admin'), handler.cast.destroy)

module.exports = router
