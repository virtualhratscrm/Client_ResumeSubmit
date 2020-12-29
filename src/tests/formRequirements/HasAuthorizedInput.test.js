import { render, screen } from "@testing-library/react";
import App from "../../App";

test("renders Authorized input field", () => {
  render(<App />);
  const authorizedField = screen.getByText(
    /Are you legally authorized to work in the United States? */i
  );
  expect(authorizedField).toBeInTheDocument();
});
