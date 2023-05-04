const fs = require('fs')

const file = process.argv[2];
let lines;

fs.readFile(file, "utf8",  function (err, filedoc) {
    if (err) {
        return console.log(err);
    }
    lines = filedoc.split('\n').length -1; 
    console.log(lines);
});

