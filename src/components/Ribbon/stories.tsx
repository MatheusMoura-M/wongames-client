import { StoryObj, Meta } from '@storybook/react'
import Ribbon, { RibbonProps } from '.'

export default {
  title: 'Ribbon',
  component: (args) => (
    <div
      style={{
        width: '40rem',
        height: '25rem',
        position: 'relative',
        backgroundColor: '#888'
      }}
    >
      <Ribbon {...args} />
    </div>
  )
} as Meta

export const Default: StoryObj<RibbonProps> = {
  args: {
    children: 'Best Seller',
    color: 'secondary',
    size: 'normal'
  },
  argTypes: {
    children: {
      type: 'string'
    }
  }
}
