var express = require('express');
var app = express();
var fs = require('fs');

//set the view engine to ejs
app.set('view engine', 'ejs');

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.render('pages/index', {
        new_heading: "Welcome to guestbook",
        new_paragraph: "Lorem Ipsum..."
    });
});
app.get('/guestbook', function(req,res) {
    var data = require('./guestbook.json');
    res.render('pages/guestbook', {messages: data});
});
app.get('/newmessage', function (req, res) {
    res.render('pages/newmessage');
});
app.post('/newmessage', function(req,res) {
    //Load the existing data from a file
    var data = require('./guestbook.json');
    //Create a new JSON object and add it to the existing data variable
    data.push({
        id: data.length + 1,
        username: req.body.username,
        country: req.body.country,
        date: new Date(),
        message: req.body.message
    });

    //Convert the JSON object to a string format
    var jsonStr = JSON.stringify(data, null, 4);

    //Write data to a file
    fs.writeFile('./guestbook.json', jsonStr, (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
    //res.send("Saved the data to a file. Browse to the /guestbook to see the contents of the file");
});

app.get('/ajaxmessage', function (req, res) {
    res.render('pages/ajaxmessage');
});

// POST-tyyppiseen sivupyyntöön reagoiva reitti
app.post("/ajaxmessage", function(req, res) {
    var data = require('./guestbook.json');

    var username = req.body.username;
    var country = req.body.country;
    var date = new Date();
    var message = req.body.message;

    data.push({
        id: data.length + 1,
        username: username,
        country: country,
        date: new Date(),
        message: message
    });
    var jsonStr = JSON.stringify(data, null, 4);
    fs.writeFile('./guestbook.json', jsonStr , (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
  
    res.send("Lähetit lomakkeen! Username: " + username + " Country: " + country + "Message: " + message);
    
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});