import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.json({ 
    status: "OK", 
    message: 'Hello, Hono!',
    serverTime: Date.now()
  })
})

export default {
  fetch: app.fetch,
  port: 3001
}
