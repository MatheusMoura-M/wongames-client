import { Meta, StoryObj } from '@storybook/react'
import { Email } from '@styled-icons/material-outlined/Email'
import TextField, { TextFieldProps } from '.'

export default {
  title: 'Form/TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    name: 'email',
    icon: <Email />,
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  },
  argTypes: {
    onInput: { action: 'changed' },
    icon: { type: 'symbol' }
  }
} as Meta

export const Default: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const withError: StoryObj<TextFieldProps> = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  ),
  args: {
    error: 'Ops...something is wrong'
  }
}
