const http = require('http');

let data = {
    name: 'John Doe',
    age: 30,
    occupation: 'Software Developer'
};

const server = http.createServer((req, res) => {
    if (req.url === '/api/data' && req.method === 'GET') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.end(JSON.stringify(data));
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});

const port = 3000;
server.listen(port, () => {
    console.log(`Server again running at http://localhost:${port}/`);
});
