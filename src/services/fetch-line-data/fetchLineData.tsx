import { Line } from "../../models/line";
const fetch = require("node-fetch");

export async function fetchLineData(
  apiURL = "http://localhost:9000/"
): Promise<Line[] | undefined> {
  try {
    const crimeDataResponse = await fetch(apiURL);
    if (!crimeDataResponse.ok) {
      throw new Error("There was no data returned by the API");
    } else {
      const crimeData: Line[] = await crimeDataResponse.json();
      return crimeData;
    }
  } catch (e) {
    console.error(e);
    return [];
  }
}
