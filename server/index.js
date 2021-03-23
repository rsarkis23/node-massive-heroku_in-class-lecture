require('dotenv').config()

const express = require('express')
const massive = require('massive')
const ctrl = require('./controller')


const app = express()

// const port = 4000
const { SERVER_PORT, CONNECTION_STRING } = process.env


app.use(express.json())

app.get('/api/items', ctrl.getItems)
app.post('/api/items', ctrl.addItem)

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
})
.then(dbInstance => {
    app.set('db', dbInstance)
    app.listen(SERVER_PORT, () => console.log(`DB connected & Server running on port ${SERVER_PORT}`))
})
.catch(err => console.log(err))



