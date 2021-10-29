import express from 'express'
import usermodel from '../model/User.js';
const router = express.Router();


router.post('/create', (req, res) => {
    const data = req.body
    const user = new usermodel(data);
    user.save().then(response => {
        return res.status(200).json(response)
    }).catch(err => {
        return res.status(404).json({
            message: err.message
        })
    })
})

router.post('/get', (req, res) => {
    const { email } = req.body
    usermodel.find({ email }, (err, docs) => {
        if (err) {
            return res.status(500).json({
                message: err.message
            })
        }
        else {
            return res.status(200).json(docs);
        }
    })
})

export default router;