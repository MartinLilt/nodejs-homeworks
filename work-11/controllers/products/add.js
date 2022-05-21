const { Product } = require('../../models/product');

const add = async (req, res) => {
  const { _id } = req.user;
  const result = await Product.create({ ...req.body, owner: _id });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: { result },
  });
};

module.exports = add;
