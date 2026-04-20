import { http, HttpResponse } from 'msw'

type LoginReqBody = {
  email: string
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
  )
]
