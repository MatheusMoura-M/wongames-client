import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Spinner, { SpinnerProps } from '.'

const meta = {
  title: 'Main/Spinner',
  component: Spinner
} satisfies Meta<SpinnerProps>

export default meta
type Story = StoryObj<SpinnerProps>

export const Default: Story = {
  render: (args) => <Spinner {...args} />
}
