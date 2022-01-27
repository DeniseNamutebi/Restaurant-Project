const express = require('express');
const bodyParser = require(body-parser);

const app = express();

app.use(bodyParser.json());





const server = app.listen(process.env.port||3001, () => {
    console.log('server is running')
})

module.exports = {
    server
}