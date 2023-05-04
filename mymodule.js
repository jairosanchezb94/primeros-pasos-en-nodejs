const fs = require('fs');

module.exports = function (dir, ext, callback) {
    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        } 
        const result = [];
        list.forEach(function (file) {
            file.split('.')[1] === ext ? result.push(file) : null;
            //if (file.endsWith(ext)) {
                //console.log(file);
            //}
        });
        callback(null, result);
    });
}