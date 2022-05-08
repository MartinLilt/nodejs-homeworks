// 3Oxti67oogYOsbDS
const mongoose = require('mongoose');
require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const productsRouter = require('./routes/api/products');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());
app.use('/api/products', productsRouter);

const { DB_HOST, PORT = 3000 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => app.listen(PORT, () => console.log('Server running..')))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
