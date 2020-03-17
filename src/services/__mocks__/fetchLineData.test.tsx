export default async () => {
  return await new Promise(resolve => {
    resolve(trainLineData);
  });
};

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
        created: "0001-01-01T00:00:00",
        validityPeriods: []
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
    id: "central",
    name: "Central",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.587Z",
    modified: "2020-03-02T15:43:40.587Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        lineId: "central",
        statusSeverity: 9,
        statusSeverityDescription: "Minor Delays",
        reason: "Central Line: Minor delays due to signal failure at Holborn. ",
        created: "0001-01-01T00:00:00",
        validityPeriods: [
          {
            $type:
              "Tfl.Api.Presentation.Entities.ValidityPeriod, Tfl.Api.Presentation.Entities",
            fromDate: "2020-03-17T08:06:22Z",
            toDate: "2020-03-18T01:29:00Z",
            isNow: true
          }
        ],
        disruption: {
          $type:
            "Tfl.Api.Presentation.Entities.Disruption, Tfl.Api.Presentation.Entities",
          category: "RealTime",
          categoryDescription: "RealTime",
          description:
            "Central Line: Minor delays due to signal failure at Holborn. ",
          affectedRoutes: [],
          affectedStops: [],
          closureText: "minorDelays"
        }
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Central&serviceTypes=Regular"
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Central&serviceTypes=Night"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "circle",
    name: "Circle",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.587Z",
    modified: "2020-03-02T15:43:40.587Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Circle&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "district",
    name: "District",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.59Z",
    modified: "2020-03-02T15:43:40.59Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=District&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "hammersmith-city",
    name: "Hammersmith & City",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.587Z",
    modified: "2020-03-02T15:43:40.587Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Hammersmith & City&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "jubilee",
    name: "Jubilee",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.583Z",
    modified: "2020-03-02T15:43:40.583Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Jubilee&serviceTypes=Regular"
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Jubilee&serviceTypes=Night"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "metropolitan",
    name: "Metropolitan",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.593Z",
    modified: "2020-03-02T15:43:40.593Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Metropolitan&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "northern",
    name: "Northern",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.587Z",
    modified: "2020-03-02T15:43:40.587Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Northern&serviceTypes=Regular"
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Northern&serviceTypes=Night"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "piccadilly",
    name: "Piccadilly",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.583Z",
    modified: "2020-03-02T15:43:40.583Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Piccadilly&serviceTypes=Regular"
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Piccadilly&serviceTypes=Night"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "victoria",
    name: "Victoria",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.593Z",
    modified: "2020-03-02T15:43:40.593Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Victoria&serviceTypes=Regular"
      },
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Night",
        uri: "/Line/Route?ids=Victoria&serviceTypes=Night"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  },
  {
    $type: "Tfl.Api.Presentation.Entities.Line, Tfl.Api.Presentation.Entities",
    id: "waterloo-city",
    name: "Waterloo & City",
    modeName: "tube",
    disruptions: [],
    created: "2020-03-02T15:43:40.59Z",
    modified: "2020-03-02T15:43:40.59Z",
    lineStatuses: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineStatus, Tfl.Api.Presentation.Entities",
        id: 0,
        statusSeverity: 10,
        statusSeverityDescription: "Good Service",
        created: "0001-01-01T00:00:00",
        validityPeriods: []
      }
    ],
    routeSections: [],
    serviceTypes: [
      {
        $type:
          "Tfl.Api.Presentation.Entities.LineServiceTypeInfo, Tfl.Api.Presentation.Entities",
        name: "Regular",
        uri: "/Line/Route?ids=Waterloo & City&serviceTypes=Regular"
      }
    ],
    crowding: {
      $type:
        "Tfl.Api.Presentation.Entities.Crowding, Tfl.Api.Presentation.Entities"
    }
  }
];
