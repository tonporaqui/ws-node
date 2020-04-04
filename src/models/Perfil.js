import { Schema, model } from 'mongoose'

const perfilSchema = Schema({
        nombre: String,
        descripcion: String,
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

const Perfil = model('perfil', perfilSchema)

export default Perfil