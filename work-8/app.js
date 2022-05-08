// 3Oxti67oogYOsbDS
const mongoose = require('mongoose');

const DB_HOST =
  'mongodb+srv://Martin:3Oxti67oogYOsbDS@cluster0.pslh9.mongodb.net/online_shop?retryWrites=true&w=majority';

const express = require('express');
const logger = require('morgan');
const cors = require('cors');

const app = express();
mongoose
  .connect(DB_HOST)
  .then(() => console.log('Database connect'))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
