const { Product } = require('../../models/product');

const updateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  const result = await Product.findByIdAndUpdate(id, { status }, { new: true });
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

module.exports = updateStatus;
