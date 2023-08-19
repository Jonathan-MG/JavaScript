require('dotenv').config()
const express = require('express')
const app = express()
app.use(express.json())

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

app.listen(process.env.PORT,()=>{
    console.log(`Consulta. Porta ${process.env.PORT}`);
})
