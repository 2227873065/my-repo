const http = require('http');

const PORT = process.env.PORT || 3000;

const users = [
    { id: 1, name: '张三', role: '管理员' },
    { id: 2, name: '李四', role: '开发者' },
    { id: 3, name: '王五', role: '测试员' }
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');

    if (req.url === '/health') {
        res.end(JSON.stringify({ status: 'ok', version: 'v2' }));
    } else if (req.url === '/api/version') {
        res.end(JSON.stringify({
            version: 'v2',
            message: '新版本运行中',
            timestamp: new Date().toISOString()
        }));
    } else if (req.url === '/api/info') {
        res.end(JSON.stringify({
            name: 'my-repo',
            version: 'v2',
            branch: 'v2',
            features: ['用户管理', '版本回滚']
        }));
    } else if (req.url === '/api/users') {
        // v2 新增接口
        res.end(JSON.stringify({ users, count: users.length }));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ error: 'Not Found', path: req.url }));
    }
});

server.listen(PORT, () => {
    console.log(`Server v2 running on port ${PORT}`);
});
