const log = (msg) => {
  console.log(`Log commonJS: ${msg}`);
};

const info = (msg) => {
  console.log(`Info: ${msg} - ${abc}`);
};

module.exports = { log, info };
