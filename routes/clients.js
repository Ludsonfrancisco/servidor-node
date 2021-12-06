const express = require('express')
const router = express.Router()
const clientsControllers = require('../controllers/clients')

router.get('/', clientsControllers.clients)
router.get('/new', clientsControllers.creat)

module.exports = router
