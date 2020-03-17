import React from "react";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LineTableRow from "./tableRow";

export interface Props {
  lineData: Line[];
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1
    },
    table: {
      minWidth: 650
    }
  })
);

const TrainLinesTable: React.FC<Props> = props => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3} data-testid="grid-container">
        <Grid item xs={2} data-testid="grid-item-xs-2"></Grid>
        <Grid item xs={8} data-testid="grid-item-xs-8">
          <table data-testid="table">
            {/* Table Header */}
            <thead data-testid="table-head">
              <th data-testid="table-head-line-cell">Line</th>
              <th data-testid="table-head-status-cell">Status</th>
              <th data-testid="table-head-severity-cell">Status Severity</th>
              <th data-testid="table-head-reason-cell">Status Reason</th>
            </thead>

            {/* Table Body */}
            <tbody data-testid="table-body">
              {props.lineData.map((line, index) => (
                <LineTableRow index={index} line={line} />
              ))}
            </tbody>
          </table>
        </Grid>
      </Grid>
    </div>
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
