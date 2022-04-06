const fs = require('fs/promises');

const argv = process.argv;

const main = async () => {
  let data = null;
  try {
    data = await fs.readFile('data.json', 'utf8');
  } catch (error) {
    data = '[]';
  }
  const content = JSON.parse(data);
  const command = argv[2];
  const age = argv[3];

  if (command === '--list') {
    console.table(content);
  } else if (!command) {
    console.log('Unknown command');
  } else {
    content.push({ command, age });
    await fs.writeFile('data.json', JSON.stringify(content, null, 4));
  }
};

main();
console.log('Hello!')