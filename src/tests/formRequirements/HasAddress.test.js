import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Address input field", () => {
  render(<App />);
  const addressField = screen.getByText(/Address : */i);
  expect(addressField).toBeInTheDocument();
});
