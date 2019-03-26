const commons = require('./commons');

/** @function serveIndex
 * Serves an index page
 */
module.exports = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(commons.serveHTML("Dominik Sivak", `
        <section class="index-text">
            <span>The guy in the picture is me not in my natural habitat.</span>
            <span>I usually <a href="/portfolio">code</a>.</span>
        </section>
    `, `<link href="/css/index.css" type="text/css" rel="stylesheet">`, null));
};