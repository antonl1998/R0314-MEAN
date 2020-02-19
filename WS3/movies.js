var http = require("http");
var fs = require("fs");
var axios = require("axios");
var json;

const promise = axios
.get("http://www.omdbapi.com/?s=harry+potter&apikey=52ceedf9")
.then(response => {
    const data = response.data;
    //console.log(data);
    json = data;
});
http.createServer((request, response)=>{
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<html><body>");
    response.write("<table border='solid 1px black'>");
    console.log(json.Search.length);
    for(var i = 0; i < json.Search.length; i++) {
        response.write("<tr>")
        response.write(("<td>" + json.Search[i].Title + "</td><td>" + json.Search[i].Year + "</td><td><img src=" +json.Search[i].Poster +">" + "</td>"));
        response.write("</tr>");
    }
    response.write("</table>");
    response.write("</body></html>");
    response.end();
  }).listen(8080);
