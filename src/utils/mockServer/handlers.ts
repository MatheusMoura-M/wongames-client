import { http, HttpResponse } from 'msw'

type LoginReqBody = {
  email: string
}

type ResetReqBody = {
  code: string
  password: string
  passwordConfirmation: string
}

export const handlers = [
  http.post<LoginReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/forgot-password`,
    async ({ request }) => {
      const body = (await request.json()) as LoginReqBody
      const { email } = body

      // erro
      if (email === 'false@email.com') {
        return HttpResponse.json(
          {
            error: {
              name: 'Bad Request',
              message: 'This email does not exist'
            }
          },
          { status: 400 }
        )
      }

      // sucesso
      return HttpResponse.json({ ok: true }, { status: 200 })
    }
  ),

  http.post<ResetReqBody>(
    `${process.env.NEXT_PUBLIC_API_URL}/api/auth/reset-password`,
    async ({ request }) => {
      const body = (await request.json()) as ResetReqBody
      const { code } = body

      // erro
      if (code === 'wrong_code') {
        return HttpResponse.json(
          {
            error: {
              name: 'Bad Request',
              message: 'Incorrect code provided.'
            }
          },
          { status: 400 }
        )
      }

      // sucesso
      return HttpResponse.json(
        {
          user: {
            email: 'valid@email.com'
          }
        },
        { status: 200 }
      )
    }
  )
]
