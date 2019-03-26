const Route = require('./route');

/** @class Router
 * An object for routing incoming HTTP requests
 * to the appropriate request handler.
 */
class Router {
    /** @constructor
     * Constructs a new instance of a Router
     * @param {function} notFound - a request handler to invoke
     * if no matching route is found.  It should expect
     * http.IncomingRequest and http.ServerResponse objects as parameters.
     */

    constructor(notFound) {
        this.routes = [];
        this.notFound = notFound;
    }

    /** @method addRoute
     * Adds a new route to the router
     * @param {string} method - the HTTP method, typically
     * "GET" or "POST"
     * @param {string} pattern - a URL pattern, with wildcards
     * denoted as symbols, i.e. :name, where name is the name of the parameter
     * @param {function} handler - the request handler this route triggers,
     * should expect http.IncomingRequest and http.ServerResponse objects as parameters.
     */
    addRoute(method, pattern, handler) {
        // Each method is a top-level key corresponding
        // to a list of routes.  We need to initalize the
        // list if it does not yet exist
        if (!this.routes[method]) this.routes[method] = [];
        // Create the new Route and push it onto the list
        this.routes[method].push(new Route(pattern, handler));
    }

    /** @method route
     * Triggers the corresponding request handler for the provided
     * request, or triggers the notFound callback.
     * @param {http.IncomingRequest} req - the request object
     * @param {http.ServerResponse} res - the response object
     */
    route(req, res) {
        // If no routes using the request method are defined,
        // there cannot be a match.
        if (!this.routes[req.method]) return this.notFound(req, res);

        // Otherwise, see if we can find a matching route
        for (var i = 0; i < this.routes[req.method].length; i++) {
            var route = this.routes[req.method][i];
            var match = route.match(req.url);
            if (match) {
                // Add the matching parameters to the request object
                req.params = match;
                // Invoke the request handler
                return route.handler(req, res);
            }
        }
        // If we reach this point, we did not find a match
        return this.notFound(req, res);
    }
}

// export the Router definition
module.exports = Router;