const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const csvParser = require("csv-parser");

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

          // Convert the CSV to JSON
          const csvFilePath = "nfl_rushing_stats.csv";
          const jsonFilePath = "nfl_rushing_stats.json";
          const csvData = [];

          fs.createReadStream(csvFilePath)
            .pipe(csvParser())
            .on("data", (row) => {
              csvData.push(row);
            })
            .on("end", () => {
              console.log("CSV file successfully processed.");

              // Write the JSON data to a file
              fs.writeFile(
                jsonFilePath,
                JSON.stringify(csvData, null, 2),
                (err) => {
                  if (err) {
                    console.error("Error writing to JSON file", err);
                  } else {
                    console.log("Data saved to nfl_rushing_stats.json");
                  }
                }
              );
            });
        }
      });
    } else {
      console.error("No data found to save");
    }
  })
  .catch((error) => {
    console.error("Error fetching the webpage", error);
  });
