import { render, screen } from "@testing-library/react";
import HomePage from "../page";
import "@testing-library/jest-dom";
describe("Home Page", () => {
  it("renders the hero section", () => {
    render(<HomePage />);
    expect(
      screen.getByRole("heading", { name: /Exclusive/i })
    ).toBeInTheDocument();
  });
  it("renders the flash sales section", () => {
    render(<HomePage />);
    expect(screen.getByText(/Flash Sales/i)).toBeInTheDocument();
  });
  it("renders the browse by category section", () => {
    render(<HomePage />);
    expect(screen.getByText(/Browse By Category/i)).toBeInTheDocument();
  });
  it("renders the new arrivals section", () => {
    render(<HomePage />);
    expect(screen.getByText(/New Arrivals/i)).toBeInTheDocument();
  });
  it("renders the footer", () => {
    render(<HomePage />);
    expect(
      screen.getByText(/© 2025 Exclusive. All Rights Reserved/i)
    ).toBeInTheDocument();
  });
});






