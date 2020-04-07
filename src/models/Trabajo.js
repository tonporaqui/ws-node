const mongoose = require('mongoose')

const TrabajoSchema = mongoose.eSchema({
    _idContacto:{
        type:String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    status: {
        type: Number,
        min: 0,
        max: 1
    }
},
{
    collection: 'trabajo',
})

TrabajoSchema.methods.addTrabajo = async function () {
const trabajo = this
const res = await trabajo.save()
return res
}

TrabajoSchema.methods.getTrabajoByidContacto = async (_idContacto) => {
    //trae el contacto por el id de usuario Profesional
    const res = await Trabajo.findOne({'_idContacto' :  _idContacto })
    return res
}


const Trabajo = mongoose.model('trabajo', TrabajoSchema)

module.exports =  Trabajo