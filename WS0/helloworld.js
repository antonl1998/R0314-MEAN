var http = require("http");
http.createServer(function (request, response) {
  response.writeHead(200, {'Content-Type' : 'text/html'});
  if(request.url === "/helloworld") {
    response.write("<h1>Hello World</h1>");
    response.write("<a href='/helloroutes'>Go To Hello Routes\n</a>");
    response.write(`
      <table>
        <tr><td>Name</td><td>Address</td><td>City</td></tr>
        <tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>
        <tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>
      </table>`);
  } else if(request.url === "/helloroutes") {
    response.write("<h1>Hello routes</h1>");
    response.write("<a href='/helloworld'>Go To Hello Routes\n</a>");
  } else if(request.url === "/") {
    response.write("<h1>Toimiiko?</h1>")
    response.write("<a href='/helloroutes'>Go To Hello Routes\n</a>");
    response.write(`
      <table>
        <tr><td>Name</td><td>Address</td><td>City</td></tr>
        <tr><td>Matti Meikäläinen</td><td>Timotie 1, as 10</td><td>Tampere</td></tr>
        <tr><td>Maija Virtanen</td><td>Asematie 12</td><td>Kiljava</td></tr>
      </table>`);
  }

  // Send the response body as "Hello World"
  response.end();
}).listen(8081);

//Console will print the message
console.log('Server running at http://127.0.0.1:8081/');
