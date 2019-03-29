const commons = require("./commons");

/**
 * Serves the About page
 * @param req Request
 * @param res Response
 */
module.exports = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(commons.serveHTML("Dominik Sivak &centerdot; Resume", `
        <section id="resume-container">
            <embed id="resume" src="/etc/CV-Europass-20181107-Sivak-EN.pdf" width="10" height="10" type="application/pdf">
        </section>
    `, `
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
        <script src="/js/resume.js"></script>
    `, null));
};