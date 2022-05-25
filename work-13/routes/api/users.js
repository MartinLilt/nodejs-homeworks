const express = require('express');

const { upload, currAuthReq, ctrlWrapper } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');

const router = express.Router();

router.get('/current', [currAuthReq, ctrlWrapper(ctrl.getCurrent)]);
router.patch('/avatars', [
  currAuthReq,
  upload.single('avatar'),
  ctrlWrapper(ctrl.updateAvatar),
]);

module.exports = router;
