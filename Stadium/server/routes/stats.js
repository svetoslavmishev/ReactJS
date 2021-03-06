const express = require('express')
const stadiumsData = require('../data/stadiums')
const usersData = require('../data/users')
const authCheck = require('../middleware/auth-check')

const router = new express.Router()

router.get('/', (req, res) => {
  const stadiums = stadiumsData.total()
  const users = usersData.total()

  res.status(200).json({
    stadiums,
    users
  })
})

router.get('/users', authCheck, (req, res) => {
  const users = usersData.getAll();

  res.status(200).json(users)
})

router.post('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id
  const email = req.body.email

  const users = usersData.findById(id)

  if (!users) {
    return res.status(200).json({
      success: false,
      message: 'User does not exists!'
    })
  }

  usersData.deleteUser(id, email)

  return res.status(200).json({
    success: true,
    message: 'User deleted successfully!',
    records: usersData.getAll()
  })
})

router.get('/user/details/:id', authCheck, (req, res) => {
  const id = req.params.id
  const user = usersData.findById(id)

  res.status(200).json(user)
})

router.post('/user/edit/:id', authCheck, (req, res) => {
  const userFields = req.body
  const user = usersData.findById(req.params.id)
  const email = req.body.email

  usersData.updateUser(userFields, req.params.id, email)

  res.status(200).json({
    success: true,
    message: 'User updated successfuly.',
    user
  })
})

module.exports = router