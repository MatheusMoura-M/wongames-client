// global.fetch = require('node-fetch')
// import fetch from 'node-fetch'

// global.fetch = fetch as unknown as typeof global.fetch

import { server } from '@/utils/mockServer/server'

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())
