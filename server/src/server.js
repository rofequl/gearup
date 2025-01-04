const express = require('express')
const sequelize = require('./app/models')
require('dotenv').config()

const app = express()

// We provide a root route just as an example
app.get('/', (req, res) => {
    res.send(`<h2>Hello, Sequelize + Express!</h2>`)
})

// Middleware function to introduce a delay for all routes
// app.use((req, res, next) => {
//     const delayMilliseconds = 1000; // 2 seconds delay, adjust as needed
//     setTimeout(next, delayMilliseconds);
// });

async function assertDatabaseConnectionOk() {
    console.log(`Checking database connection...`)
    try {
        await sequelize.authenticate()
        console.log('Database connection OK!')
    } catch (error) {
        console.log('Unable to connect to the database:')
        console.log(error.message)
        process.exit(1)
    }
}

async function init() {
    await assertDatabaseConnectionOk()
    require('./app/Kernel')(app)
}

init().then()