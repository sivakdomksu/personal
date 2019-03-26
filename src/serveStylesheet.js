const fs = require('fs');

/**
 * Serves the specified css file as an HTTP response.
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
module.exports = function (req, res) {
    fs.readFile('./public/css/' + req.params.filename, function (err, data) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.statusMessage = "Server Error";
            res.end();
            return;
        }
        res.setHeader("Content-Type", "text/css");
        res.end(data);
    });
};