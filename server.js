const http = require('http');

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.end(JSON.stringify({ status: 'ok', version: 'v1' }));
    } else if (req.url === '/api/version') {
        res.end(JSON.stringify({
            version: 'v1',
            message: '旧版本运行中',
            timestamp: new Date().toISOString()
        }));
    } else if (req.url === '/api/info') {
        res.end(JSON.stringify({
            name: 'my-repo',
            version: 'v1',
            branch: 'main'
        }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found', path: req.url }));
    }
});

server.listen(PORT, () => {
    console.log(`Server v1 running on port ${PORT}`);
});
