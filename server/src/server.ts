import app from './app'
import dotenv from 'dotenv'
import os from 'os'
dotenv.config()

const port = process.env.PORT || 3000

import mongoose from 'mongoose'

const networkData = os.networkInterfaces()
const ipLocal = networkData.eth0[0].address

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('mongoDB is ready')
    const server = app.listen(port, () => {
      console.log(
        `Server listening at http://localhost:${port} \nand in local netwotk at http://${ipLocal}:${port}`,
      )
    })
    server.on('error', console.error)
  })
  .catch((err) => {
    console.log(`MongoDb error: ${err}`)
  })
