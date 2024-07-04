const http = require("https");
const req = http.request("https://www.google.com", (res) => {
  res.on("data", (chunk) => {
    console.log(chunk);
  });
  res.on("end", () => {
    console.log("no more data");
  });
});
req.end();
