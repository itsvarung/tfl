import React from "react";
import { shallow, mount } from "enzyme";

import { render, within } from "@testing-library/react";
import TrainLinesTable from "./index";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("Table renders the correct number of rows if 2 rows are given", () => {
  const { getAllByTestId, getByTestId } = render(
    <TrainLinesTable lineData={trainLineData} />
  );
  const tableBody = getByTestId("table-body");
  const tableRows = within(tableBody).getAllByTestId("line-row");
  expect(tableRows.length).toBe(2);
});

test("Table renders the correct number of rows if 0 rows are given", () => {
  const { queryAllByTestId } = render(<TrainLinesTable lineData={[]} />);
  expect(queryAllByTestId("line-row")).toHaveLength(0);
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
