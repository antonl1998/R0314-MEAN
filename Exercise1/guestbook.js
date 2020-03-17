var express = require('express');
var app = express();
var fs = require('fs');

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
app.get('/guestbook', function(req,res) {
    var data = require('./guestbook.json');

    // Parse the results into a variable
    var results = '<table border="1">';

    for (var i = 0; i < data.length; i++) {
        results += '<tr>' + 
        '<td>' + data[i].username + '</td>' +
        '<td>' + data[i].country + '</td>'+
        '<td>' + data[i].message + '</td>'+  
        '</tr>';
    }
    res.send(results);
});
app.get('/newmessage', function (req, res) {
    res.sendFile(__dirname + '/public/newmessage.html');
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
    var jsonStr = JSON.stringify(data);

    //Write data to a file
    fs.writeFile('./guestbook.json', jsonStr, (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
    res.send("Saved the data to a file. Browse to the /guestbook to see the contents of the file");
});

app.get('/ajaxmessage', function (req, res) {
    res.sendFile(__dirname + '/public/ajaxmessage.html');
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
    var jsonStr = JSON.stringify(data);
    fs.writeFile('./guestbook.json', jsonStr , (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
  
    res.send("Lähetit lomakkeen! Username: " + username + " Country: " + country + "Message: " + message);
    
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});