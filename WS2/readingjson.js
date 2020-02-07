var http = require("http");
var fs = require("fs");
       
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/json"});
    var data = fs.readFileSync("sampledata.json");
    var jsonContent = JSON.parse(data);
    var thingToPushIntoJson = {"name": 'John Doe', "age": '52', "company": 'Laurea', "address": 'Ratatie 22'};
    jsonContent.push(thingToPushIntoJson);
    fs.writeFileSync('dataset.json', JSON.stringify(jsonContent));
    jsonContent.splice(jsonContent.length -1);
    response.write(JSON.stringify(jsonContent));
    response.end();
}).listen(8081);