const express = require('express')
const Comentario = require('../models/Comentario')

const router = express.Router()

router.get('/comentario', async (req,res) =>{
    res.send("Ok, estas en comentario");
});

router.post('/comentario', async (req, res) => {
    // Crea un nuevo comentario
    try {
        const comentario = new Comentario(req.body)
        const rest = await comentario.addComentario()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el perfil', error: error })
    }
})

router.post('/comentario/tid', async (req, res) => {
    // Trae los chat del usuario
    try {
        const { _idusuario } = req.body
        const comentario = new Comentario()
        const rest = await comentario.getComentarioByidTrabajo(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los comentario', error: error })
    }
})


module.exports = router