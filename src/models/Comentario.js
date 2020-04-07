const mongoose = require('mongoose')

const ComentarioSchema = mongoose.Schema({
    _idTrabajo:{
        type: String,
        required: true
    },
    comentario: {
        type: String,
        required: true
    },
    calificacion: {
        type: Number,
        required: true
    }
},
{
    collection: 'comentario'
})
ComentarioSchema.methods.addComentario = async function () {
    const comentario = this
    const res = await comentario.save()
    return res
}

ComentarioSchema.methods.getComentarioByidTrabajo = async (_idTrabajo) => {
    //trae el contacto por el id de usuario Profesional
    const res = await Comentario.findOne({'_idTrabajo' :  _idTrabajo })
    return res
}

const Comentario = mongoose.model('comentario', ComentarioSchema)

module.exports = Comentario