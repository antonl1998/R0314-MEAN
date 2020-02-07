var fs = require("fs");

var data = fs.readFileSync("sampledata.json");
var jsonContent = JSON.parse(data);

jsonContent.forEach(element => {
    console.log(element.name)
    console.log(element.age)
    console.log(element.company)
    console.log(element.address)
});