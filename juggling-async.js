const http = require('http');

const url1 = process.argv.slice(2);

const httpRequests = (url) => {
    return new Promise((resolve, reject) => {
        http.get(url, function (response) {
            let data = '';
            response.setEncoding('utf8');
            response.on('data', function (chunk) {
                data += chunk;
            });
            response.on('end', () => resolve(data));
            response.on('error', (err) => reject(err));
        });
    });
}

Promise.allSettled(url1.map((url) => httpRequests(url))).then((data) => 
data.forEach((data) => console.log(data.value))).catch((err) => console.log(err));
    