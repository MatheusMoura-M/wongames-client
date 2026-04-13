import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import PaymentOptions, { PaymentOptionsProps } from '.'
import cardsMock from './mock'

const meta = {
  title: 'Main/PaymentOptions',
  component: PaymentOptions,
  argTypes: {
    handlePayment: {
      action: 'clicked'
    }
  },
  args: {
    cards: cardsMock,
    handlePayment: action('handle-payment')
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<PaymentOptionsProps>

export default meta
type Story = StoryObj<PaymentOptionsProps>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 400 }}>
      <PaymentOptions {...args} />
    </div>
  )
}
