const express = require('express')
const Trabajo = require('../models/Trabajo')

const router = express.Router()

router.get('/trabajo', async (req,res) =>{
    res.send("Ok, estas en trabajo");
});

router.post('/trabajo', async (req, res) => {
    // Crea un nuevo trabajo
    try {
        const trabajo = new Trabajo(req.body)
        const rest = await trabajo.addTrabajo()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el trabajo', error: error })
    }
})

router.post('/trabajo/cid', async (req, res) => {
    // Trae los trabajo del usuario
    try {
        const { _idusuario } = req.body 
        const trabajo = new Trabajo()
        const rest = await trabajo.getTrabajoByidContacto(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los tagoficio', error: error })
    }
})

module.exports = router