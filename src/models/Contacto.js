import { Schema,model  } from "mongoose";

const ContactoSchema = Schema({
    _idUsuarioContacta: {
        type: String,
        required: true
    },
    _idUsuarioPresional: {
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    tipo:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    adjunto: {
        data: Buffer,
        contentType: String
    }
},
{
    collection: 'contacto',
})

ContactoSchema.methods.addContacto = async function () {
const contacto = this
const res = await contacto.save()
return res
}

ContactoSchema.methods.getContactoByidProfesional = async (_idProfesional) => {
    //trae el contacto por el id de usuario Profesional
    const res = await Contacto.findOne({'_idUsuarioPresional' :  _idProfesional })
    return res
}

ContactoSchema.methods.getContactoByidContacta = async (_idUsuario) => {
    //trae el contacto por el id de usuario contacta
    const res = await Contacto.findOne({'_idUsuarioContacta' :  _idUsuario })
    return res
}

const Contacto = model('contacto', ContactoSchema)

export default Contacto