import { render, screen } from "@testing-library/react";
import About from "@/pages/about";

describe("About", () => {
  it("renders about headings", () => {
    render(<About />);

    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  });
});
