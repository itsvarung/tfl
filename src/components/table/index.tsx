import React from "react";
import LineTableRow from "./table-row";
import {
  Table,
  Card,
  HeaderData,
  CardHeaderText,
  CardHeader
} from "../../styling/TableStyles";
import { Line } from "../../models/line";

export interface Props {
  lineData: Line[];
}

const TrainLinesTable: React.FC<Props> = props => {
  return (
    <Card>
      <CardHeader>
        <CardHeaderText>Train Schedule</CardHeaderText>
      </CardHeader>
      <Table data-testid="table">
        {/* Table Header */}
        <thead data-testid="table-head">
          <tr>
            <HeaderData data-testid="table-head-line-color"></HeaderData>
            <HeaderData data-testid="table-head-line-cell">Line</HeaderData>
            <HeaderData data-testid="table-head-status-cell">Status</HeaderData>
            <HeaderData data-testid="table-head-severity-cell">
              Status Severity
            </HeaderData>
            <HeaderData data-testid="table-head-reason-cell">
              Status Reason
            </HeaderData>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody data-testid="table-body">
          {props.lineData.map((line, index) => (
            <LineTableRow index={index} line={line} />
          ))}
        </tbody>
      </Table>
    </Card>
  );
};

export default TrainLinesTable;
