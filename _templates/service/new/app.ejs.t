---
to: src/services/<%= service %>/app.ts
---
import Koa from 'koa'
import { router } from './<%= service %>.routes.ts'

const app = new Koa()

app.use(router.routes())

export default app