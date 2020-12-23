import React from "react";
import ResumeSubmitForm from "../components/form/ResumeSubmitForm";
import ReactDom from "react-dom";
import { cleanup } from "@testing-library/react";



// this here is gold
afterEach(cleanup);
// it kills anything after each test so need to unmount

// basic crash test

describe("This component test should render the resume submit form component without crashing", () => {
  it("Should render as expected!", () => {
    const div = document.createElement("div");
    ReactDom.render(<ResumeSubmitForm />, div);
  });
});
