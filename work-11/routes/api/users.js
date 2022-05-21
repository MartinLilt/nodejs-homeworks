const express = require('express');

const { currAuthReq, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/current', [currAuthReq, ctrlWrapper(ctrl.getCurrent)]);

module.exports = router;
