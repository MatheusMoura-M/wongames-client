import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import ExploreSidebar from '.'
import items from './mock'

const meta = {
  title: 'ExploreSidebar',
  component: ExploreSidebar,
  argTypes: {
    items: { control: 'object' },
    onFilter: { action: 'clicked' }
  },
  args: {
    items,
    onFilter: action('on-click')
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof ExploreSidebar>

export default meta
type Story = StoryObj<typeof ExploreSidebar>

export const Default: Story = {
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  )
}

export const WithInitialValues: Story = {
  argTypes: {
    initialValues: { control: 'object' }
  },
  args: {
    initialValues: {
      platforms: ['windows', 'linux'],
      sort_by: 'low-to-high',
      price: 'under-50'
    }
  },
  render: (args) => (
    <div style={{ padding: 16, maxWidth: 320 }}>
      <ExploreSidebar {...args} />
    </div>
  )
}
