import Koa from 'koa'
import Router from 'koa-router'

export const router = new Router()

router.get('/user/:id', (ctx: Koa.Context) => {
    ctx.body = {
        id: 1,
        name: 'Roger',
        email: 'person@example.com',
    }
})