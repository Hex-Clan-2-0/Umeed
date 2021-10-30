import express from 'express'
import dotenv from 'dotenv'
import db from './model/db.js'
import cors from 'cors'
import router from './routes/routes.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))
app.use('/', router);

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})