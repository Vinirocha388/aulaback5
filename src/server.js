import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000
const app = express()

app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Nojinho",
        cor: "Verde"
    },

    {
        id: 2,
        nome: "Ansiedade",
        cor: "Laranja"
    },

    {
        id: 3,
        nome:"Raiva",
        cor: "Vermelho"
    },
]

app.get("/", (req, res) => {
    return res.status(200).send({ message:"Hello World!"})
})


app.get("/emocoes", (req, res) => {
    return res.status(200).send( emocoes )
})

const personagens = [   
    {   
        id:100,
        nome: "Totoro",
        vivo: true
    },

    {   
        id:101,
        nome: "Shrek",
        filme: "Shrek 1,2,3,4",
        vivo: true
        
    },

    {   
        id:102,
        nome: "Jakob",
         filme: "Velozes e furiosos X",
        vivo: false

    }
]

app.get("/personagens", (req, res) => {
    return res.status(200).send( personagens )
})


app.get("/2tds2", (req, res) => {
    return res.status(200).send({ message:"Hello World!"})
})

app.listen(serverPort, () => {  
    console.log(`☢ Server started on http://localhost:${serverPort}`)
})