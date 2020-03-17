import React from "react";
import Table from "./components/table";
import { fetchLineData } from "./services/fetch-line-data/fetchLineData";

const App = () => {
  const [lineData, setLineData] = React.useState<Line[]>([]);

  React.useEffect(() => {
    updateLineData();
  }, [lineData]);

  async function updateLineData() {
    try {
      const lineData = await fetchLineData();
      if (lineData !== undefined) {
        setLineData(lineData);
      } else {
        setLineData([]);
      }
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="App">
      <Table lineData={lineData} />
    </div>
  );
};
export default App;

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
