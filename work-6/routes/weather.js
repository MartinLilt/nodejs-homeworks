const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query);
  res.send('Users route');
});

module.exports = router;
