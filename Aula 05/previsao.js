require('dotenv').config()

const axios = require('axios')

const appid = process.env.APPID

const q = "São Bernardo Do Campo"

const cnt = 5

const units = "metric"

const lang = "pt_br"

const urlbase =  "https://api.openweathermap.org/data/2.5/forecast"

const urlfinal = `${urlbase}?q=${q}&appid=${appid}&cnt=${cnt}&units=${units}&lang=${lang}`

console.log(urlfinal);

axios.get(urlfinal).then(response => {
    console.log(response);   
})