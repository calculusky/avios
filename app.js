
const express = require('express');
const multer = require('multer');
const { multerConfig } = require('./utils/helper');
// const { fileFilter, fileStorage } = multerConfig(multer);
const cors = require('cors')
const app = express();

//import product routes
const productRoutes = require('./routes/product');

//register middlewares
app.use(express.json());
app.use(cors());

// app.use(multer({
//     storage: fileStorage,
//     fileFilter: fileFilter
// }).array('images'))


//serve static files
// app.use('/images', express.static(path.join(__dirname, 'images')));


//routes
app.use('/api/management', productRoutes);

//error routes
app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.status || 500;
    res.status(status).json({ message, status });
})


module.exports = app;







/*
DB_NAME=sql5401427
DB_USER=sql5401427
DB_PASSWORD=5wWeSlpxhu
DB_HOST=sql5.freemysqlhosting.net 

DB_NAME=avios
DB_USER=avios
DB_PASSWORD=avios
DB_HOST=localhost


*/






