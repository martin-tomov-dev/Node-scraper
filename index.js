const scraper = require("./scrapers/scraper");

async function main() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  console.log(random_number);
  scraper(random_number);
}

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// App constants
const port = process.env.PORT || 3000;
const apiPrefix = "/api";

// Create the Express app & setup middlewares
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: /http:\/\/(127(\.\d){3}|localhost)/ }));
app.options("*", cors());

// Configure routes
const router = express.Router();

// Hello World for index page
app.get("/", function (req, res) {
  main();
});

// Add 'api` prefix to all routes
app.use(apiPrefix, router);

// Start the server
app.listen(port, () => {
  main();
});
