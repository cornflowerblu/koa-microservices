import Koa from 'koa'
import { router } from './user.routes'

const app = new Koa()

app.use(router.routes())

export default app
