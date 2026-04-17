import Button from '@/components/Button'
import {
  FormError,
  FormLink,
  FormLoading,
  FormWrapper
} from '@/components/Form'
import TextField from '@/components/TextField'
import { Email } from '@styled-icons/material-outlined/Email'
import { Lock } from '@styled-icons/material-outlined/Lock'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import * as S from './styles'
import { FieldErrors, signInValidate } from '@/utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: '', password: '' })

  const [isLoading, setIsLoading] = useState(false)

  const { push } = useRouter()

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsLoading(true)

    try {
      const errors = signInValidate(values)

      if (Object.keys(errors).length) {
        setFieldError(errors)
        setIsLoading(false)
        return
      }

      setFieldError({})

      const result = await signIn('credentials', {
        ...values,
        redirect: false,
        callbackUrl: '/'
      })

      if (result?.url) {
        return push(result?.url)
      }

      setFormError('username or password is invalid')
    } catch (error) {
      console.error('Error [handleSubmit - FormSignIn]', error)
    } finally {
      setIsLoading(false)
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
          name="email"
          placeholder="Email"
          type="email"
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

        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        <Button type="submit" size="large" fullWidth disabled={isLoading}>
          {isLoading ? <FormLoading /> : 'Sign in now'}
        </Button>

        <FormLink>
          Don’t have an account? <Link href="/sign-up">Sign up</Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
