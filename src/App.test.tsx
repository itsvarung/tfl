import { enableFetchMocks } from "jest-fetch-mock";
enableFetchMocks();
require("jest-fetch-mock").enableMocks();
import React from "react";
import ReactDOM from "react-dom";
import { render, within, act } from "@testing-library/react";
import App from "./App";
import { Line } from "./models/line";

it("Renders", async () => {
  fetchMock.mockResponseOnce(JSON.stringify(trainLineData));
  const div = document.createElement("div");
  await act(async () => {
    ReactDOM.render(<App />, div);
  });
  ReactDOM.unmountComponentAtNode(div);
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
