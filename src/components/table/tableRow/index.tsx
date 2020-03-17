import React from "react";
import styled from "styled-components";

interface Props {
  index: Number;
  line: Line;
}

const Row = styled.tr`
  font-size: 0.9em;
  text-align: left;
  color: #707070;
`;

const Cell = styled.td`
  padding-right: 12%;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ededed;
`;

const LineTableRow: React.FC<Props> = props => {
  return (
    <Row data-testid="line-row" key={props.index.toString()}>
      <Cell align="right" data-testid="name">
        {props.line.name}
      </Cell>
      <Cell align="right" data-testid="status-description">
        {props.line.lineStatuses[0].statusSeverityDescription}
      </Cell>
      <Cell align="right" data-testid="status-severity">
        {props.line.lineStatuses[0].statusSeverity}
      </Cell>
      <Cell align="right" data-testid="status-reason">
        {props.line.lineStatuses[0].reason}
      </Cell>
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
