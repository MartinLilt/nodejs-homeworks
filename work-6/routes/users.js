const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  console.log(req.query);
  res.send('Users route');
});
router.get('/throw', (req, res, next) => {
  // const err = new Error('Our DB crashed!');
  // throw err;
  return next(new Error('Our DB crashed!'));
  res.send('User throw');
});
router.get('/:id', (req, res) => {
  console.log(req.params);
  res.send('Users route');
});
router.post('/', (req, res) => {
  console.log(req.body);
  res.send('Post method');
});

module.exports = router;
