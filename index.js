

const express = require('express');
const app = express();


app.use('/',(req, res)=>{
    res.end('Hola desde el servidors')
})


app.listen(3000,()=>{
    console.log('hola mundo')
})