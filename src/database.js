const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/bdPrueba', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(db => console.log('DB is connect'))
  .catch(error => console.log(error))

  module.exports = mongoose