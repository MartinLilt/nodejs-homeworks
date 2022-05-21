const { User } = require('../../models');

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
  const newUser = new User({ name, email });
  newUser.setPassword(password);
  newUser.save();
  // const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  // const result = await User.create({ name, email, password: hashPassword });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        name,
      },
    },
  });
};

module.exports = register;
