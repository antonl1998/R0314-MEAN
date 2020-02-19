var http = require("http");
var fs = require("fs");
var axios = require("axios");
var json;

const promise = axios
.get("https://sv443.net/jokeapi/v2/joke/Dark/")
.then(response => {
    const data = response.data;
    //console.log(data);
    json = data;
});
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<h1>Dark joke of the month: </h1>");
    response.write("<p>"+ json.setup + "</p><p>" +json.delivery + "</p>");

    response.end();
  }).listen(8080);
