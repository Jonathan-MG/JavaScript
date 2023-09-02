const express = require('express')
const app = express()
app.use(express.json())

app.get('/hey-docker',(req,res)=>{
    res.status(200).json({
        mensagem: "Hey, Docker!"
    })
})

app.listen(50000,()=> console.log('up and running inside Docker'))

