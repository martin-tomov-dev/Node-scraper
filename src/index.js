const scraper = require("../scrapers/scraper");

async function main() {
  var random_number = Math.floor(Math.random() * 3) + 1;
  console.log(random_number);
  scraper(random_number);
}

main();
