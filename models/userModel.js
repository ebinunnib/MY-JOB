import mongoose from 'mongoose'
import validator from 'validator'

//userschema

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is Required"]

    },
    lastname: {
        type: String
    },
    email: {
        type: String,
        required: [true, 'email is required'],
        unique: true,
        validate: validator.isEmail
    },
    password: {
        type: String,
        required: [true, 'Password is required'],
        // validate: validator.isStrongPassword,

    },
    location: {
        type: String,
        default: 'india'

    }

},
    { timestamps: true }
)

export default mongoose.model('User', userSchema)