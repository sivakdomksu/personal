/**
 * Groups commonly used components to be easily reused without code duplication
 */
module.exports = {
    /**
     * Serves the <head> part of the HTML code
     * @param title The title to be displayed
     * @returns {string} The HTML code to be placed within <head>
     */
    serveHead: function (title) {
        return `
            <title>${title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" charset="UTF-8">
            <link href="/css/personal.css" type="text/css" rel="stylesheet">
        `
    },
    /**
     * Serves the <nav> part of the HTML code
     * @returns {string} The HTML code to be placed within <nav>
     */
    serveNavbar: function () {
        return `
            <span class="rock-salt text-banner"><a href="/">DS</a></span>
            <div class="nav-links">
                <a href="/about">About Me</a>
                <a href="/portfolio">My Portfolio</a>
                <a href="/resume">My Resume</a>
            </div>
        `
    },
    /**
     * Serves the <footer> part of the HTML code
     * @returns {string} The HTML code to be placed within <footer>
     */
    serveFooter: function () {
        return `
            Send me an <span><a href="mailto:domsivak@gmail.com">email</a></span> or find me on <a href="https://www.facebook.com/bubakovsky"><img src="/images/fb.png" alt="Facebook"/>acebook</a>
        `
    },
    /**
     * Serves the complete HTML page that's used as a template
     * @param title Title of the page
     * @param body Portion of code to be placed within the <body> part
     * @param head Additional portion of code to be placed within the <head> part
     * @param script Additional portion of code to be placed within the <script> part
     * @returns {string} The HTML page to be displayed
     */
    serveHTML: function (title, body, head, script) {
        return `
              <!doctype html>
              <html>
                <head>
                    ${this.serveHead(title)}
                    ${head ? head : ""}
                </head>
                <body>
                    <nav>
                        ${this.serveNavbar()}
                    </nav>
                    <main>
                        ${body}
                    </main>
                    <footer>
                        ${this.serveFooter()}
                    </footer>
                    ${script ? script : ""}
                </body>
              </html>
            `
    }
};