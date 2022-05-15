const { Schema, model } = require('mongoose');
const Joi = require('joi');

const codeRegex = /^[0-9]{9}$/;

const productSchema = Schema(
  {
    name: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    price: {
      type: Number,
      required: [true, 'price must be exist'],
      min: 0.01,
    },
    location: {
      type: String,
      required: true,
      minLength: 2,
      maxLength: 50,
    },
    active: {
      type: Boolean,
      default: true,
    },
    status: {
      type: String,
      enum: ['basic', 'sale', 'stock'],
      default: 'basic',
    },
    code: {
      type: String,
      required: true,
      unique: true,
      match: codeRegex,
    },
  },
  { version: false, timestamps: true }
);

const joiSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().min(0.01).required(),
  location: Joi.string(),
  active: Joi.bool(),
  status: Joi.string().valid('basic', 'sale', 'stock'),
  code: Joi.string().pattern(codeRegex),
});

const statusJoiSchema = Joi.object({
  status: Joi.string().valid('basic', 'sale', 'stock').required(),
});

const Product = model('product', productSchema);

module.exports = {
  Product,
  joiSchema,
  statusJoiSchema,
};
