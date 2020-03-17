import React from "react";
import { shallow, mount } from "enzyme";

import ReactDOM from "react-dom";
import { render, within } from "@testing-library/react";
import App from "./App";

import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it("renders", () => {
  shallow(<App />);
});
