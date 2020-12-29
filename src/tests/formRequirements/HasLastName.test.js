import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders last name input field", () => {
  render(<App />);
  const lastNameField = screen.getByText(/Last name : */i);
  expect(lastNameField).toBeInTheDocument();
});
