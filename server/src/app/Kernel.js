const {createServer} = require('node:http')
const yoga = require('./graphql')
const PORT = process.env.PORT || 3000

module.exports = () => {
    const server = createServer(yoga);
    server.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}/graphql`)
    })
}