import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders google link", () => {
  render(<App />);
  const linkElement = screen.getByText(/exit to google/i);
  expect(linkElement).toBeInTheDocument();
});

describe("My Test Suite", () => {
  it("My Test Case", () => {
    expect(true).toEqual(true);
  });
});

describe("My Test math", () => {
  it("My Test addition", () => {
    expect(2 + 2).toEqual(4);
  });
});
