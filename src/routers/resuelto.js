const express = require('express')
const Resuelto = require('../models/Resuelto')

const router = express.Router()

router.get('/resuelto', async (req,res) =>{
    res.send("Ok, estas en resuelto");
});

router.post('/resuelto', async (req, res) => {
    // Crea un nuevo resuelto
    try {
        const resuelto = new Resuelto(req.body)
        const rest = await resuelto.addResuelto()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el resuelto', error: error })
    }
})

router.post('/resuelto/tid', async (req, res) => {
    // Trae los resuelto del usuario
    try {
        const { _idusuario } = req.body
        const resuelto = new Resuelto()
        const rest = await resuelto.getResueltoByidTrabajo(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los resuelto', error: error })
    }
})

module.exports = router