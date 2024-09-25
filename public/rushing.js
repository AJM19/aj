const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");

const url = "https://www.espn.com/nfl/stats/player/_/stat/rushing";

axios
  .get(url)
  .then((response) => {
    const html = response.data;

    const $ = cheerio.load(html);

    const table = $("table tbody");

    const headers = [];
    $("table thead tr th").each((i, th) => {
      headers.push($(th).text().trim());
    });

    const rows = [];
    table.find("tr").each((i, tr) => {
      const cells = [];
      $(tr)
        .find("td")
        .each((j, td) => {
          cells.push($(td).text().trim());
        });
      if (cells.length) {
        rows.push(cells);
      }
    });

    //Batches of 50
    const athletes = rows.slice(0, 50);
    const stats = rows.slice(50, 100);

    const combinedData = stats.map((stat, index) => {
      return [athletes[index][1], ...stat];
    });

    const newHeaders = headers.slice(1);

    if (rows.length > 0 && headers.length > 0) {
      const csvData = [
        newHeaders.join(","),
        ...combinedData.map((row) => row.join(",")),
      ].join("\n");

      fs.writeFile("nfl_rushing_stats.csv", csvData, (err) => {
        if (err) {
          console.error("Error writing to CSV file", err);
        } else {
          console.log("Data saved to nfl_rushing_stats.csv");
        }
      });
    } else {
      console.error("No data found to save");
    }
  })
  .catch((error) => {
    console.error("Error fetching the webpage", error);
  });
