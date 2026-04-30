import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import Footer from '.'

const meta = {
  title: 'Main/Footer',
  component: () => (
    <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
      <Footer />
    </div>
  )
} satisfies Meta<typeof Footer>

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {}
