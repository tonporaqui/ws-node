const mongoose = require('mongoose')

const oficioSchema = mongoose.Schema({
    _idusuario: String,
    oficios:[
        {
            nombre: {
                type: String,
                require: true
            },

            descripcion: {
                type: String,
                require: true
            },
            horas: {
                type: String,
                require: true
            },
            sectores:[
                {
                    comuna: {
                        type: String,
                        require: true
                    }
                }
            ]
        }
    ]
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