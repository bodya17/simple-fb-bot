var express = require('express');
var app = express();

app.get("/webhook", function (req, res) {
    if (req.query["hub.verify_token"] === 'my-super-token') {
        console.log("Verified webhook");
        res.status(200).send(req.query["hub.challenge"]);
    } else {
        console.error("Verification failed. The tokens do not match.");
        res.sendStatus(403);
    }
});

app.listen(process.env.PORT || 3000);

//Rava-ruska-footballers
// App ID 584340728441781
// App secret d05251e5be6c57e87bb33d201d1a5b97
// Page access token EAAITdG2L67UBAOYJVMkBi15ZBbqXNTQclySSLMT0vZAdlN6KvZB6VxYIOEgX6oNS05P13Wipg1tbLQKBzaKDBEzF8d7JubimdpAJ4nlJpZCytZCbxcraEPb9PlZBnxnYbKm6JAb1ckA3Jh0ni2W5PStyYoC9rnGf8SNwcrTwvxN3Shhg9tpZBLM
// verify token simpleBot