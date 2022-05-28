const express = require('express');

const { currAuthReq, validation, ctrlWrapper } = require('../../middlewares');
const { products: ctrl } = require('../../controllers');
const { joiSchema, statusJoiSchema } = require('../../models/product');
const router = express.Router();

router.get('/', [currAuthReq, ctrlWrapper(ctrl.getAll)]);
router.get('/:id', [ctrlWrapper(ctrl.getById)]);
router.post('/', [currAuthReq, validation(joiSchema), ctrlWrapper(ctrl.add)]);
router.put('/:id', [validation(joiSchema), ctrlWrapper(ctrl.updateById)]);
router.patch('/:id/status', [
  validation(statusJoiSchema),
  ctrlWrapper(ctrl.updateStatus),
]);
router.delete('/:id', ctrlWrapper(ctrl.removeById));

module.exports = router;
