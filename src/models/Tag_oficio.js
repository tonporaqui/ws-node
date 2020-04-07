const mongoose = require('mongoose')

const TagOficioSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true
    }, 
    descripcion:{
        type: String,
        required: true
    },
    tipo:{
        type: String,
        required: true
    }
},
{
    collection: 'tagOficio',
})

TagOficioSchema.methods.addTagOficio = async function () {
// Crea un tag de oficio nuevo
const tagOficio = this
const res = await tagOficio.save()
return res
}

TagOficioSchema.methods.getAllTagOficio = async () => {
const res = await TagOficio.find( )
return res
}

const TagOficio = mongoose.model('tagOficio', TagOficioSchema)

module.exports = TagOficio