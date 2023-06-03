require('dotenv').config()
const {
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    PG_PORT,
    PORT
} = process.env
const { Client } = require('pg')
const express = require('express')
const { ssl } = require('pg/lib/defaults')
const app = express()
app.use(express.json())

app.get('/medicos', (req,res) => {
    const client = new Client({
        host: PG_HOST,
        user: PG_USER,
        password: PG_PASSWORD,
        database: PG_DATABASE,
        port: PG_PORT
    })
    client.connect()
    client.query('SELECT * FROM tb_medico')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
        client.end()
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
        client.end()
    })
})

app.get('/pacientes', (req,res) => {
    const client = new Client({
        host: PG_HOST,
        user: PG_USER,
        password: PG_PASSWORD,
        database: PG_DATABASE,
        port: PG_PORT
    })
    client.connect()
    client.query('SELECT * FROM tb_paciente')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
        client.end()
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
        client.end()
    })
})

app.post('/adicionar-medico', (req,res) => {
    const client = new Client({
        host: PG_HOST,
        user: PG_USER,
        password: PG_PASSWORD,
        database: PG_DATABASE,
        port: PG_PORT
    })
    const crm = req.body.crm
    const nome = req.body.nome
    client.connect()
    client.query('INSERT INTO tb_medico (crm, nome) VALUES ($1, $2)',[crm,nome])
    .then(() => {
        res.send(200).json("Ok!")
        client.end()
    })
    .catch(e => {
        console.log(2)
        res.send(500).end()
        client.end()
    })

})

app.listen(
    PORT,
    () => console.log(`Servidor OK. Porta: ${PORT}`)
)