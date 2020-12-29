import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Date input field", () => {
  render(<App />);
  const todaysDate = screen.getByText(/Today's Date : */i);
  expect(todaysDate).toBeInTheDocument();
});
