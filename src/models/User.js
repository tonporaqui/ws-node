import { Schema, model } from 'mongoose'
import { isEmail } from 'validator'
import { hash, compare } from 'bcryptjs'
import { sign } from 'jsonwebtoken'

const userSchema = Schema({
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
            if (!isEmail(value)) {
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
    _idperfil:{
        type: String,
        required: true,
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
    status:{
        type: Number,
        required: true, 
        min: 0, 
        max: 2 
    },
    imagen:{ 
        data: Buffer, 
        contentType: String 
    },
    calificacion:{
        type: Number
    }
},{
    collection: 'usuario',
})

userSchema.pre('save', async function (next) {
    // Hash the password before saving the user model
    const user = this
    if (user.isModified('password')) {
        user.password = await hash(user.password, 8)
    }
    next()
})

userSchema.methods.generateAuthToken = async function() {
    // Generate an auth token for the user
    const user = this
    const token = sign({_id: user._id}, process.env.JWT_KEY)
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
    const isPasswordMatch = await compare(password, user.password)
    if (!isPasswordMatch) {
        throw new Error({ error: 'Invalid login credentials' })
    }
    return user
}

const User = model('User', userSchema)

export default User