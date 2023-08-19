require('dotenv').config()
const { default: axios } = require('axios')
const express = require('express')
const app = express()
app.use(express.json())

const PORT = process.env.PORT || 10000

// localhost:10000/eventos
app.post('/eventos', (req,res)=>{
    // {tipo: 'LembreteCriado' , dado: {id:1, texto = "fazer Cafe"}}
    const evento = req.body
    console.log(evento)
    // Lembretes
    axios.post('http://localhost:4000/eventos',evento)

    // Observações
    axios.post('http://localhost:5000/eventos',evento)

    // Consulta
    axios.post('http://localhost:6000/eventos',evento)

    // Classificação
    axios.post('http://localhost:7000/eventos',evento)

    res.status(200).send({msg: 'ok'})
})

app.listen(
    PORT,
    () => console.log(`Barramento ${PORT}`)
)

