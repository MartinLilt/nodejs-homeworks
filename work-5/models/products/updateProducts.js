const fs = require('fs/promises');
const filePath = require('./filePath');

const updateProduct = async (products) => {
  await fs.writeFile(filePath, JSON.stringify(products));
};

module.exports = updateProduct;
