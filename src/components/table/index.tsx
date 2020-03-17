import React from "react";
import LineTableRow from "./tableRow";
import styled from "styled-components";

export interface Props {
  lineData: Line[];
}

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex-flow: column;
`;

const HeaderCell = styled.th`
  padding-right: 12%;
  padding-top: 20px;
  padding-bottom: 20px;
  text-align: left;
  color: #707070;
  border-bottom: 2px solid #707070;
`;

const TrainLineTable = styled.table`
  border-spacing: 0px;
`;

const TrainLinesTable: React.FC<Props> = props => {
  return (
    <Wrapper>
      <TrainLineTable data-testid="table">
        {/* Table Header */}
        <thead data-testid="table-head">
          <HeaderCell data-testid="table-head-line-cell">Line</HeaderCell>
          <HeaderCell data-testid="table-head-status-cell">Status</HeaderCell>
          <HeaderCell data-testid="table-head-severity-cell">
            Status Severity
          </HeaderCell>
          <HeaderCell data-testid="table-head-reason-cell">
            Status Reason
          </HeaderCell>
        </thead>

        {/* Table Body */}
        <tbody data-testid="table-body">
          {props.lineData.map((line, index) => (
            <LineTableRow index={index} line={line} />
          ))}
        </tbody>
      </TrainLineTable>
    </Wrapper>
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
