import { StoryObj, Meta } from '@storybook/react'
import Banner, { BannerProps } from '.'

export default {
  title: 'Banner',
  component: (args) => (
    <div style={{ maxWidth: '104rem', margin: '0 auto' }}>
      <Banner {...args} />
    </div>
  ),
  args: {
    img: 'https://s2-g1.glbimg.com/_zAZeVzS1-Mpgxb29RN_Rpd1FcU=/0x0:1024x741/1008x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2021/Q/Y/fNZWBPR1WtXPavRZx8Mw/whatsapp-image-2021-07-20-at-13.31.23.jpeg',
    title: 'Defy death',
    subtitle: '<p>Play the new <strong>CrashLands</strong> season',
    buttonLabel: 'Buy now',
    buttonLink: '/games/defy-death'
  },
  parameters: {
    layout: 'fullscreen'
  }
} as Meta

export const Default: StoryObj<BannerProps> = {}
