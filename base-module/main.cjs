const os = require('os');
const path = require('path');
// console.log(os.cpus().length);

// console.log(path.resolve('/foo/bar', './baz'));
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));

// path.resolve('/foo/bar', './baz');
// path.resolve('/foo/bar', '/tmp/file/');
// path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif');

console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
console.log(path.join(__dirname, 'foo', 'bar'));
console.log(__dirname);
console.log(__filename);
console.log(process.cwd());

// path.join('/foo', 'bar', 'baz/asdf', 'quux', '..');
// // Returns: '/foo/bar/baz/asdf'

// path.join('foo', {}, 'bar');
// // Throws 'TypeError: Path must be a string. Received {}'
