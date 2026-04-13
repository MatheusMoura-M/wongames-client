import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import FormProfile from '.'

const meta = {
  title: 'Form/FormProfile',
  component: FormProfile
} satisfies Meta<typeof FormProfile>

export default meta
type Story = StoryObj<typeof FormProfile>

export const Default: Story = {
  render: () => (
    <div style={{ maxWidth: 860, margin: 'auto' }}>
      <FormProfile />
    </div>
  )
}
