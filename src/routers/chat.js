const express = require('express')
const Chat = require('../models/Chat')

const router = express.Router()

router.get('/chat', async (req,res) =>{
    res.send("Ok, estas en chat");
});

router.post('/chat', async (req, res) => {
    // Crea un nuevo chat
    try {
        const chat = new Chat(req.body)
        const rest = await chat.addChat()
        res.status(201).send(rest)
    } catch (error) {
        res.status(400).send({mensaje:'Error al crear el perfil', error: error })
    }
})

router.post('/chat/uid', async (req, res) => {
    // Trae los chat del usuario
    try {
        const { _idusuario } = req.body
        const chat = new Chat()
        const rest = await chat.getChatByidContacto(_idusuario)
        res.status(201).send(rest)
    } catch (error) {
         res.status(400).send({mensaje:'Error al traer los chat', error: error })
    }
})


module.exports = router