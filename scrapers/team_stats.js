const puppeteer = require("puppeteer");
const cheerio = require("cheerio");
const fs = require("fs");
const csvParser = require("csv-parser"); // Import csv-parser

const teams = [
  "ari", // Arizona Cardinals
  "atl", // Atlanta Falcons
  "bal", // Baltimore Ravens
  "buf", // Buffalo Bills
  "car", // Carolina Panthers
  "chi", // Chicago Bears
  "cin", // Cincinnati Bengals
  "cle", // Cleveland Browns
  "dal", // Dallas Cowboys
  "den", // Denver Broncos
  "det", // Detroit Lions
  "gb", // Green Bay Packers
  "hou", // Houston Texans
  "ind", // Indianapolis Colts
  "jax", // Jacksonville Jaguars
  "kc", // Kansas City Chiefs
  "lac", // Los Angeles Chargers
  "lar", // Los Angeles Rams
  "lv", // Las Vegas Raiders
  "mia", // Miami Dolphins
  "min", // Minnesota Vikings
  "ne", // New England Patriots
  "no", // New Orleans Saints
  "nyg", // New York Giants
  "nyj", // New York Jets
  "phi", // Philadelphia Eagles
  "pit", // Pittsburgh Steelers
  "sea", // Seattle Seahawks
  "sf", // San Francisco 49ers
  "tb", // Tampa Bay Buccaneers
  "ten", // Tennessee Titans
  "wsh", // Washington Commanders
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
      const teamStats = [team.toUpperCase(), ...data];
      combinedStats.push(teamStats);
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
      ...combinedStats.map((row) =>
        row.map((value) => value.replace(/,/g, "")).join(",")
      ),
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
