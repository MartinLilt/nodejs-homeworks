const productsOperations = require('../../models/products');
const { NotFound } = require('http-errors');

const removeById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsOperations.removeById(id, req.body);
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Product deleted successfully',
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = removeById;
