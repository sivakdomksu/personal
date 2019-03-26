const fs = require('fs');
const serve404 = require('./serve-404');

/**
 * Serves the specified image as an HTTP response.
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
module.exports = function (req, res) {
    fs.readFile('./public/images/' + req.params.filename, function (err, data) {
        if (err) return serve404(req, res);

        res.setHeader("Content-Type", "image/jpeg");
        res.end(data);
    });
};