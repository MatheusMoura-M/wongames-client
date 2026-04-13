import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Radio from '.'

const meta = {
  title: 'Form/Radio',
  component: Radio,
  argTypes: {
    onCheck: { action: 'checked' }
  },
  parameters: {
    layout: 'fullscreen'
  },
  globals: {
    backgrounds: { value: 'dark' }
  }
} satisfies Meta<typeof Radio>

export default meta
type Story = StoryObj<typeof Radio>

export const Default: Story = {
  render: (args) => (
    <>
      <div style={{ padding: 10 }}>
        <Radio
          label="primeiro"
          labelFor="primeiro"
          id="primeiro"
          name="nome"
          value="primeiro"
          defaultChecked
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="segundo"
          labelFor="segundo"
          id="segundo"
          name="nome"
          value="segundo"
          {...args}
        />
      </div>
      <div style={{ padding: 10 }}>
        <Radio
          label="terceiro"
          labelFor="terceiro"
          id="terceiro"
          name="nome"
          value="terceiro"
          {...args}
        />
      </div>
    </>
  )
}
