const PruebaCtrl = {}
const Prueba = require('../models/prueba')

PruebaCtrl.obtener =  (req, res) => {
  res.send('Working')
}

PruebaCtrl.create = async (req, res) => {
  const {name, category, price} = req.body
  const newPrueba = new Prueba({name, category, price})
  const pruebaSave = await newPrueba.save()

  res.status(201).json({message: 'prueba saved', pruebaSave})
}

module.exports = PruebaCtrl