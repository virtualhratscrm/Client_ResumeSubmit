import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders experience input field", () => {
  render(<App />);
  const experienceField = screen.getByText(
    /Years of Experience : */i
  );
  expect(experienceField).toBeInTheDocument();
});
