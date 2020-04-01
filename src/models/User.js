const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    nested: {
        firstName: { type: String },
        lastName: { type: String }
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email address'})
            }
        }
    },
    rut: {
        type: String,
        required: true,
        minLength: 13
    },
    password: {
        type: String,
        required: true,
        minLength: 7
    },
    perfil:{
        type: String,
        required: true,
    },
    pictur:{
        data: Buffer, 
        contentType: String 
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    direccion:{
        nombreCalle:{
            type: String
        },
        numeracion:{
            type:String
        },
        comuna:{
            type: String
        },
        region:{
            type:String
        },
        pais:{
            type: String
        }
    },
    status:{
        type: Number, 
        min: 0, 
        max: 2 
    }
},{
    collection: 'usuario',
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await bcrypt.hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = jwt.sign({_id: user._id}, process.env.JWT_KEY)
    user.tokens = user.tokens.concat({token})
    await user.save()
    return token
}

userSchema.statics.findByCredentials = async (email, password) => {
    // Search for a user by email and password.
    const user = await User.findOne({ email} )
    if (!user) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const User = mongoose.model('User', userSchema)

module.exports = User