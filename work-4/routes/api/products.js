const express = require('express');

const productsOperations = require('../../models/products');

const router = express.Router();

router.get('/', async (req, res, next) => {
  try {
    const products = await productsOperations.getAll();
    res.json({
      status: 'success',
      code: 200,
      data: {
        result: products,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Server error',
    });
  }
});

router.get('/:d', async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsOperations.getById(id);
    if (!result) {
      res.status(404).json({
        status: 'error',
        code: 404,
        message: `Froduct with id=${id} not found`,
      });
      return;
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      code: 500,
      message: 'Server error',
    });
  }
});

module.exports = router;
