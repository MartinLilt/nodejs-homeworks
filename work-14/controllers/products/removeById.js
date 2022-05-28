const { Product } = require('../../models/product');

const removeById = async (req, res) => {
  const { id } = req.params;
  const result = await Product.findByIdAndRemove(id);
  if (!result) {
    throw new Error(`Product with id=${id} not found`);
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Product deleted successfully',
    data: {
      result,
    },
  });
};

module.exports = removeById;
