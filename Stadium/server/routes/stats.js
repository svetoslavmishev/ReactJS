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

router.delete('/delete/:id', authCheck, (req, res) => {
  const id = req.params.id

  const users = usersData.findById(id)

  if (!users) {
    return res.status(200).json({
      success: false,
      message: 'User does not exists!'
    })
  }

  usersData.deleteUserById(id)

  return res.status(200).json({
    success: true,
    message: 'User deleted successfully!'
  })
})

module.exports = router