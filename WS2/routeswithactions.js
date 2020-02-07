var http = require("http")
var fs = require("fs")

http.createServer((request, response)=>{
    if (request.url === "/"){
        response.writeHead(200, {"Content-Type": "text/html"})
        response.write('Nothing here to see');
        response.write("<a href='/frontpage'>front page</a>")
    } else if (request.url === "/frontpage"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("frontpage.html")
        response.write(data.toString());
        response.write("<a href='/contact'>contact</a>")
    } else if (request.url === "/contact"){
        response.writeHead(200, {"Content-Type": "text/html"})
        var data = fs.readFileSync("contact.html")
        response.write(data.toString());
        response.write("<a href='/plaintext'>plain text</a>");
    } else if (request.url === "/plaintext"){
        response.writeHead(200, {"Content-Type": "text/plain"})
        var data = fs.readFileSync("example.txt")
        response.write(data.toString());
        response.write("<a href='/sampledata'>sampledata</a>");
    } else if (request.url === "/sampledata"){
        response.writeHead(200, {"Content-Type": "application/json"})
        var data = fs.readFileSync("sampledata.json");
        response.write(data.toString())
        
    }
    response.end()
}).listen(8081)

console.log("Server running at http://127.0.0.1:8081/");