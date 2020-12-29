import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Education input field", () => {
  render(<App />);
  const educationField = screen.getByText(
    /Highest Education Level Completed : */i
  );
  expect(educationField).toBeInTheDocument();
});
