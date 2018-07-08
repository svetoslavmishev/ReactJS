const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const localSignupStrategy = require('./passport/local-signup')
const localLoginStrategy = require('./passport/local-login')
const authRoutes = require('./routes/auth')
const StadiumsRoutes = require('./routes/stadiums')

const app = express()

const port = 8080

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(cors())

passport.use('local-signup', localSignupStrategy)
passport.use('local-login', localLoginStrategy)

// routes
app.use('/auth', authRoutes)
app.use('/stadium', StadiumsRoutes)

app.listen(port, () => {
  console.log(`Server running on port ${port}...`)
})
