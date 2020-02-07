var fs = require("fs");

var data = fs.readFileSync('example.txt');
var data2 = fs.readFileSync('example2.txt');
fs.writeFileSync('combinedfiles.txt', data + data2);

var data = fs.readFileSync("combinedfiles.txt");
var fd = fs.openSync("combinedfiles.txt", 'w+');
var buffer = new Buffer.from('I wrote this!!\n');

fs.writeSync(fd, buffer, 0, buffer.length, 0)
fs.writeSync(fd, data, 0, data.length, buffer.length)
fs.appendFileSync('combinedfiles.txt', "\nI wrote this!!!\n");

var data3 = fs.readFileSync("combinedfiles.txt")
console.log(data3.toString())