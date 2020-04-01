const mongoose = require('mongoose')

const oficioSchema = mongoose.Schema({
    _idusuario: {
        type: String,
        required: true,
        unique: true,
    },
    oficios:[
        {
            nombre: String,
            descripcion: String,
            valorHora: String
        }
    ],
    sectores:[
        {
            comuna: String
        }
    ],
    certificados:[{
        nombre:{
            type: String
        },
        descripcion:{
            type: String
        },
        adjunto:{
            type: Buffer,
            contentType: String
        }
    }]
},
{
    collection: 'oficio',
})

oficioSchema.methods.addOficio = async function () {
    // Crea un oficio nuevo
    const oficio = this
    const res = await oficio.save()
    return res
}

oficioSchema.methods.getAllOficio = async () => {
    const res = await Oficio.find( )
    return res
}

oficioSchema.methods.getAllOficioByIdUsuario = async (_idusuario) => {
    const res = await Oficio.findOne({ _idusuario })
    return res
}

const Oficio = mongoose.model('oficio', oficioSchema)

module.exports = Oficio