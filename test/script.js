var Scratch = require('scratch-api');
const fetch = require('node-fetch');
Scratch.UserSession.load(function (err, user) {
    user.cloudSession(578157221 /*project id*/, function (err, cloud) {
        function timeout() {
            setTimeout(function () {
                //get the data from whatever way you like (fetch is cool btw so i will use it here)
                fetch('https://api.scratch.mit.edu/users/Jeffalo/messages/count')
                    .then(res => res.json())
                    .then(data => {
                        cloud.set('☁ Jeffalo messages', data /*value*/)
                    })
                timeout();
            }, 5000 /*time in milliseconds to check for and update, never ever go lower than 10 a second!!!*/);
        }
        timeout() //a loop
    });
});
