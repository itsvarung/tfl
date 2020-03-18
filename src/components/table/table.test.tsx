import React from "react";
import { render, within } from "@testing-library/react";
import TrainLinesTable from "./index";
import { Line } from "../../models/line";

test("Table renders the correct number of rows if 2 rows are given", () => {
  const { getByTestId } = render(<TrainLinesTable lineData={trainLineData} />);
  const tableBody = getByTestId("table-body");
  const tableRows = within(tableBody).getAllByTestId("line-row");
  expect(tableRows.length).toBe(2);
});

test("Table renders the correct number of rows if 0 rows are given", () => {
  const { queryAllByTestId } = render(<TrainLinesTable lineData={[]} />);
  expect(queryAllByTestId("line-row")).toHaveLength(0);
});

test("Table headers render correctly", () => {
  const { getByTestId } = render(<TrainLinesTable lineData={trainLineData} />);
  const tableHeader = getByTestId("table-head");
  expect(within(tableHeader).getByTestId("table-head-line-cell")).toBeTruthy;
  expect(within(tableHeader).getByTestId("table-head-status-cell")).toBeTruthy;
  expect(within(tableHeader).getByTestId("table-head-severity-cell"))
    .toBeTruthy;
  expect(within(tableHeader).getByTestId("table-head-reason-cell")).toBeTruthy;
});

const trainLineData: Line[] = [
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "bakerloo",
    name: "Bakerloo",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.6Z",
    modified: "2020-03-02T15:43:40.6Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        reason: "",
        created: "0001-01-01T00:00:00",
        validityPeriods: [],
        disruption: {
          $type: "",
          category: "",
          categoryDescription: "",
          description: "",
          affectedRoutes: [],
          affectedStops: [],
          closureText: ""
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Bakerloo&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "metropolitain",
    name: "Metropolitain",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.6Z",
    modified: "2020-03-02T15:43:40.6Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 5,
        statusSeverityDescription: "Severe Delays",
        reason: "Jubliee Line",
        created: "0001-01-01T00:00:00",
        validityPeriods: [],
        disruption: {
          $type: "",
          category: "",
          categoryDescription: "",
          description: "",
          affectedRoutes: [],
          affectedStops: [],
          closureText: ""
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Bakerloo&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  }
];
