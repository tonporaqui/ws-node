const express = require('express')
const Perfil = require('../models/Perfil')

const router = express.Router()

router.get('/perfil', async (req,res) =>{
    res.send("Ok, estas en perfil");
});

router.post('/perfil', async (req, res) => {
    // Crea un nuevo perfil
    try {
        const perfil = new Perfil(req.body)
        const rest = await perfil.addPerfil()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el perfil', error: error })
    }
})

router.get('/perfil/all', async (req, res) => {
    // Trae todos los perfiles
    try {
        const perfil = new Perfil()
        const rest = await perfil.getAllPerfil()
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los perfiles', error: error })
    }
})


module.exports = router