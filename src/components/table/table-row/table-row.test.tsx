import React from "react";
import Row from "./index";
import { Line } from "../../../models/line";

import { configure, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

describe("table row component", () => {
  test("renders", () => {
    const wrapper = mount(<Row index={0} line={trainLineData} />);

    // Rendering correctly
    expect(wrapper.exists()).toBe(true);

    // Renders only 1 row
    let row = wrapper.find("tr");
    expect(row).toHaveLength(1);

    // Renders 5 cells
    let cells = wrapper.find("td");
    expect(cells).toHaveLength(5);

    // Renders data within cells correctly
    expect(
      cells
        .at(0)
        .find({ "data-testid": "color" })
        .exists()
    ).toBe(true);
    expect(
      cells
        .at(1)
        .find({ children: "Bakerloo" })
        .exists()
    ).toBe(true);
    expect(
      cells
        .at(2)
        .find({ children: "Good Service" })
        .exists()
    ).toBe(true);
    expect(
      cells
        .at(3)
        .find({ children: 10 })
        .exists()
    ).toBe(true);
    expect(
      cells
        .at(4)
        .find({ children: "" })
        .exists()
    ).toBe(true);
  });
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
