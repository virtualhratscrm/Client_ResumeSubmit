import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Schedule input field", () => {
  render(<App />);
  const avaliabilityField = screen.getByText(/Schedule Availability */i);
  expect(avaliabilityField).toBeInTheDocument();
});
