const http = require('http');
const port = process.argv[2];

function parseTime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixTime(time) {
    return {
        unixtime: time.getTime()
    };
}

const router = {
    '/api/parsetime': (parseUrl) => {
        const time = new Date(parseUrl.searchParams.get('iso'));
        return parseTime(time);
    },
    '/api/unixtime': (parseUrl) => {
        const time = new Date(parseUrl.searchParams.get('iso'));
        return unixTime(time);
    }
};

const server = http.createServer((req, res) => {
    const parseUrl = new URL(req.url, 'http://localhost:' + port);
    const route = router[parseUrl.pathname];

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(route(parseUrl)));
});

server.listen(port, () => console.log('Server listening on http://localhost:' + port));