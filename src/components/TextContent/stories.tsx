import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import TextContent, { TextContentProps } from '.'
import textMock from './mock'

const meta = {
  title: 'Main/TextContent',
  component: TextContent,
  args: textMock,
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<TextContentProps>

export default meta
type Story = StoryObj<TextContentProps>

export const Default: Story = {
  render: (args) => <TextContent {...args} />
}
