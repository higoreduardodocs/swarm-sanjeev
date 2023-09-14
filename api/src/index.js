const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const colors = require('colors')

/* CONST */
const config = require('./config')
const userRoutes = require('./routes/user.route')
const postRoutes = require('./routes/post.route')

const mongoUri = `mongodb://${config.MONGO_USER}:${config.MONGO_PASS}@${config.MONGO_IP}:${config.MONGO_PORT}/${config.MONGO_DB}?authSource=admin`
const mongoOptions = { useNewUrlParser: true, useUnifiedTopology: true }
const port = process.env.PORT || 3000

/* START */
const app = express()

app.use(express.json())
app.enable('trust proxy')
app.use(cors({}))

/* MONGOOSE CONNECT */
const connectWithRetry = () => {
  mongoose.set('strictQuery', true)
  mongoose
    .connect(mongoUri, mongoOptions)
    .then(() => console.log(`Conneted to Mongo`.bgMagenta.white))
    .catch((e) => {
      console.log(`${error} did not connect db`.bgRed.white)
      setTimeout(connectWithRetry, 5000)
    })
}
connectWithRetry()

app.use('/api/v1/users', userRoutes)
app.use('/api/v1/posts', postRoutes)

app.listen(port, (error) => {
  if (error) console.log(`${error} did not connect server`.bgRed.white)
  console.log(`http://localhost:${port}`)
})