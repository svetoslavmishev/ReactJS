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

router.get('/all', authCheck, (req, res) => {
  const users = usersData.findAll();

  res.status(200).json({
    users
  })
})




module.exports = router