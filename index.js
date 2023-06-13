const scraper = require("./scrapers/scraper");

function main() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  console.log(random_number);
  scraper(random_number);
}

const express = require("express");

// App constants
const port = 3001;
const app = express();

// Start the server
app.listen(port, () => {
  main();
});
