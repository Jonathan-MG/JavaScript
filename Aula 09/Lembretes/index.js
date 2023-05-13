require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

//Usa {} e não [] pois com {} o tempo de busca nã varia, já com [] é linear.
let id = 0
const Lembretes = {}

//POST localhost:4000/Lembretes {"texto": "Fazer café."}
app.post('/Lembretes', (req, res) => {
    const texto = req.body.texto
    id ++
    // Lembretes[id] = {id: id, texto: texto} - quando o nome da chave é o mesmo do conteudo, só precisa colocar uma vez.
    Lembretes[id] = {id, texto}
    res.status(201).json(Lembretes[id])
})

//GET localhost:4000/Lembretes
app.get('/Lembretes', (req, res) => {
    res.send(Lembretes)
})

const PORT = process.env.PORT || 4000
app.listen(PORT, () => console.log(`Lembretes. Porta ${PORT}`))