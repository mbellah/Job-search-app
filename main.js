'use strict';
const db = require('./server/db/models')
const app = require('./server')
const PORT = 3000;

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
  .then(() => {
    console.log('db synced');
    app.listen(PORT, () => console.log(`We are listening here on ${PORT}!`))
  })
  .catch(console.error.bind(console));
