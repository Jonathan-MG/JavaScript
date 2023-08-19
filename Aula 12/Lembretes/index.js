require('dotenv').config()

//POST localhost:4000/lembretes {"texto": "Fazer Café"}
//GET localhost:4000/lembretes
const express = require('express')
const axios = require('axios')
const app = express() 
app.use(express.json())

let id = 0 
const lembretes = {}

app.post('/lembretes', (req,res)=>{
    const texto = req.body.texto
    id = id + 1
    lembretes[id] = {id,texto}
    axios.post(
        'http://localhost:10000',{
            tipo : 'LembreCriado',
            payload: {id, texto}
        }
    )
    res.status(201).json(lembretes[id])
} )

app.get('/lembretes',(req,res)=>{
    res.send(lembretes)
})

app.post('/eventos', (req,res)=>{
    console.log(req.body)
    res.end()
})

const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Lembretes. Porta ${PORT}`))

