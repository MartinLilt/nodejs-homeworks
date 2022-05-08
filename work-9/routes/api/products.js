const express = require('express');

const { validation, ctrlWrapper } = require('../../middlewares');
const { products: ctrl } = require('../../controllers');
const { joiSchema } = require('../../models/product');
const router = express.Router();

router.get('/', ctrlWrapper(ctrl.getAll));
router.post('/', validation(joiSchema), ctrlWrapper(ctrl.add));

module.exports = router;
