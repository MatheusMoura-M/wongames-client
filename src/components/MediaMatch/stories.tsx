import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import MediaMatch, { MediaMatchProps } from '.'

const meta = {
  title: 'Main/MediaMatch',
  component: MediaMatch
} satisfies Meta<MediaMatchProps>

export default meta
type Story = StoryObj<MediaMatchProps>

export const Desktop: Story = {
  args: {
    greaterThan: 'medium'
  },
  render: (args) => <MediaMatch {...args}>Only on Desktop</MediaMatch>
}

export const Mobile: Story = {
  args: {
    lessThan: 'medium'
  },
  render: (args) => <MediaMatch {...args}>Only on Mobile</MediaMatch>,
  parameters: {
    viewport: {
      defaultViewport: 'mobile1'
    }
  }
}
