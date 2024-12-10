import 'match-media-mock'
import { screen } from '@testing-library/react'
import { renderWithTheme } from '@/utils/tests/helpers'

import BannerSlider from '.'

const items = [
  {
    img: '/img/red-dead-img.jpg',
    title: 'Defy death 1',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death',
    ribbon: 'Bestselling'
  },
  {
    img: 'https://s2-g1.glbimg.com/_zAZeVzS1-Mpgxb29RN_Rpd1FcU=/0x0:1024x741/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Q/Y/fNZWBPR1WtXPavRZx8Mw/whatsapp-image-2021-07-20-at-13.31.23.jpeg',
    title: 'Defy death 2',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  }
]

describe('<BannerSlider />', () => {
  it('should render vertical slider', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelector('.slick-vertical')).toBeInTheDocument()
  })

  it('should render with 1 active item', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)

    expect(container.querySelectorAll('.slick-slide')).toHaveLength(2)
    expect(container.querySelectorAll('li.slick-active')).toHaveLength(1)
    expect(
      screen.getByRole('heading', { name: /defy death 1/i, hidden: false })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /defy death 2/i, hidden: true })
    ).toBeInTheDocument()
  })

  it('should render with the dots', () => {
    const { container } = renderWithTheme(<BannerSlider items={items} />)
    expect(container.querySelector('.slick-dots')).toBeInTheDocument()
  })
})
