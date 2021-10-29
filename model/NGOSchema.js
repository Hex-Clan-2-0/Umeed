import mongoose from 'mongoose'

const NGO = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    telephone: {
        type: String,
    },
    address: {
        type: {
            city: String,
            state: String,
            country: String,
            pincode: String
        },
        required: true
    }
});

const City = new mongoose.Schema({
    city: {
        type: String,
        required: true
    },
    Ngo_collections: [NGO]
})
const ngoModel = new mongoose.model('NGO', NGO);
const cities = new mongoose.model('cities', City);

export { cities, ngoModel }