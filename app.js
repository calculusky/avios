
const express = require('express');
const multer = require('multer');
const { multerConfig } = require('./utils/helper');
const cors = require('cors')
const app = express();

//import product routes
const productRoutes = require('./routes/product');

//register middlewares
app.use(express.json());
app.use(cors());


//routes
app.use('/api/management', productRoutes);

//send errors
app.use((error, req, res, next) => {
    const message = error.message;
    const status = error.status || 500;
    res.status(status).json({ message, status });
})


module.exports = app;








