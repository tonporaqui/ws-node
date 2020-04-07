const mongoose = require('mongoose')

const CertificacionSchema = mongoose.Schema({
    _idUsuario:{
        type: String,
        required: true
    },
    titulo:{
        type: String,
        required: true
    }, 
    descripcion:{
        type: String,
        required: true
    },
    adjunto:{
        data: Buffer,
        contentType: String
    }
},
{
    collection: 'certificacion',
})

CertificacionSchema.methods.addCertificacion = async function () {
// Crea un Certificado nuevo
const certificacion = this
const res = await certificacion.save()
return res
}

CertificacionSchema.methods.getCertificacionByIdUsuario = async (_idUsuario) => {
    const res = await Certificacion.findOne({ _idUsuario })
    return res
}

const Certificacion = mongoose.model('certificacion', CertificacionSchema)

module.exports = Certificacion