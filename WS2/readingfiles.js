//WS2 A
var fs = require("fs");
console.log("Program started");
var data = fs.readFileSync('example.txt');
console.log(data.toString());
var data2 = fs.readFileSync('example2.txt');
console.log(data2.toString());
console.log("Program ended");

//WS2 B
var fs = require("fs");
console.log("Program started");
//We'll just give a name of the callback function, but define it later on
fs.readFile('example.txt', results);
fs.readFile('example2.txt', results);

//Introduce a function to deal with fileread results
function results(err, data) {
    if(err) return console.error(err);
    console.log("Results of fileread:");
    console.log(data.toString());   
}