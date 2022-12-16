import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Entrar text", () => {
  render(<App />);
  const textElement = screen.getByText(/Entrar/i);
  expect(textElement).toBeInTheDocument();
});
