const app = require('../server') 
const supertest = require('supertest')
const request = supertest(app)


const db = require('../server')
beforeAll(async () => await db.connect())
afterEach(async () => await db.clearDatabase())
afterAll(async () => await db.closeDatabase())