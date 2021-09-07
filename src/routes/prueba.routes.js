const { Router } = require('express')
const router = Router()
const PruebaCtrl = require('../controllers/prueba.controller')

router.get('/', PruebaCtrl.obtener)

router.post('/', PruebaCtrl.create)

module.exports = router
