import React from "react";
import ReactDOM from "react-dom";
import { render, within } from "@testing-library/react";
import App from "./App";

it("Renders", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
