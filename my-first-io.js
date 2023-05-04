const fs = require('fs')

const file = process.argv[2];

const filedoc = fs.readFileSync(file, 'utf8');
const lines = filedoc.split('\n').length -1;

console.log(lines);