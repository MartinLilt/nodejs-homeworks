const { User } = require('../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const currAuthReq = async (req, res, next) => {
  const { authorization = '' } = req.headers;
  const [bearer, token] = authorization.split(' ');

  try {
    if (bearer !== 'Bearer') {
      return res.status(401).json({
        status: 'unauthorized',
        code: 401,
        message: 'Not authorized..',
      });
    }
    const { id } = jwt.verify(token, SECRET_KEY);
    const user = await User.findById(id);
    if (!user || !user.token) {
      return res.status(401).json({
        status: 'unauthorized',
        code: 401,
        message: 'Not authorized..',
      });
    }
    req.user = user;
    next();
  } catch (err) {
    if (err.message === 'Invalid sugnature') {
      err.status = 401;
    }
    next(err);
  }
};

module.exports = currAuthReq;
