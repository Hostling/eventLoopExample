const zlib = require('zlib');
const fs = require('fs');

const gzip = zlib.createGzip();

const input = fs.createReadStream('test.txt');
const out = fs.createWriteStream('input.txt.gz');

input.pipe(gzip).pipe(out);
