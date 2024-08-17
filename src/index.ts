import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello hono!')
})

export default app
