const fs = require('fs');

/**
 * Serves JS files
 * @param req Request
 * @param res Response
 */
module.exports = function (req, res) {
    fs.readFile('./public/js/' + req.params.filename, function (err, data) {
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