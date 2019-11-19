require('dotenv').config()
const express = require('express')
const cors = require('cors')

// initialisation du server express
const app = express()

// Middleware
app.use(cors()) // gestion du cross domain


// run le server en ecoute sur un port specifique
app.listen(process.env.PORT || 8080, () => {
    console.log('Server started on '+ process.env.PORT)
})

