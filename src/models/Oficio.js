const mongoose = require('mongoose')

const oficioSchema = mongoose.Schema({
    _idusuario: {
        type: String,
        required: true,
        unique: true,
    },
    oficios:[
        {
            nombre: {
                type: String,
                required: true
            },

            descripcion: {
                type: String,
                required: true
            },
            horas: {
                type: String,
                required: true
            },
            sectores:[
                {
                    comuna: {
                        type: String,
                        required: true
                    }
                }
            ]
        }
    ],
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