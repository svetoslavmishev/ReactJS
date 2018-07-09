const express = require('express')
const authCheck = require('../middleware/auth-check')
const stadiumData = require('../data/stadiums')

const router = new express.Router()

function validateStadiumForm(payload) {
    const errors = {}
    let isFormValid = true
    let message = ''

    payload.seats = parseInt(payload.seats)

    if (payload.metroLine) {
        payload.metroLine = parseInt(payload.metroLine)
    }

    if (!payload || typeof payload.name !== 'string' || payload.name < 4) {
        isFormValid = false
        errors.name = 'Stadium name must be more than 4 symbols.'
    }

    if (!payload || typeof payload.image !== 'string' || payload.image === 0) {
        isFormValid = false
        errors.image = 'Image URL is required.'
    }

    if (!payload || typeof payload.description !== 'string' || payload.description < 10) {
        isFormValid = false
        errors.description = 'Description must be more than 10 symbols.'
    }

    if (!payload || !payload.seats || payload.seats < 0) {
        isFormValid = false
        errors.seats = 'Seats must be a positive number.'
    }

    if (payload.metroLine) {
        if (payload.metroLine < 0) {
            isFormValid = false
            errors.metroLine = 'Metro line must be a positive number.'
        }
    }

    if (!isFormValid) {
        message = 'Please check the form for errors.'
    }

    return {
        success: isFormValid,
        message,
        errors
    }
}

router.post('/create', authCheck, (req, res) => {
    const stadium = req.body

    const validationResult = validateStadiumForm(stadium)
    if (!validationResult.success) {
        return res.status(200).json({
            success: false,
            message: validationResult.message,
            errors: validationResult.errors
        })
    }

    stadiumData.save(stadium)

    res.status(200).json({
        success: true,
        message: 'Stadium added successfuly.',
        stadium
    })
})

router.get('/all', (req, res) => {
    const page = parseInt(req.query.page) || 1
    const stadiums = stadiumData.all(page)
    res.status(200).json(stadiums)
})

router.get('/details/:id', authCheck, (req, res) => {
    const id = req.params.id

    const stadium = stadiumData.findById(id)

    if (!stadium) {
        return res.status(200).json({
            success: false,
            message: 'Stadium does not exists!'
        })
    }

    let response = {
        id: stadium.id,
        name: stadium.name,
        location: stadium.location,
        description: stadium.description,
        seats: stadium.seats,
        image: stadium.image,
        metroLine: stadium.metroLine,
        createdOn: stadium.createdOn,
        reviews: stadium.reviews
    }

    if (stadium.metroLine) {
        response.metroLine = stadium.metroLine
    }

    res.status(200).json(response)
})

router.post('/details/:id/reviews/create', authCheck, (req, res) => {
    const id = req.params.id
    const user = req.user.name

    let stadium = stadiumData.findById(id)

    if (!stadium) {
        return res.status(200).json({
            success: false,
            message: 'Stadium does not exists!'
        })
    }

    const comment = req.body.comment
    stadiumData.addReview(id, comment, user)

    res.status(200).json({
        success: true,
        message: 'Review added successfuly.',
        review: {
            id,
            comment,
            user
        }
    })
})

router.get('/details/:id/reviews', authCheck, (req, res) => {
    const id = req.params.id
  
    const stadium = stadiumData.findById(id)
  
    if (!stadium) {
      return res.status(200).json({
        success: false,
        message: 'Stadium does not exists!'
      })
    }
  
    const response = stadiumData.allReviews(id)
  
    res.status(200).json(response)
  })

module.exports = router
