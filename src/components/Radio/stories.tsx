import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { action } from 'storybook/actions'
import Radio, { RadioProps } from '.'

const meta = {
  title: 'Form/Radio',
  component: Radio,
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
} satisfies Meta<RadioProps>

export default meta
type Story = StoryObj<RadioProps>

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
