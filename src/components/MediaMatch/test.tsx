import { render, screen } from '@testing-library/react'
import 'jest-styled-components'
import MediaMatch from '.'

beforeAll(() => {
  window.matchMedia = jest.fn().mockImplementation((query) => ({
    matches: query.includes('(min-width: 768px)'),
    media: query,
    addListener: jest.fn(),
    removeListener: jest.fn()
  }))
})

describe('<MediaMatch />', () => {
  let desktopHeading: Element
  let mobileHeading: Element
  // hook tests
  beforeEach(() => {
    render(
      <>
        <MediaMatch greaterThan="small">
          <h1 data-testid="desktop">Desktop</h1>
        </MediaMatch>
        <MediaMatch lessThan="medium">
          <h1 data-testid="mobile">Mobile</h1>
        </MediaMatch>
      </>
    )
    desktopHeading = screen.getByTestId('desktop')
    mobileHeading = screen.getByTestId('mobile')
  })

  it('should be hidden if no media query is passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'none')
    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'none')
  })

  it('should show or hide based on the media passed', () => {
    expect(desktopHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(min-width: 450px)'
    })

    expect(mobileHeading.parentElement).toHaveStyleRule('display', 'block', {
      media: '(max-width: 768px)'
    })
  })
})
