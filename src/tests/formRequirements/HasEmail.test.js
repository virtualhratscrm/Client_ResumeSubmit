import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders email input field", () => {
  render(<App />);
  const emailField = screen.getByText(/Email address : */i);
  expect(emailField).toBeInTheDocument();
});
