// Esse cabeçalho é como a importação de pacotes é feita no javascript
require('dotenv').config()
const express = require ('express')
const app = express()
const {v4:uuidv4} = require('uuid')

app.use(express.json())


const observacoesPorLembreteID = {}

app.get('/Lembretes/:id/Observacoes', (req, res) => {
    res.json(observacoesPorLembreteID[req.params.id] || [])
})

// observacao: {texto: 'Whatever'}
app.post('/Lembretes/:id/Observacoes', (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const observacoesDoLembrete = observacoesPorLembreteID[req.params.id] || []
    observacoesDoLembrete.push({id: idObs, texto})
    observacoesPorLembreteID[req.params.id] = observacoesDoLembrete
    res.status(201).json(observacoesDoLembrete)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`Observações. Porta ${PORT}`))