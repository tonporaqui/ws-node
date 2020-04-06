const express = require('express')
const Certificacion = require('../models/Certificacion')

const router = express.Router()

router.get('/certificado', async (req,res) =>{
    res.send("Ok, estas en certificado");
});

router.post('/certificado', async (req, res) => {
    // Crea un nuevo certificado
    try {
        const certificado = new Certificacion(req.body)
        const rest = await certificado.addCertificacion()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el perfil', error: error })
    }
})

router.post('/certificado/uid', async (req, res) => {
    // Trae los certificados del usuario
    try {
        const { _idusuario } = req.body
        const certificado = new Certificacion()
        const rest = await certificado.getCertificacionByIdUsuarion(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los certificado', error: error })
    }
})


module.exports = router