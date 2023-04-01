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

axios.get(urlfinal)
.then(response => {
    // console.log(response);   
    return response.data;
})
.then(res => {
    // console.log(res);
    return res
})
.then(resultado => {
    // console.log(resultado.cnt);
    return resultado;
})
.then(resultado => {
    return resultado['list'];
})
.then(resultado => {
    for (let previsao of resultado){
        console.log("Temperatura Mínima: " + previsao.main.temp_min);
        console.log("Descrição: " + previsao.weather[0].description);    
    }
})