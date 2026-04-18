import Button from '@/components/Button'
import {
  FormError,
  FormLink,
  FormLoading,
  FormWrapper
} from '@/components/Form'
import TextField from '@/components/TextField'
import { UsersPermissionsRegisterInput } from '@/graphql/generated/globalTypes'
import { MUTATION_REGISTER } from '@/graphql/mutations/register'
import { FieldErrors, signUpValidate } from '@/utils/validations'
import { useMutation } from '@apollo/client'
import { AccountCircle } from '@styled-icons/material-outlined/AccountCircle'
import { Email } from '@styled-icons/material-outlined/Email'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { Lock } from '@styled-icons/material-outlined/Lock'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'

const FormSignUp = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})

  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onError: (err) =>
      setFormError(
        err?.graphQLErrors?.[0]?.message ||
          err?.graphQLErrors?.[0]?.extensions?.error?.message
      ),
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    }
  })

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      setFormError('')

      const errors = signUpValidate(values)

      if (Object.keys(errors).length) {
        setFieldError(errors)
        return
      }

      setFieldError({})

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
      {!!formError && (
        <FormError>
          <ErrorOutline /> {formError}
        </FormError>
      )}

      <form onSubmit={handleSubmit}>
        <TextField
          name="username"
          placeholder="Username"
          type="text"
          error={fieldError?.username}
          onInputChange={(value) => handleInput('username', value)}
          icon={<AccountCircle />}
        />
        <TextField
          name="email"
          placeholder="Email"
          type="text"
          error={fieldError?.email}
          onInputChange={(value) => handleInput('email', value)}
          icon={<Email />}
        />
        <TextField
          name="password"
          placeholder="Password"
          type="password"
          error={fieldError?.password}
          onInputChange={(value) => handleInput('password', value)}
          icon={<Lock />}
        />
        <TextField
          name="confirm_password"
          placeholder="Confirm password"
          type="password"
          error={fieldError?.confirm_password}
          onInputChange={(value) => handleInput('confirm_password', value)}
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
