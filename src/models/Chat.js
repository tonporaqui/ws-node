const mongoose = require('mongoose')

const ChatSchema = mongoose.Schema({
    _idContacto: {
        type: String,
        required: true
    },
    mensajes:[{
        mensaje:{
            type:String
        },
        _idUsuario: {
            type:String,
        },
        fecha: {
            type: Date,
            default: Date.now
        }
    }]
},
{
    collection: 'chat',
})

ChatSchema.methods.addChat = async function () {
const chat = this
const res = await chat.save()
return res
}

ChatSchema.methods.getChatByidContacto = async (_idContacto) => {
    //trae el contacto por el id de usuario Profesional
    const res = await Chat.findOne({'_idContacto' :  _idContacto })
    return res
}


const Chat = mongoose.model('chat', ChatSchema)

module.exports = Chat