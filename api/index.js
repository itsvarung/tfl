const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const PORT = 9000;

const app = express();
app.use(cors());

// Respond to get request from front end with data from TFL API
app.get("/", async (req, res) => {
  try {
    const data = await fetchLineData();
    res.json(data);
  } catch (e) {
    console.error(e);
  }
});

// Fetch Data from TFL API
async function fetchLineData() {
  try {
    const url = `https://api.tfl.gov.uk/line/mode/tube/status`;
    const lineDataResponse = await fetch(url);

    if (!lineDataResponse.ok) {
      throw new Error("There was no data returned by the API");
    } else {
      console.info(lineDataResponse);
      const lineData = await lineDataResponse.json();

      return lineData;
    }
  } catch (e) {
    console.error(e);
  }
}

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
