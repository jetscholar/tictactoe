if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const expressLayouts = require('express-ejs-layouts')
const ejs = require('ejs')
const favicon = require('express-favicon')

const app = express()

// View Engine and Favicon
app.use(expressLayouts)
app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(express.static('public'))
app.use(favicon('public/assets/favicon_io/favicon.ico'))

// Body Parsing done in express
app.use(express.urlencoded({ extended: false }))


// ROUTES
app.use('/', require('./routes/index'))


// Run the Server
const PORT = process.env.PORT || 4269

app.listen(process.env.PORT || PORT, () => {
    console.log(`Server up on http://localhost:${PORT}`)
})