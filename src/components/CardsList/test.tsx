import cardsMock from '@/components/PaymentOptions/mock'
import { renderWithTheme } from '@/utils/tests/helpers'
import { screen } from '@testing-library/react'

import CardsList from '.'

export type StaticImageImport = {
  src: string | undefined
  alt?: string | undefined
  width?: number | string
  height?: number | string
  fill?: boolean
  priority?: boolean
}

jest.mock('next/image', () => ({
  __esModule: true,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  default: ({ src, alt, fill, priority, ...props }: StaticImageImport) => (
    <img src={src} alt={alt} {...props} />
  )
}))

describe('<CardsList />', () => {
  it('should render the cards list', () => {
    renderWithTheme(<CardsList cards={cardsMock} />)

    expect(
      screen.getByRole('heading', { name: /my cards/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /visa/i })).toHaveAttribute(
      'src',
      '/img/visa.png'
    )
    expect(screen.getByRole('img', { name: /mastercard/i })).toHaveAttribute(
      'src',
      '/img/master-card.png'
    )
    expect(screen.getByText(/4325/)).toBeInTheDocument()
    expect(screen.getByText(/4326/)).toBeInTheDocument()
  })
})
