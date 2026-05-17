import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})
