// eslint-disable-next-line @typescript-eslint/no-require-imports
const useSession = jest.spyOn(require('next-auth/react'), 'useSession')
const session = { jwt: '123', user: { email: 'lorem@ipsum.com' } }
useSession.mockImplementation(() => ({ data: session }))
