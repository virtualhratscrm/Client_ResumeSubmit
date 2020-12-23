import { render, screen } from "@testing-library/react";
import App from "../App";

test("renders google link", () => {
  render(<App />);
  const linkElement = screen.getByText(/exit to google . com/i);
  expect(linkElement).toBeInTheDocument();
});

describe("My Test true", () => {
  it("My Test truthful", () => {
    expect(true).toEqual(true);
  });
});

describe("My Test math", () => {
  it("My Test addition", () => {
    expect(2 + 2).toEqual(4);
  });
});
