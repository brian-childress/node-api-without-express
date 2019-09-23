const http = require("http");
const port = process.env.PORT || 5000;

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });

    // Add Routes
    const url = req.url;
    if (url === "/profile") {
      res.write("<h1>Welcome to your profile</h1>");
      res.end();
    } else if (url === "/shipment") {
      // Send JSON, dummy payload
      const payload = {
        address: {
          street: "123 amazing street",
          city: "Fun City"
        }
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      res.write(JSON.stringify(payload));
      res.end();
    } else {
      res.write("<h1>Hey There!</h1>");
      res.end();
    }
  })
  .listen(port, () => {
    console.log(`Server listening on port ${port}...`);
  });
