const { User } = require('../../models');
const gravatar = require('gravatar');

const register = async (req, res) => {
  const { name, email, password } = req.body;
  const user = await User.findOne({ email });
  if (user) {
    return res.status(409).json({
      status: 'error',
      code: 409,
      message: `User with ${email} already exists..`,
    });
  }
  const avatarUrl = gravatar.url(email);
  const newUser = new User({ name, email, avatarUrl });
  newUser.setPassword(password);
  newUser.save();
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        name,
        avatarUrl,
      },
    },
  });
};

module.exports = register;
