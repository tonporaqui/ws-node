const express = require('express')
const Contacto = require('../models/Contacto')

const router = express.Router()

router.get('/contacto', async (req,res) =>{
    res.send("Ok, estas en contacto");
});

router.post('/contacto', async (req, res) => {
    // Crea un nuevo comentario
    try {
        const contacto = new Contacto(req.body)
        const rest = await contacto.addContacto()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el contacto', error: error })
    }
})

router.post('/contacto/pid', async (req, res) => {
    // Trae los chat del usuario
    try {
        const { _idusuario } = req.body
        const contacto = new Contacto()
        const rest = await comentario.getContactoByidProfesional(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los contacto', error: error })
    }
})

router.post('/contacto/cid', async (req, res) => {
    // Trae los contacto del usuario
    try {
        const { _idusuario } = req.body
        const contacto = new Contacto()
        const rest = await comentario.getContactoByidContacta(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los contacto', error: error })
    }
})


module.exports = router