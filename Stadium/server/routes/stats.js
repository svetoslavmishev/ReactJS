const express = require('express')
const stadiumsData = require('../data/stadiums')
const usersData = require('../data/users')

const router = new express.Router()

router.get('/', (req, res) => {
  const stadiums = stadiumsData.total()
  const users = usersData.total()

  res.status(200).json({
    stadiums,
    users
  })
})

module.exports = router