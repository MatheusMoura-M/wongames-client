// import NextAuth from 'next-auth'
// import { JWT } from 'next-auth/jwt'

// Ou usa imports como acima, ou export {} como abaixo para TypeScript tratar module augmentation
export {}

declare module 'next-auth' {
  interface Session {
    jwt?: string
    id?: string
  }

  interface User {
    id: string
    documentId: string
    email: string
    username: string
    jwt?: string
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string
    documentId?: string
    email?: string
    name?: string
    jwt?: string
  }
}
