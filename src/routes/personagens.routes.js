import { Router } from "express"

const personagensroutes = Router()

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