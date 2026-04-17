import Button from '@/components/Button'
import { FormLink, FormLoading, FormWrapper } from '@/components/Form'
import TextField from '@/components/TextField'
import { UsersPermissionsRegisterInput } from '@/graphql/generated/globalTypes'
import { MUTATION_REGISTER } from '@/graphql/mutations/register'
import { useMutation } from '@apollo/client'
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/material-outlined/Lock'
import Link from 'next/link'
import { useState } from 'react'

const FormSignUp = () => {
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { loading }] = useMutation(MUTATION_REGISTER)

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      createUser({
        variables: {
          input: {
            username: values.username,
            email: values.email,
            password: values.password
          }
        }
      })
    } catch (error) {
      console.error('Error [handleSubmit - FormSignUp]', error)
    }
  }

  return (
    <FormWrapper>
      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="email"
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          onInputChange={(value) => handleInput('confirm-password', value)}
          icon={<Lock />}
        />

        <Button type="submit" size="large" fullWidth disabled={loading}>
          {loading ? <FormLoading /> : 'Sign up now'}
        </Button>

        <FormLink>
          Already have an account? <Link href="/sign-in">Sign in</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
