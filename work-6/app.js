const express = require('express');
const fs = require('fs').promises;
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // row json

app.use((req, res, next) => {
  const start = performance.now();
  //   if (req.body.name === 'Alex') {
  //     return res.json({ message: 'Hello Alex' });
  //   }
  next();
  console.log(
    `${req.method} ${req.originalUrl}): ${performance.now() - start}`
  );
});

// app.use(express.urlencoded({ extended: true })); // forms

app.use('/', require('./routes/main'));
app.use('/users', require('./routes/users'));
app.use('/weather', require('./routes/weather'));

app.use((req, res) => {
  res.status(404).json({ message: 'Not Found..' });
});

app.use(async (err, req, res, next) => {
  await fs.appendFile(
    'error.log',
    `${req.method} ${req.originalUrl}: ${err.message}\n`
  );
  res.status(500).json({ message: err.message });
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
