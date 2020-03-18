import React from "react";
import { render, within } from "@testing-library/react";
import Row from "./index";
import { Line } from "../../../models/line";

test("Row renders correctly", () => {
  const { getByTestId } = render(<Row index={0} line={trainLineData} />);
  const tableRow = getByTestId("line-row");
  expect(within(tableRow).getByTestId("name")).toBeTruthy;
  expect(within(tableRow).getByTestId("status-description")).toBeTruthy;
  expect(within(tableRow).getByTestId("status-severity")).toBeTruthy;
  expect(within(tableRow).getByTestId("status-reason")).toBeTruthy;
});

const trainLineData: Line = {
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
};
