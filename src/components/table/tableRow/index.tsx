import React from "react";
import { Row, RowData } from "../../../styling/TableStyles";
import { Line } from "../../../models/line";

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
