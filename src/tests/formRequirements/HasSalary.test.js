import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Salary input field", () => {
  render(<App />);
  const salaryField = screen.getByText(
    /Salary Expectations */i
  );
  expect(salaryField).toBeInTheDocument();
});
