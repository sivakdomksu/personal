const http = require('http');
const serveIndex = require('./src/serveIndex');
const serveStylesheet = require('./src/serveStylesheet');
const serveImage = require('./src/serveImage');
const serve404 = require('./src/serve-404');
const serveJS = require('./src/serveJS');
const serveAbout = require('./src/serveAbout');
const servePortfolio = require('./src/servePortfolio');
const serveResume = require('./src/serveResume');
const Router = require('./lib/router');

const port = 2000;
const router = new Router(serve404);

router.addRoute('GET', '/', serveIndex);
router.addRoute('GET', '/index.html', serveIndex);
router.addRoute('GET', '/css/:filename', serveStylesheet);
router.addRoute('GET', '/js/:filename', serveJS);
router.addRoute('GET', '/images/:filename', serveImage);
router.addRoute('GET', '/about', serveAbout);
router.addRoute('GET', '/portfolio', servePortfolio);
router.addRoute('GET', '/resume', serveResume);

/* Create a new HTTP server */
var server = http.createServer((req, res) => router.route(req, res));

/* Listen for incoming HTTP requests */
server.listen(port, function () {
    console.log("Listening on port " + port);
});