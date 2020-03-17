import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

jest.mock("./fetchLineData.tsx");

const { setLineData } = require("./App");

// test("Should update state lines with train line data", () => {
//   setLineData().then( () => {
//     expect(s)
//   })
// })
