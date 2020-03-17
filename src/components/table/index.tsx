import React from "react";
import LineTableRow from "./tableRow";
import { Table, Container, HeaderData } from "../../styling/TableStyles";

export interface Props {
  lineData: Line[];
}

const TrainLinesTable: React.FC<Props> = props => {
  return (
    <Container>
      <Table data-testid="table">
        {/* Table Header */}
        <thead data-testid="table-head">
          <HeaderData data-testid="table-head-line-cell">Line</HeaderData>
          <HeaderData data-testid="table-head-status-cell">Status</HeaderData>
          <HeaderData data-testid="table-head-severity-cell">
            Status Severity
          </HeaderData>
          <HeaderData data-testid="table-head-reason-cell">
            Status Reason
          </HeaderData>
        </thead>

        {/* Table Body */}
        <tbody data-testid="table-body">
          {props.lineData.map((line, index) => (
            <LineTableRow index={index} line={line} />
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default TrainLinesTable;

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
