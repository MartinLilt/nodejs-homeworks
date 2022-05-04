const express = require('express');
const { NotFound } = require('http-errors');

const { products: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/', ctrl.getAll);

router.get('/:id', ctrl.getById);

router.post('/', ctrl.add);

router.put('/:id', ctrl.updateById);

router.delete('/:id', ctrl.removeById);

module.exports = router;
