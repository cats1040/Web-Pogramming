var http = require("http");
var port = 5000;

var server = http.createServer(function (req, res) {
  var reqPath = req ? req.url : null;
  console.log(
    "Request received: " + req.url,
    " received with method: ",
    req.method
  );

  if (req && reqPath == "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello world\n");
    return;
  }

  if (req && reqPath == "/products") {
    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(
      JSON.stringify([
        {
          id: "p1",
          name: "Product 1",
          price: 10,
          description: "This is product 1",
          image: "https://placehold.co/300x200",
        },
      ])
    );
    return;
  }

  res.writeHead(404, { "Content-Type": "text/plain" });
  res.end("Not Found\n");
});

server.listen(port, "localhost", () => {
  console.log("Server listening on: http://localhost:%s", port);
});
