import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TextContent from '.'
import textMock from './mock'

const meta = {
  title: 'Main/TextContent',
  component: TextContent,
  args: textMock,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof TextContent>

export default meta
type Story = StoryObj<typeof TextContent>

export const Default: Story = {
  render: (args) => <TextContent {...args} />
}
