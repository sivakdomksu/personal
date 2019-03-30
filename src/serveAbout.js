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
                My name is Dominik Sivák (you can ignore that weird line above 'a') and I come from Slovakia which is in Central Europe. Ever since I was very young I have been playing with a computer. <br>&lt;fun-fact&gt;<br>&emsp;I was not allowed to play a lot of games, so I was left with MS Excel and my imagination.<br>&lt;/fun-fact&gt;<br>
                When I began working on my first procedures in Pascal I knew this is something I want to do. I was able to find it both satisfying as in brain stimulating and artistic. There are very few careers that have these traits.<br>
                The final decision was made when I received an admission letter from the Czech Technical University in Prague. As of 2019 I'm in my fourth year of study and enjoying my exchange study year at Kansas State University in the USA which has been invaluable so far.<br>
                The thing that's equally important as my job for me is my free time. I try to manage it carefully and I spend it playing and making music and doing some sports from time to time. My school of thought is when one cannot get mind off the job, he cannot get it on the job completely.<br><br>
                
                To anyone reading this text I wish a wonderful day.
            </p>
        </section>
    `, null, null));
};