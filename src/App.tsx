import React, { Component } from "react";
import TrainLinesTable from "./components/table";
import { fetchLineData } from "./services/fetchLineData";

type trainLines = {
  lines: Line[];
};

export class App extends Component<any, trainLines> {
  constructor(props: any) {
    super(props);
    this.state = {
      lines: []
    };
  }

  async setLineData() {
    try {
      const lineData = await fetchLineData();
      if (lineData !== undefined) {
        this.setState({
          lines: lineData
        });
      } else {
        this.setState({
          lines: []
        });
      }
    } catch (e) {
      console.error(e);
    }
  }

  async componentDidMount() {
    this.setLineData();
  }

  render() {
    return (
      <div className="App">
        <TrainLinesTable lineData={this.state.lines} />
      </div>
    );
  }
}

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
