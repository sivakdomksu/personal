const commons = require("./commons");

/**
 * Serves the About page
 * @param req Request
 * @param res Response
 */
module.exports = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(commons.serveHTML("Dominik Sivak &centerdot; About Me", `
        <section>
            <p class="fl left-border">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dictum dui mi, vel condimentum magna dictum in. Cras consectetur enim urna, ut laoreet odio pellentesque et. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac volutpat justo. Integer ac lorem scelerisque, iaculis ipsum facilisis, aliquam erat. Suspendisse molestie felis sit amet cursus sodales. Curabitur lacinia gravida est ac pharetra. Nullam vitae mollis felis. Nullam cursus justo imperdiet felis pharetra pellentesque.

                Nam sodales, metus vitae condimentum sollicitudin, est ex sodales purus, at faucibus diam nibh ut urna. Aenean bibendum mauris eu orci mollis varius. Etiam purus lectus, pharetra ac lobortis a, sodales a leo. Nulla gravida mauris vitae placerat finibus. Aenean gravida leo sit amet tempus faucibus. Maecenas sagittis dignissim turpis eu tempus. Fusce dui nisi, vestibulum et ligula sit amet, consequat lobortis quam. Nam dignissim metus et bibendum fermentum. Cras commodo suscipit ultricies.

                Ut fringilla venenatis lectus, non malesuada purus efficitur a. Pellentesque ac porttitor nisl. Sed ornare lacus sit amet posuere facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vulputate mauris elit, et pellentesque dui ultricies sit amet. Etiam eget tempor quam. In elementum mollis mauris nec condimentum. Maecenas porta pretium velit ut venenatis. Fusce vitae ornare turpis. Nulla at finibus sapien, ut tincidunt odio. Curabitur interdum in est imperdiet facilisis. Sed vel nulla placerat, euismod lectus nec, tristique nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
            </p>
        </section>
    `, null, null));
};