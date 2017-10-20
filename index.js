var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

// placeholders for app.use boilerplate

// Set get root route
app.get('/', function(req, res) {
   res.send("<h1>Welcome to Q's Tables.");
});

app.listen(PORT, function() {
    console.log("Listening on port %s", PORT);
});