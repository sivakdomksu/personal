/**
 * Helper function for serving a 404 error code
 * @param {http.IncomingRequest} req - the request object
 * @param {http.ServerResponse} res - the response object
 */
module.exports = function (req, res) {
    console.warn("404 Not Found", req.method, req.url);
    res.statusCode = 404;
    res.statusMessage = "Not Found";
    res.end();
};