const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const port = process.env.PORT || 4000
// const {SERVER_PORT} = process.env

app.use(express.json())
app.use(cors())
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../src/index.js'))
// })
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../src/index.html'))
// })
app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})