const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const csvParser = require("csv-parser");

const teams = [
  "atl",
  "buf",
  "bal",
  "cin",
  "cle",
  "dal",
  "den",
  "det",
  "gb",
  "hou",
  "ind",
  "jax",
  "kc",
  "lv",
  "lac",
  "mia",
  "min",
  "ne",
  "no",
  "nyg",
  "nyj",
  "phi",
  "pit",
  "sea",
  "sf",
  "tb",
  "ten",
  "wsh",
];

(async () => {
  const browser = await puppeteer.launch({ headless: true });
  const combinedStats = [];
  let headers = [];

  for (const team of teams) {
    console.log("SCRAPING FOR", team.toUpperCase(), "...");
    const url = `https://www.espn.com/nfl/team/stats/_/type/team/name/${team}`;

    const page = await browser.newPage();
    await page.goto(url, { waitUntil: "networkidle2" });

    await page.waitForSelector("table");

    const html = await page.content();
    const $ = cheerio.load(html);

    const table = $("table tbody");

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

    const data = rows.slice(50, 100).map((item) => item[0]);

    if (rows.length > 0) {
      const teamStats = teams.map((team) => [team.toUpperCase(), ...data]);
      combinedStats.push(...teamStats);
    } else {
      console.error(`No data found for team ${team}`);
    }

    headers = rows.slice(0, 50);

    await page.close();
  }

  if (combinedStats.length > 0) {
    const newHeaders = ["Team", ...headers];
    const csvData = [
      newHeaders.join(","),
      ...combinedStats.map((row) => row.join(",")),
    ].join("\n");

    fs.writeFile("nfl_team_stats.csv", csvData, (err) => {
      if (err) {
        console.error("Error writing to CSV file", err);
      } else {
        console.log("Data saved to nfl_team_stats.csv");

        // Convert the CSV to JSON
        const csvFilePath = "nfl_team_stats.csv";
        const jsonFilePath = "nfl_team_stats.json";
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
                  console.log("Data saved to nfl_team_stats.json");
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
