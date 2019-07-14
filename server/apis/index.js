const app = require('express')()
module.exports = { path: '/api', handler: app }

app.use("/hello", require("./helloworld"))