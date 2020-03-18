import { fetchLineData } from "./fetchLineData";
import fetch from "jest-fetch-mock";
import { enableFetchMocks } from "jest-fetch-mock";
import { Line } from "../../models/line";
enableFetchMocks();

describe("Test fetching data from Backend", function() {
  beforeEach(() => {
    fetch.resetMocks();
  });

  it("Test that data is returned of correct type", async function() {
    fetch.mockResponseOnce(JSON.stringify(trainLineData));
    fetchLineData().then(res => {
      console.log(res);
      if (res !== undefined) {
        expect(res).toHaveLength(2);
      }

      expect(res as Line[]).toBeTruthy();
    });
  });

  // Test what happens when backend call fails
});

export const trainLineData = [
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