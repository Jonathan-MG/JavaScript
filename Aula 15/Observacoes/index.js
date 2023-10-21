// Assim que importa o .env
require('dotenv').config()
const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
app.use(express.json())
const axios = require('axios')

const observacoesPorLembreteID = {}

const funcoes = {
    ObservacaoClassificada: (observacao) => {
        // 1. Buscar obs na base local
        const observacoes = observacoesPorLembreteID[observacao.lembreteId]
        const obsParaAtualizar = observacoes.find((o) => o.id === observacao.id)
        // 2. Atualizar o status da obs na base local
        obsParaAtualizar.status = observacao.status
        // 3. Emitir um evento do tipo ObservacaoAtualizada contendo a obs atualizada
        axios.post('http://barramento-de-eventos-service:10000/eventos', {
            tipo: 'ObservacaoAtualizada',
            dados: {
                id: observacao.id,
                texto: observacao.texto,
                lembreteId: observacao.lembreteId,
                status: observacao.status
            }
        })

    }
}

// :id significa que vai alterar a cada iteração 
app.get('/lembretes/:id/observacoes', (req, res) => {
    res.json(observacoesPorLembreteID[req.params.id] || [])
})
// observação : {texto: 'Whatever'}
app.post('/lembretes/:id/observacoes', async (req, res) => {
    const idObs = uuidv4()
    const { texto } = req.body
    const obsDoLembrete = observacoesPorLembreteID[req.params.id] || []

    obsDoLembrete.push({
        id: idObs,
        texto,
        status: 'Aguardando'
    })

    observacoesPorLembreteID[req.params.id] = obsDoLembrete
    await axios.post('http://barramento-de-eventos-service:10000/eventos', {
        tipo: 'ObservacaoCriada',
        dados: {
            id: idObs,
            texto,
            lembreteId: req.params.id,
            status: 'Aguardando'
        }
    })
    // cod 201 significa que criou e esta ok 
    res.status(201).json(obsDoLembrete)
})

app.post('/eventos', function (req, res) {
    try {
        console.log(req.body)
        funcoes[req.body.tipo](req.body.dados)
    }
    catch (e) {

    }
    res.status(200).send({ msg: 'Ok' })
})

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Observações. ${PORT}`))