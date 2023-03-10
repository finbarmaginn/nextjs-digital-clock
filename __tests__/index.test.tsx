import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders home headings', () => {
    render(<Home />)

    const h1 = screen.getByRole("heading", { level: 1 });
    const h2 = screen.getByRole("heading", { level: 2 });

    expect(h1).toBeInTheDocument();
    expect(h2).toBeInTheDocument();
  })
})
