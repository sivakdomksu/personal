/** @class Route
 * An object representing a route in a web app
 */
class Route {
    /** @constructor
     * Constructs a new Route object from the supplied pattern and handler.
     * @param {string} pattern - a url pattern with wildcards indicated by
     * :name where [name] is the name of the parameter.
     * @param {function} handler - a request handler that takes two
     * parameters: http.IncomingRequest and http.ServerResponse objects
     */
    constructor(pattern, handler) {
        const patternParts = pattern.split('/');

        // Save the handler as an instance variable
        this.handler = handler;

        // The keys list is also an instance variable
        this.keys = [];

        // Convert the array of part strings to regular expression parts
        var expString = patternParts.map((part) => {

            // check for symbol
            if (part.charAt(0) == ':') {
                // save the key in the order it was found
                this.keys.push(part.slice(1));

                // return a capture group
                return '([^/]+)';

            } else {

                // return the string
                return part;

            }
        });

        // Save the completed RegExp as an instance variable
        this.regexp = new RegExp(`^${expString.join('/')}$`);
    }

    /** @method match
     * Tests for a match between this route and the provided url
     * @param {string} url - the URL to evaluate
     * @returns {object|null} an object containing the params identified
     * from the URL if there was a match, or null if there was no match.
     */
    match(url) {
        // Execute the regular expression against the string
        const match = this.regexp.exec(url);

        // If the result is null, the pattern and url do not match
        if (!match) return null;

        // If they match, store the capture groups as key/value pairs
        var params = {};
        this.keys.forEach((key, i) => {
            // The result of a RegExp.prototype.exec is an array,
            // with the full match at position 0, the first capture
            // group at position 1, and successive capture groups after it
            params[key] = match[i + 1];
        });

        // Return the params object
        return params;
    }
}

// export the Route definition
module.exports = Route;