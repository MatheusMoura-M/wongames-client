import { build, perBuild } from '@jackfranklin/test-data-bot'
import { faker } from '@faker-js/faker'

export type User = {
  username: string
  email: string
  password: string
}

export const createUser = build<User>('User', {
  fields: {
    username: perBuild(() => faker.internet.username()),
    password: perBuild(() => faker.internet.password()),
    email: ''
  },
  postBuild: (user) => ({
    ...user,
    email: `${user.username.toLowerCase()}+e2e@wongames.com`
  })
})
