// ***************************************************************************
// Bank API code from Web Dev For Beginners project
// https://github.com/microsoft/Web-Dev-For-Beginners/tree/main/7-bank-project/api
// ***************************************************************************

const express = require("express");
// const scraper = require("./scrapers/scraper");

function main() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  console.log(random_number);
  // scraper(random_number);
}

// App constants
const port = process.env.PORT || 3000;

const app = express();

// Start the server
app.listen(port, () => {
  main();
  console.log(`Server listening on port ${port}`);
});
