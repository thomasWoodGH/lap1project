const express = require('express')
const cors = require('cors')
const logger = require('./logger')
const port = 3000
const questions = require('./questions.json')
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send("Welcome to the questions API")
})

app.get('/questions', (req, res) => {
    res.send(questions)
})

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})