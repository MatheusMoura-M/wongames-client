import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import PaymentOptions from '.'

import cardsMock from './mock'

const meta = {
  title: 'PaymentOptions',
  component: PaymentOptions,
  args: {
    cards: cardsMock
  },
  argTypes: {
    cards: {
      type: 'function'
    },
    handlePayment: {
      action: 'clicked'
    }
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof PaymentOptions>

export default meta
type Story = StoryObj<typeof PaymentOptions>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  )
}
