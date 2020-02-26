var express = require('express');
var app = express();
var fs = require('fs');

// Require the module required for using form data
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/adduser', function(req,res) {
    res.sendFile(__dirname + '/public/adduser.html');
});

//Add data
app.post('/adduser', function(req,res) {
    //Load the existing data from a file
    var data = require('./exampledata2.json');

    //Create a new JSON object and add it to the existing data variable
    data.push({
        "Name": "Anton Laihi",
        "Company": "Laurea",
        "Email": "anton@example.fi",
        "Date": new Date()
    });

    //Convert the JSON object to a string format
    var jsonStr = JSON.stringify(data);

    //Write data to a file
    fs.writeFile('exampledata2.json', jsonStr, (err) => {
        if(err) throw err;
        console.log('It\'s saved!');
    });
    res.send("Saved the data to a file. Browse to the /details to see the contents of the file");
});

app.get('/details', function(req,res) {
    var data = require('./exampledata2.json');

    // Parse the results into a variable
    var results = '<table border="1">';

    for (var i = 0; i < data.length; i++) {
        results += '<tr>' + 
        '<td>' + data[i].Name + '</td>' +
        '<td>' + data[i].Email + '</td>'+ 
        '</tr>';
    }
    res.send(results);
});

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});