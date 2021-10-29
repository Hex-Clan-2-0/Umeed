import mongoose from 'mongoose'

const User = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        min: 60,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    phone: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: {
            city: String,
            state: String,
            country: String,
            pincode: String
        }
    }
})

const usermodel = new mongoose.model('users', User);

export default usermodel