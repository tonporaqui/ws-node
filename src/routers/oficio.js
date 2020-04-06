const express = require('express')
const Oficio = require('../models/Oficio')

const router = express.Router()

router.post('/oficio', async (req, res) => {
    // Crea un nuevo oficio
    try {
        const oficio = new Oficio(req.body)
        const rest = await oficio.addOficio()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear usuario', error: error })
    }
})

router.post('/oficio/uid', async (req, res) => {
    // devuelve un oficio de un usuario
    try {
        const { _idusuario } = req.body
        const rest = await Oficio.getAllOficioByIdUsuario(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error, no se encontro lo buscado', error: error })
    }
})
router.get('/oficios/all', async (req, res) => {
    // Trae todos los perfiles
    try {
        const oficio = new Oficio()
        const rest = await perfil.getAllOficio()
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error, no se encontro lo buscado', error: error })
    }
})

module.exports = router
