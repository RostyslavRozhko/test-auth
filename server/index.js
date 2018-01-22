const express = require('express')
const app = express()
const db = require('./db')

const UserController = require('./controllers/user/userController')
const AuthController = require('./controllers/auth/authController')

app.use('/api/auth', AuthController)
app.use('/users', UserController)
app.use('/api/hello', (req, res) => {
  res.send({message: "Hello"})
})

module.exports = app