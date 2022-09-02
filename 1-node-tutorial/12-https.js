
const http = require('http');

const server = http.createServer((req, res) => {
   /*  console.log(req) */
    if(req.url === '/') {
        res.end('Welcome to our home page')
    }

    if(req.url === '/about') {
        res.end('Here is our history')
    }

    res.end(`
    <h1>Ups!</h1>
    <p>We cant find page you are looking for</p>
    <a href="/">back home</a>`)
   
});

server.listen(5000);