const express = require('express')
const Tag_oficio = require('../models/Tag_oficio')

const router = express.Router()

router.get('/tagoficio', async (req,res) =>{
    res.send("Ok, estas en tagoficio");
});

router.post('/tagoficio', async (req, res) => {
    // Crea un nuevo tagoficio
    try {
        const tagoficio = new Tag_oficio(req.body)
        const rest = await tagoficio.addTagOficio()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el tagoficio', error: error })
    }
})

router.get('/tagoficio/all', async (req, res) => {
    // Trae los tagoficio del usuario
    try {
        const tagoficio = new Tag_oficio()
        const rest = await tagoficio.getAllTagOficio(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los tagoficio', error: error })
    }
})

module.exports = router