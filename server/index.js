const express = require('express')
const cors = require('cors')
const logger = require("./logger")
const port = 3000
const app = express()

app.use(cors())
app.use(express.json())
app.use(logger)

app.get('/', (req, res) => {
    res.send("Welcome to the questions API")
})

app.listen(port, () => {
    console.log(`API listening on port ${port}.`);
})