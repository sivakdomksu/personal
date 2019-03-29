const fs = require('fs');

/**
 * Serves the specified etc file as an HTTP response.
 * @param {http.IncomingMessage} req - the HTTP request object
 * @param {http.ServerResponse} res - the HTTP response object
 */
module.exports = function (req, res) {
    fs.readFile('./public/etc/' + req.params.filename, function (err, data) {
        if (err) {
            console.error(err);
            res.statusCode = 500;
            res.statusMessage = "Server Error";
            res.end();
            return;
        }
        res.end(data);
    });
};