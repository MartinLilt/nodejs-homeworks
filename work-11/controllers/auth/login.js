const { User } = require('../../models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !user.comparePassword(password)) {
    return res.status(401).json({
      status: 'unauthorized',
      code: 401,
      message: 'Password wrong or incorrect',
    });
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    status: 'success',
    code: 200,
    data: {
      token,
    },
  });
};

module.exports = login;
