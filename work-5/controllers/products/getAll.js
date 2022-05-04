const productsOperations = require('../../models/products');

const getAll = async (req, res, next) => {
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
    next(error);
  }
};

module.exports = getAll;
