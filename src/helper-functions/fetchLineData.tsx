export async function fetchLineData(): Promise<Line[] | undefined> {
  try {
    const crimeDataResponse = await fetch("http://localhost:9000/");

    if (!crimeDataResponse.ok) {
      throw new Error("There was no data returned by the API");
    } else {
      console.info(crimeDataResponse);
      const crimeData: Line[] = await crimeDataResponse.json();

      return crimeData;
    }
  } catch (e) {
    console.error(e);
  }
}

interface Line {
  $type: String;
  id: String;
  name: String;
  modeName: String;
  disruptions: String[];
  created: String;
  modified: String;
  lineStatuses: LineStatus[];
  routeSections: String[];
  serviceTypes: ServiceType[];
  crowding: Crowding;
}

interface LineStatus {
  $type: String;
  id: number;
  statusSeverity: number;
  statusSeverityDescription: String;
  reason: String;
  created: String;
  validityPeriods: ValidityPeriod[];
  disruption: Disruption;
}

interface Disruption {
  $type: String;
  category: String;
  categoryDescription: String;
  description: String;
  affectedRoutes: String[];
  affectedStops: String[];
  closureText: String;
}

interface ValidityPeriod {
  $type: String;
  fromDate: String;
  toDate: String;
  isNow: Boolean;
}

interface ServiceType {
  $type: String;
  name: String;
  uri: String;
}

interface Crowding {
  $type: String;
}
