const { Schema, model } = require('mongoose')

const pruebaSchema = new Schema(
  {
    name: String,
    category: String,
    price: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
)

module.exports = model('Prueba', pruebaSchema)