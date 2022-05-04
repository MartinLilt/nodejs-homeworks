const getAll = require('./getAll');

const getById = async (id) => {
  const products = await getAll();
  const result = await products.find((item) => item.id === id);
  if (!result) {
    return null;
  }
  return result;
};

module.exports = getById;
