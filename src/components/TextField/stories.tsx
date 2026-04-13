import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { Email } from '@styled-icons/material-outlined/Email'
import { Password } from '@styled-icons/material-outlined/Password'
import { action } from 'storybook/actions'
import TextField from '.'

const icons = {
  Email: <Email />,
  Password: <Password />
}

const meta = {
  title: 'Form/TextField',
  component: TextField,
  argTypes: {
    onInput: { action: 'changed' },
    icon: {
      type: 'symbol',
      options: Object.keys(icons),
      mapping: icons,
      control: {
        type: 'select',
        labels: {
          Email: 'EmailIcon',
          Password: 'PasswordIcon'
        }
      }
    }
  },
  args: {
    label: 'E-mail',
    name: 'email',
    onInput: action('on-input'),
    icon: 'Email',
    initialValue: '',
    placeholder: 'john.cage@gmail.com'
  }
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof TextField>

export const Default: Story = {
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}

export const withError: Story = {
  args: {
    error: 'Ops...something is wrong'
  },
  render: (args) => (
    <div style={{ maxWidth: 300, padding: 15 }}>
      <TextField {...args} />
    </div>
  )
}
