const commons = require("./commons");

/**
 * Serves the About page
 * @param req Request
 * @param res Response
 */
module.exports = function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.end(commons.serveHTML("Dominik Sivak &centerdot; Portfolio", `
        <section>
            <p class="fl left-border">
            <a href="https://github.com/sivakdomksu/personal"><img src="/images/ds.png"/></a>
                A part of my Web Development class on Kansas State University was an assignment to create a personal web page. The source code of web page you are currently looking at is located <a href="https://github.com/sivakdomksu/personal">here</a>.<br><br>
                
                The project uses Node.js to serve the web pages in a template style manner along with having custom built router (which we created in-class) to provide the correct page along with wildcard arguments.<br><br>
                
                The source code of the project can be found <a href="https://github.com/sivakdomksu/personal">here</a>.
            </p>
        </section>
        <section>
            <p class="fl left-border">
            <a href="https://github.com/sivakdomksu/580-Asteroids"><img src="/images/asteroids.png"/></a>
                Another assignment this time from a Game Development class was to create an asteroid-like game. The goal of the game is not to get hit by an asteroid and gain the score by shooting at them.
                 However, shooting at them cause them to multiply (until some point)!<br><br>
                
                The game is written in JS and implements a basic physics model which causes asteroids to bounce off each other when they collide. The player's spaceship also conforms to the laws of kinetic energy which makes the ship more difficult to turn around in higher speeds.<br><br>
                
                The source code of the project can be found <a href="https://github.com/sivakdomksu/580-Asteroids">here</a>.
            </p>
        </section>
        <section>
            <p class="fl left-border">
            <a href="https://github.com/KSU-CS-Software-Engineering/cs-student-portal"><img src="/images/student_portal.png"/></a>
                For one semester I had a chance to participate in a group project aiming to develop a new student portal for Kansas State University. I worked in a team with three other developers which enriched both my developing and project communication skills.<br><br>
                
                The project uses Laravel framework with Vue components. My main task was to create a Scheduler where students can pick and see the different sections of a class and pick one that best suits their time needs.<br><br>
                
                The source code of the project can be found <a href="https://github.com/KSU-CS-Software-Engineering/cs-student-portal">here</a>.
            </p>
        </section>
    `, null, null));
};