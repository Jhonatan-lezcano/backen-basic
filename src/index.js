const app = require('./app')
require('./database')
//start server
app.listen(4000, function () {
  console.log('App listening on port 4000')
})
