const express = require('express')
const router = express.Router()
const indexControllers = require('../controllers/index')

router.get('/', indexControllers.home)
router.get('/pagina1', indexControllers.pagina1)
router.get('/calc', indexControllers.calc)
router.get('/par/:num', indexControllers.par)




module.exports = router