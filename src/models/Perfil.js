const mongoose = require('mongoose')

const perfilSchema = mongoose.Schema({
        nombre: String,
        descripcion: String,
        cod: String,
    },
    {
        collection: 'perfil',
    })

perfilSchema.methods.addPerfil = async function () {
    // Crea un perfil nuevo
    const perfil = this
    const res = await perfil.save()
    return res
}

perfilSchema.methods.getAllPerfil = async () => {
    const res = await Perfil.find( )
    return res
}

const Perfil = mongoose.model('perfil', perfilSchema)

module.exports = Perfil