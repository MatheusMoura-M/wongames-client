import { defineConfig } from 'cypress'

export default defineConfig({
  allowCypressEnv: false,
  chromeWebSecurity: false,
  defaultCommandTimeout: 20000,
  e2e: {
    baseUrl: 'http://localhost:3000'
  }
})
