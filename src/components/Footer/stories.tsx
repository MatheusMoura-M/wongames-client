import { StoryObj, Meta } from '@storybook/react'
import Footer from '.'

export default {
  title: 'Footer',
  component: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer />
    </div>
  )
} as Meta

export const Default: StoryObj = {}
