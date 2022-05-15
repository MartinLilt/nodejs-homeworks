const Joi = require('joi');
Joi.objectId = require('joi-objectId')(Joi);

const schemaCreateContact = Joi.object({
  name: Joi.string().min(3).max(30).messages({
    'any.required': 'Thats important!',
    'string.empty': 'Please send your name!',
  }),
  email: Joi.string().min(3).max(30),
  phone: Joi.string().min(14).max(14),
});

const schemaMongoId = Joi.object({
  contactId: Joi.objectId().required(),
});

module.exports = { schemaCreateContact, schemaMongoId };
