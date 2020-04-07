const mongoose = require('mongoose')

const ResueltoSchema = mongoose.Schema({
    _idTrabajo: {
        type: String,
        required: true
    },
    fecha: {
        type: Date,
        default: Date.now
    },
    adjuntos: [{
        adjunto:{
            Data: Buffer,
            contentType: String
        }
    }]
},
{
    collection: 'resuelto'
})
ResueltoSchema.methods.addResuelto = async function () {
    const resuelto = this
    const res = await resuelto.save()
    return res
}

ResueltoSchema.methods.getResueltoByidTrabajo = async (_idTrabajo) => {
    //trae el contacto por el id de usuario Profesional
    const res = await Resuelto.findOne({'_idTrabajo' :  _idTrabajo })
    return res
}

const Resuelto = mongoose.model('resuelto', ResueltoSchema)

module.exports =  Resuelto