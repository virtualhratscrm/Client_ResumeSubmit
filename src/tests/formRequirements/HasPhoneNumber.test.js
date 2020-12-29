import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders phone numer input field", () => {
  render(<App />);
  const phoneNumberField = screen.getByText(/Phone number : */i);
  expect(phoneNumberField).toBeInTheDocument();
});
