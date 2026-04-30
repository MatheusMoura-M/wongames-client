import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import FormSignUp from '.'

const meta = {
  title: 'Form/FormSignUp',
  component: FormSignUp
} satisfies Meta<typeof FormSignUp>

export default meta
type Story = StoryObj<typeof FormSignUp>

export const Default: Story = {
  render: () => (
    <div style={{ width: 300, margin: 'auto' }}>
      <FormSignUp />
    </div>
  )
}
