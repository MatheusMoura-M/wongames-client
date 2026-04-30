import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import Checkbox, { CheckboxProps } from '.'

const meta = {
  title: 'Form/Checkbox',
  component: Checkbox,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  args: {
    onCheck: action('on-check')
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<CheckboxProps>

export default meta
type Story = StoryObj<CheckboxProps>

export const Default: Story = {
  render: (args) => (
    <>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Action"
          labelFor="action"
          isChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Adventure"
          labelFor="adventure"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Checkbox
          name="category"
          label="Strategy"
          labelFor="strategy"
          {...args}
        />
      </div>
    </>
  )
}
