import React from "react";

interface Props {
  index: Number;
  line: Line;
}
const LineTableRow: React.FC<Props> = props => {
  return (
    <tr data-testid="line-row" key={props.index.toString()}>
      <td align="right" data-testid="name">
        {props.line.name}
      </td>
      <td align="right" data-testid="status-description">
        {props.line.lineStatuses[0].statusSeverityDescription}
      </td>
      <td align="right" data-testid="status-severity">
        {props.line.lineStatuses[0].statusSeverity}
      </td>
      <td align="right" data-testid="status-reason">
        {props.line.lineStatuses[0].reason}
      </td>
    </tr>
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
