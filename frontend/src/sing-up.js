


/*prática de criação de servior */
const express = require('express')
const server = express()

server.get('',(req,res) => {
    res.send('Server Online')
})

const port = 4000;

server.listen(port, () => {
    console.log('Server connect to port:',port)
})