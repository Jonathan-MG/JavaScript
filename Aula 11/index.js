require('dotenv').config()
const {
    PG_HOST,
    PG_USER,
    PG_PASSWORD,
    PG_DATABASE,
    PG_PORT,
    PORT
} = process.env
const { Pool } = require('pg')
const express = require('express')
const { ssl } = require('pg/lib/defaults')
const app = express()
app.use(express.json())

const pool = new Pool({
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
    port: PG_PORT
})

pool.on('error', (err,client) => {
    console.error('Erro inexperado com o client', err)
    process.exit(-1)
})

app.get('/medicos', (req,res) => {
    pool.query('SELECT * FROM tb_medico')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })
})

app.get('/pacientes', (req,res) => {
    pool.query('SELECT * FROM tb_paciente')
    .then(db_Result => {
        res.status(200).json(db_Result.rows)
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })
})

app.post('/adicionar-medico', (req,res) => {
    const crm = req.body.crm
    const nome = req.body.nome
    pool.query('INSERT INTO tb_medico (crm, nome) VALUES ($1, $2)',[crm,nome])
    .then(() => {
        res.status(200).json("Ok!")
    })
    .catch(e => {
        console.log(e)
        res.status(500).end()
    })

})

app.listen(
    PORT,
    () => console.log(`Servidor OK. Porta: ${PORT}`)
)