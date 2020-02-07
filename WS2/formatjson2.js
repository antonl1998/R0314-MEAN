var http = require("http")
var fs = require("fs")

http.createServer((request, response)=>{
    var data = fs.readFileSync("sampledata.json");
    var jsonContent = JSON.parse(data);

    response.write("<table border='solid 1px black'>");
    jsonContent.forEach(element => {
        response.write("<tr>");
        response.write("<td>" + element.name +"</td>");
        response.write("<td>" + element.age +"</td>");
        response.write("<td>" + element.company +"</td>");
        response.write("<td>" + element.address +"</td>");
        response.write("</tr>");
    });
    response.write("</table>");
    response.end()
}).listen(8081)