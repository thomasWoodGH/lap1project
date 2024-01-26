const request = require('supertest')
const {app, server} = require('./index.js')
const logger = require("./logger.js")

afterAll((done) => {
    server.close(done)
})

describe("logger", () => {
    test("logger exists", () => {
        expect(logger).toBeDefined()
    })
    test("logger is a function", () => {
        expect(logger instanceof Function).toEqual(true)
    })
})

describe("get /", () => {
    test('responds with "Welcome to the questions API"', async () => {
        const response = await request(app).get('/')
        expect(response.status).toBe(200)
        expect(response.text).toBe('Welcome to the questions API')
    });
})

