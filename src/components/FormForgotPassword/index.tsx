import { FieldErrors, forgotValidate } from '@/utils/validations'
import { CheckCircleOutline } from '@styled-icons/material-outlined/CheckCircleOutline'
import { Email } from '@styled-icons/material-outlined/Email'
import { ErrorOutline } from '@styled-icons/material-outlined/ErrorOutline'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Button from '../Button'
import { FormError, FormLoading, FormSuccess, FormWrapper } from '../Form'
import TextField from '../TextField'

const FormForgotPassword = () => {
  const { query } = useRouter()

  const [success, setSuccess] = useState(false)
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({ email: (query.email as string) || '' })
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (query.email && !values.email) {
      setValues((prev) => ({
        ...prev,
        email: query.email as string
      }))
    }
  }, [query.email, values.email])

  const handleInput = (field: string, value: string) => {
    setValues((s) => ({ ...s, [field]: value }))
  }

  const handleSubmit = async (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault()
    setLoading(true)

    const errors = forgotValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    // enviar um post para /forgot-password pedindo um email
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }
    )

    const data = await response.json()

    setLoading(false)

    if (data.error) {
      setFormError(data.error.message)
    } else {
      setSuccess(true)
    }
  }

  return (
    <FormWrapper>
      {success ? (
        <FormSuccess>
          <CheckCircleOutline />
          You just received an email!
        </FormSuccess>
      ) : (
        <>
          {!!formError && (
            <FormError>
              <ErrorOutline /> {formError}
            </FormError>
          )}
          <form onSubmit={handleSubmit}>
            <TextField
              name="email"
              placeholder="Email"
              type="text"
              error={fieldError?.email}
              initialValue={query.email as string}
              onInputChange={(v) => handleInput('email', v)}
              icon={<Email />}
            />

            <Button type="submit" size="large" fullWidth disabled={loading}>
              {loading ? <FormLoading /> : <span>Send email</span>}
            </Button>
          </form>
        </>
      )}
    </FormWrapper>
  )
}

export default FormForgotPassword
