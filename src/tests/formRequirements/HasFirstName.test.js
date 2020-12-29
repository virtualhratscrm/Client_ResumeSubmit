import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders first name input field", () => {
  render(<App />);
  const firstNameField = screen.getByText(/First name : */i);
  expect(firstNameField).toBeInTheDocument();
});
