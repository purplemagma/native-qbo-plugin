var connect = require('connect'),
    fs = require('fs'),
    https = require('https');

var tlsOptions = {
    key:    fs.readFileSync('ssl/server.key'),
    cert:   fs.readFileSync('ssl/server.crt')
};

var app = connect()
    .use(connect.logger('dev'))
    .use(function(req, res, next) {
        res.setHeader('Access-Control-Allow-Methods', "GET, OPTIONS, POST, PUT, DELETE");
        res.setHeader('Access-Control-Allow-Headers', "x-requested-with, content-type, accept, origin, cookie");
        res.setHeader('Access-Control-Allow-Origin', req.headers["origin"]);
        res.setHeader('Access-Control-Allow-Credentials', "true");
        res.setHeader('Access-Control-Max-Age', "1728000");

        if (req.method === 'OPTIONS') {
            res.writeHead(200);
            res.end();
        } else {
            next();
        }
    })
    .use(connect.static(__dirname+'/plugin'));

console.log("Starting web server listening on port 8443");
https.createServer(tlsOptions, app).listen(8443);
console.log("Waiting for connections");
