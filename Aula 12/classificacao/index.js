require('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 7000;
const axios = require('axios');

const palavraChave = 'Importante';
const funcoes = {
    ObservacaoCriada: (observacao) => {
        observacao.status = observacao.texto.includes(palavraChave) ? 'Importante' : 'Comum';
    axios.post('http://localhost:10000/eventos', {
        tipo: 'ObservacaoClassificada',
        dados: observacao
    });
    }
}

// POST host:porta/eventos
app.post('/eventos', (req, res) => {
    try{
        const evento = req.body
        // Callable
        funcoes[evento.tipo](evento.dados)
    }
    catch (e){

    }
    res.status(200).json({msg: 'Ok'})
});

app.listen(PORT, () => console.log(`Classificação. Porta ${PORT}`));