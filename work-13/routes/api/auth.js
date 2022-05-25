const express = require('express');

const { currAuthReq, validation, ctrlWrapper } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema } = require('../../models/user');

const router = express.Router();

router.post('/register', [
  validation(joiRegisterSchema),
  ctrlWrapper(ctrl.register),
]);

router.post('/login', [ctrlWrapper(ctrl.login)]);
router.get('/logout', [currAuthReq, ctrlWrapper(ctrl.logout)]);

module.exports = router;
