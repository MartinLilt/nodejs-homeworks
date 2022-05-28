const mongoose = require('mongoose');
const app = require('../app');
require('dotenv').config();

const { URL_DB, PORT = 3000 } = process.env;

mongoose
  .connect(URL_DB)
  .then(() => app.listen(PORT, () => console.log(`Server running..`)))
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });
