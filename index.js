const app = require('./server/server');

let appPort=app.listen(process.env.PORT || 8000, () => {
  console.log('Listening on port '+appPort.address().port);

});
