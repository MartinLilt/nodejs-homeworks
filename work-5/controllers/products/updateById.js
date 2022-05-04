const productsOperations = require('../../models/products');
const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0.01).required(),
  location: Joi.string().required(),
});

const updateById = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const { id } = req.params;
    const result = await productsOperations.updateById(id, req.body);
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

module.exports = updateById;
