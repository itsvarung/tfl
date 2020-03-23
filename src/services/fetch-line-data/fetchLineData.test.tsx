import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
require("jest-fetch-mock").enableMocks();

import { fetchLineData } from "./fetchLineData";
import { Line } from "../../models/line";

describe("testing backend", () => {
  beforeEach(() => {
    fetchMock.doMock();
    fetchMock.resetMocks();
  });

  it("if data sent from backend, process data correctly", async () => {
    fetchMock.mockResponseOnce(JSON.stringify(trainLineData));
    const returnedData = await fetchLineData();
    expect(returnedData as Line[]).toHaveLength(2);
  });

  it("if no data returned, return empty array", async () => {
    fetchMock.mockReject(new Error("There was no data returned by the API"));
    const returnedData = await fetchLineData();
    expect(returnedData as Line[]).toHaveLength(0);
  });
});

const trainLineData = [
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
