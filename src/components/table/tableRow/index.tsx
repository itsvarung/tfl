import React from "react";
import { Row, RowData } from "../../../styling/TableStyles";

interface Props {
  index: Number;
  line: Line;
}

const LineTableRow: React.FC<Props> = props => {
  return (
    <Row data-testid="line-row" key={props.index.toString()}>
      <RowData align="right" data-testid="name">
        {props.line.name}
      </RowData>
      <RowData align="right" data-testid="status-description">
        {props.line.lineStatuses[0].statusSeverityDescription}
      </RowData>
      <RowData align="right" data-testid="status-severity">
        {props.line.lineStatuses[0].statusSeverity}
      </RowData>
      <RowData align="right" data-testid="status-reason">
        {props.line.lineStatuses[0].reason}
      </RowData>
    </Row>
  );
};
export default LineTableRow;

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
