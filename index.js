require('dotenv').config();
const app = require('./app');
const http = require('http');
const sequelize = require('./utils/database');
require('./models/product'); //Imp


const server = http.createServer(app);
const port = process.env.PORT || '8080';

sequelize
  .sync()
  .then(conn => {
      server.listen(port);
      console.log(`connected at port ${port}`);
  })
  .catch(err => {
      console.log(`conection failed!!!`, err);
  })