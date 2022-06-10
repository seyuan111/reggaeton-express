const express = require('express');
const app = express()
const PORT = 5000

let reggaeton = {
    "Lunay": {
        "Birthname": "Jefnier Osorio Moreno",
        "Age": 21,
        "Birthplace": "Puerto Rico",
        "Music": "Soltera"
    },
    "Bad Bunny": {
        "Birthname": "Benito Antonio Martínez Ocasio",
        "Age": 28,
        "Birthplace": "Puerto Rico",
        "Song" : "Party"
    },
    "Ozuna": {
        "Birthname": "Juan Carlos Ozuna Rosado",
        "Age": 30,
        "Birthplace": "Puerto Rico",
        "Song": "Se Preparo"
    },
    "Farruko": {
        "Birthname": "Carlos Efrén Reyes Rosado",
        "Age": 31,
        "Birthplace": "Puerto Rico",
        "Song": "Nazareno"
    },
    "Rauw Alejandro": {
        "Birthname": "Raúl Alejandro Ocasio Ruiz",
        "Age": 29,
        "Birthplace": "Puerto Rico",
        "Song": "MUSEO"
    },
    "Karol G": {
        "Birthname": "Carolina Giraldo Navarro",
        "Age": 31,
        "Birthplace": "Colombia",
        "Song": "Provenza"
    },
    "Becky G": {
        "Birthname": "Rebbeca Marie Gomez",
        "Age": 25,
        "Birthplace": "Mexico",
        "Song": "Mayores"
    },
    "Ryan Castro": {
        "Birthname": "Ryan Castro",
        "Age": 28,
        "Birthplace": "Colombia",
        "Song": "Mujeriego"
    },
    "Anuel AA": {
        "Birthname": "Emmanuel Gazmey Santiago",
        "Age": 29,
        "Birthplace": "Puerto Rico",
        "Song": "Ella Quiere Beber"
    },
    "Nicky Jam": {
        "Birthname": "Nick Rivera Caminero",
        "Age": 41,
        "Birthplace": "Massachusetts",
        "Song": "Si Tu La Ves"
    },
}

app.get('/', (request,response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api', (request,response) => {
    response.json(reggaeton)
})

app.get('/api/:name', (request,response) => {
    const ReggaetonName = request.params.name
    if(reggaeton[ReggaetonName]){
        response.json(reggaeton[ReggaetonName]);
    }else{
        response.json('unknown')
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`server running on PORT ${PORT}`)
})