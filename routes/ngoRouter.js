import express from 'express'
import { cities, ngoModel } from '../model/NGOSchema.js'

const router = express.Router();

router.post('/update', (req, res) => {
    const { name, email, telephone, address } = req.body
    const ngo = new ngoModel({
        name: name,
        email: email,
        telephone: telephone,
        address: address
    })
    const { city } = address
    cities.findOneAndUpdate({ city }, {
        $set: { city: city },
        $push: { "Ngo_collections": ngo }

    }, { upsert: true, new: true }, (err, docs) => {
        if (err) {
            return res.send(err.message);
        }
        else {
            return res.send(docs);
        }
    })
})

router.get('/:city', (req, res) => {
    const { city } = req.params
    cities.find({ 'city': city })
        .then(response => {
            res.status(200).json(response);
        }).catch(err => {
            res.status(404).json({
                message: err.message
            })
        })
})

export default router;