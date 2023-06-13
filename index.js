const scraper = require("./scrapers/scraper");

async function main() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  console.log(random_number);
  scraper(random_number);
}

const express = require("express");

// App constants
const port = process.env.PORT || 3000;
const app = express();

// Start the server
app.listen(port, () => {
  main();
});
