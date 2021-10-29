import express from 'express'

const app = express()

app.use(express.json({ extended: true }));
app.use(express.urlencoded({ extended: true }))

const port = process.env.PORT || 80
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`)
})