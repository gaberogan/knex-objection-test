const Koa = require('koa')
const Knex = require('knex')
const { Model } = require('objection')
const { Person } = require('./models/Person')
const knexConfig = require('./knexfile')
const Router = require('koa-router')
const cors = require('@koa/cors')

const server = new Koa()

const router = new Router()

const knex = Knex(knexConfig.development)

Model.knex(knex) // Bind knex instance to objection Models

router.get('/', async (ctx, next) => {
    const person = await Person.query().limit(1)
    const post = await person[0].$relatedQuery('posts').limit(1)
    ctx.body = JSON.stringify(post[0])
})

server.use(cors())
server.use(router.routes())
server.use(router.allowedMethods())

server.listen(3000)

// make a blog app where you can login, post, and add friends.
// your home page will be your friends' posts

// first make a db to hold posts and friends tables
// then do higher leverage stuff first

// you'll want docker, knex + objection, koa, relations/joins, debug, postman