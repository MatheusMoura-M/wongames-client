import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import FormSignIn from '.'

const meta = {
  title: 'Form/FormSignIn',
  component: FormSignIn
} satisfies Meta<typeof FormSignIn>

export default meta
type Story = StoryObj<typeof FormSignIn>

export const Default: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignIn />
    </div>
  )
}
