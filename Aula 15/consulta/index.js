require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())
const axios = require('axios')
const PORT = process.env.PORT || 6000

const baseConsulta = {}

// LembreteCriado: ()=>{}
//ObservacaoCriadas: ()=>{}

const funcoes = {
    LembreteCriado: (lembrete) => {
        baseConsulta[lembrete.id] = lembrete
    },
    ObservacaoCriada: (observacao) => {
        //pegar a colecao de observacoes criadas associada ao id de lembrete da observacao recebida se ela existir senao pegar uma colecao vazia 
        //adicionar a observacao recebida a colecao 
        //atualizar a colecao de observacoes associada ao id de lembrete da observacao recebida
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes'] || []
        observacoes.push(observacao)
        baseConsulta[observacao.lembreteId]['observacoes'] = observacoes
    },
    ObservacaoAtualizada: (observacao) => {
        const observacoes = baseConsulta[observacao.lembreteId]['observacoes']
        const indice = observacoes.findIndex(o => o.id === observacao.id)
        observacoes[indice] = observacao
    }
}

app.get('/lembretes',(req,res)=>{
    res.status(200).send(baseConsulta)
})

app.post('/eventos',(req,res)=>{
    try{
        const evento = req.body // {tipo:...., dados:....}
        const funcao = funcoes[evento.tipo] 
        funcao(evento.dados)
    }
    catch (e){

    }
    res.status(200).json({msg: 'Ok'})
})

app.listen(PORT,async ()=>{
    const resp = await axios.get('http://localhost:10000/eventos')
    resp.data.forEach((evento) => {
        try{
            funcoes[evento.tipo](evento.dados)
        }catch(e){}
    })
    console.log(`Consulta. Porta ${PORT}`);
})
