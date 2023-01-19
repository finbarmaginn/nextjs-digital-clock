import { render } from '@testing-library/react'
import Home from '@/pages/index'
import About from '@/pages/about'

it('renders homepage unchanged', () => {
  const { container } = render(<Home />)
  expect(container).toMatchSnapshot()
})

it("renders about page unchanged", () => {
  const { container } = render(<About />);
  expect(container).toMatchSnapshot();
});
