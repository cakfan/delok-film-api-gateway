require('dotenv').config()
const express = require('express')
const path = require('path')
const cookieParser = require('cookie-parser')
const logger = require('morgan')

const indexRouter = require('./routes/index')
const usersRouter = require('./routes/users')
const mediaRouter = require('./routes/media')
const postRouter = require('./routes/post')
const peopleRouter = require('./routes/people')
const tokenRouter = require('./routes/refresh-token')

const app = express()

app.use(logger('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/media', mediaRouter)
app.use('/post', postRouter)
app.use('/people', peopleRouter)
app.use('/token', tokenRouter)

module.exports = app
