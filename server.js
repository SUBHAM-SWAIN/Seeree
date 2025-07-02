const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  let now = new Date();
  let hour = now.getHours();
  let minite = now.getMinutes();
  let second = now.getSeconds();
  let logEntry = `${hour}:${minite}:${second} - ${req.url}\n`;
  const url = req.url;
  if (url === "/" || url === "/home") {
    res.end("Welcome to the Home Page!");
    fs.appendFileSync("reqInfo.txt", logEntry);
  } else if (url === "/about") {
    res.end("Welcome to the About Page!");
    fs.appendFileSync("reqInfo.txt", logEntry);
  } else if (url === "/contact") {
    res.end("Welcome to the Contact Page!");
    fs.appendFileSync("reqInfo.txt", logEntry);
  } else {
    res.end("404 Not Found");
    fs.appendFileSync("reqInfo.txt", logEntry);
  }
});

const PORT = 3000;

server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
