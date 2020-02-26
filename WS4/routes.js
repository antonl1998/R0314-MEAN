var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/list', function(req, res) {
    //Read file with some data and display to the user
    res.sendFile(__dirname + '/exampledata.txt');
});

app.get('/jsondata', function(req,res) {
    var data = require('./exampledata2.json');

    // Parse the results into a variable
    var results = '<table border="1">';

    for (var i = 0; i < data.length; i++) {
        results += '<tr>' + '<td>' + data[i].Name +
        '<td>' + data[i].Email + '</td>'+ '</tr>';
    }
    res.send(results);
});

//Add data
app.get('/add', function(req,res) {
    //Load the existing data from a file
    var data = require('./exampledata2.json');

    //Create a new JSON object and add it to the existing data variable
    data.push({
        "Name": "Anton Laihi",
        "Company": "Laurea",
        "Email": "anton@example.fi",
        "Date": "26/2/2020 \r\n"
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

app.listen(8080, function () {
    console.log('Example app listening on port 8080!');
});