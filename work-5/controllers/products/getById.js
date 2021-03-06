const productsOperations = require('../../models/products');
const { NotFound } = require('http-errors');

const getById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await productsOperations.getById(id);
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`);
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getById;
