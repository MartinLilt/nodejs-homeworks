const fs = require('fs/promises');

// fs.readFile('files/file.txt', 'utf-8')
//   .then((data) => {
//     // const text = data.toString('utf-8');
//     console.log(data);
//   })
//   .catch((err) => console.error(err));

const fileOperation = async (filePath, action = 'read', data = '') => {
  switch (action) {
    case 'read':
      const text = await fs.readFile(filePath, 'utf-8');
      console.log(text);
      break;
    case 'add':
      await fs.appendFile(filePath, data);
      break;
    case 'replace':
      await fs.writeFile(filePath, data);
      break;
    default:
      console.log('Unknown command');
  }
};

// fileOperation('files/file.txt');
// fileOperation('files/file.txt', 'add', '\nJust to do this!');
fileOperation('files/file.txt', 'replace', 'Just to do this!');
