const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const csvParser = require("csv-parser");

const url = "https://www.espn.com/nfl/stats/player/_/stat/receiving";

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.goto(url, { waitUntil: "networkidle2" });

  for (let i = 0; i < 5; i++) {
    await page.click("a.AnchorLink.loadMore__link");
    await page.waitForSelector("a.AnchorLink.loadMore__link", {
      timeout: 5000,
    });
  }

  const html = await page.content();
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

  //TOP 200 Athletes
  const athletes = rows.slice(0, 300);
  const stats = rows.slice(301, 600);

  const combinedData = stats.map((stat, index) => {
    return [athletes[index][1], ...stat];
  });

  const newHeaders = headers.slice(1);

  if (rows.length > 0 && headers.length > 0) {
    const csvData = [
      newHeaders.join(","),
      ...combinedData.map((row) => row.join(",")),
    ].join("\n");

    fs.writeFile("nfl_receiving_stats.csv", csvData, (err) => {
      if (err) {
        console.error("Error writing to CSV file", err);
      } else {
        console.log("Data saved to nfl_receiving_stats.csv");

        // Convert the CSV to JSON
        const csvFilePath = "nfl_receiving_stats.csv";
        const jsonFilePath = "nfl_receiving_stats.json";
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
                  console.log("Data saved to nfl_receiving_stats.json");
                }
              }
            );
          });
      }
    });
  } else {
    console.error("No data found to save");
  }

  await browser.close();
})().catch((error) => {
  console.error("Error in Puppeteer script", error);
});
