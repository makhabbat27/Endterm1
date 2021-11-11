const http = require('http');
const fs = require('fs');

function serveStaticFile(res, path, contentType, resCode) {
    if (!resCode) { resCode =  200; }
    fs.readFile(__dirname + path, function(err, data) {
        if (err) {
            res.writeHead(500, {'Content-Type': 'text/plain'});
            res.end("500 - Internal error with a response code 500");
        }
        else {
            res.writeHead(resCode, {'Content-Type' : contentType});
            res.end(data);
        }
    })
}

http.createServer(function(req, res) {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
    switch(path) {
        case '':
            serveStaticFile(res, '/index.html', 'text/html');
            break;
        case '/about':
            serveStaticFile(res, '/about.html', 'text/html');
            break;
        case '/img/about.jpg':
            serveStaticFile(res, '/img/about.jpg', 'image/jpeg');
            break;
        case '/video/students/memes.mp4':
            serveStaticFile(res, '/video/students/memes.mp4', 'image/jpeg');
            break;
        case '/img/welcome.jpg':
            serveStaticFile(res, '/img/welcome.jpg', 'image/jpeg');
            break;
        case '/img/gallery/study.jpg':
            serveStaticFile(res, '/img/gallery/study.jpg', 'image/jpeg');
            break;
        default:
            serveStaticFile(res, '/error.html', 'text/html', 404);
            break;
        case '/img/cry.jpg':
            serveStaticFile(res, '/img/cry.jpg', 'image/jpeg');
            break;
    }
}).listen(3000);

console.log("Server started on localhost:3000; press Ctrl+C to terminate");