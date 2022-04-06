const fs = require('fs');

console.log('Start');

setTimeout(() => {
  console.log('setTimeout happened');
}, 0);

setImmediate(() => {
  console.log('setImmediate happened');
});

new Promise((resolve) => {
  resolve('Promise happened');
  process.nextTick(() => {
    console.log('Process.nextTick in Promise');
  });
}).then(console.log);

queueMicrotask(() => {
  console.log('QueueMicrotask happened');
});

fs.readFile(__filename, () => {
  setTimeout(() => {
    console.log('setTimeout inner cb');
  }, 0);

  setImmediate(() => {
    console.log('setImmediate inner cb');
  });
});

console.log('End');
