import { render } from '@testing-library/react'
import Profile from '.'

describe('<Profile />', () => {
  it('should render the heading', () => {
    render(<Profile>Opa</Profile>)
  })
})
