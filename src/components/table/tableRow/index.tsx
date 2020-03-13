import React from "react";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

interface Props {
  index: Number;
  line: Line;
}
const LineTableRow: React.FC<Props> = props => {
  return (
    <TableRow key={props.index.toString()}>
      <TableCell align="right">{props.line.name}</TableCell>
      <TableCell align="right">
        {props.line.lineStatuses[0].statusSeverityDescription}
      </TableCell>
      <TableCell align="right">
        {props.line.lineStatuses[0].statusSeverity}
      </TableCell>
      <TableCell align="right">{props.line.lineStatuses[0].reason}</TableCell>
    </TableRow>
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
