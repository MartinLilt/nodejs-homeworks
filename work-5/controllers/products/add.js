const productsOperations = require('../../models/products');
const Joi = require('joi');

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0.01).required(),
  location: Joi.string().required(),
});

const add = async (req, res, next) => {
  try {
    const { error } = productSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw error;
    }
    const result = await productsOperations.add(req.body);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = add;
