const getAll = require('./getAll');

const getById = async (id) => {
  const products = await getAll();
  const result = await products.find((item) => item.title === id);
  return result ? result : null;
};

module.exports = getById;
