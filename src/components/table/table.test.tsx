import React from "react";
import { render, within } from "@testing-library/react";
import TrainLinesTable from "./index";
import { Line } from "../../models/line";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

test("Table renders correctly", () => {
  const wrapper = mount(<TrainLinesTable lineData={trainLineData} />);

  // Should be one table
  const table = wrapper.find("table");
  expect(table).toHaveLength(1);
});

test("Table renders the correct number of rows if 2 rows are given", () => {
  const { getByTestId } = render(<TrainLinesTable lineData={trainLineData} />);
  const tableBody = getByTestId("table-body");
  const tableRows = within(tableBody).getAllByTestId("line-row");
  expect(tableRows).toHaveLength(2);
});

test("Table renders the correct number of rows if 0 rows are given", () => {
  const { queryAllByTestId } = render(<TrainLinesTable lineData={[]} />);
  expect(queryAllByTestId("line-row")).toHaveLength(0);
});

test("Table headers render correctly", () => {
  const wrapper = mount(<TrainLinesTable lineData={trainLineData} />);

  // Should be one table header
  const tableHeader = wrapper.find("thead");
  expect(tableHeader).toHaveLength(1);

  // Expect 1 row
  const row = tableHeader.find("tr");
  expect(row).toHaveLength(1);

  // Renders 5 cells
  let cells = row.find("th");
  expect(cells).toHaveLength(5);

  // With the correct titles
  expect(
    cells
      .at(1)
      .find({ children: "Line" })
      .exists()
  ).toBe(true);
  expect(
    cells
      .at(2)
      .find({ children: "Status" })
      .exists()
  ).toBe(true);
  expect(
    cells
      .at(3)
      .find({ children: "Status Severity" })
      .exists()
  ).toBe(true);
  expect(
    cells
      .at(4)
      .find({ children: "Status Reason" })
      .exists()
  ).toBe(true);
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
